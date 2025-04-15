// Service Worker for portfolio website
const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/PORT3/',
  '/PORT3/index.html',
  '/PORT3/assets/css/index-Yc8F_VLa.css',
  '/PORT3/assets/index-Chc24z6y.js',
  '/PORT3/Photo.png',
  '/PORT3/icons/html.svg',
  '/PORT3/icons/css.svg',
  '/PORT3/icons/javascript.svg',
  '/PORT3/icons/typescript.svg',
  '/PORT3/icons/tailwind.svg',
  '/PORT3/icons/nodejs.svg',
  '/PORT3/icons/mui.svg',
  '/PORT3/icons/bootstrap.svg',
  '/PORT3/icons/firebase.svg',
  '/PORT3/makbookimage.png',
  '/PORT3/cherryos.jpg'
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
          return caches.match('/PORT3/index.html');
        }
      })
  );
}); 