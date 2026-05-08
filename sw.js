const CACHE_NAME = 'my-plans-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => caches.delete(cache))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
