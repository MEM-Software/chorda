// Chorda Service Worker
// © 2026 Alessandro Rocca · MEM Software — All Rights Reserved

const CACHE_NAME = 'chorda-v1.0';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap'
];

// Install: precache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets strictly; fonts best-effort
      return cache.addAll(['./index.html', './manifest.json']).then(() => {
        return cache.add('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap')
          .catch(() => {}); // font failure is non-fatal
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for local, network-first for external
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always network-first for Google Fonts (then cache)
  if (url.hostname.includes('fonts.g') || url.hostname.includes('fonts.googleapis')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for everything else
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
