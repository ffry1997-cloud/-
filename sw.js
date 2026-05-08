const CACHE_NAME = 'my-plans-v2';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(names => Promise.all(names.map(n => caches.delete(n))))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
