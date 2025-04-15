// Service Worker for portfolio website
const CACHE_NAME = 'portfolio-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/index-*.css',
  '/assets/index-*.js',
  '/Photo.png',
  '/icons/html.svg',
  '/icons/css.svg',
  '/icons/javascript.svg',
  '/icons/typescript.svg',
  '/icons/tailwind.svg',
  '/icons/nodejs.svg',
  '/icons/mui.svg',
  '/icons/bootstrap.svg',
  '/icons/firebase.svg',
  '/makbookimage.png',
  '/cherryos.jpg'
];

// Install the service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and can only be consumed once. Since we want to return
            // the response to the browser and store it in the cache, we need to clone it.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // If both cache and network fail, show a generic fallback
        if (event.request.url.indexOf('.html') > -1) {
          return caches.match('/index.html');
        }
      })
  );
}); 