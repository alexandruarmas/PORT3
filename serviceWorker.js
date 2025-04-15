// Service Worker for portfolio website
const CACHE_NAME = 'portfolio-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/index-Yc8F_VLa.css',
  '/assets/index-Chc24z6y.js',
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
  // Handle PORT3 path prefix for backward compatibility
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/PORT3/')) {
    // Create a new request with the modified URL
    const newUrl = url.pathname.replace('/PORT3/', '/');
    const newRequest = new Request(url.origin + newUrl, {
      method: event.request.method,
      headers: event.request.headers,
      mode: event.request.mode,
      credentials: event.request.credentials,
      redirect: event.request.redirect,
      cache: event.request.cache
    });
    
    event.respondWith(
      fetch(newRequest)
        .catch(() => caches.match(newRequest))
    );
    return;
  }

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