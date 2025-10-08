const CACHE_NAME = 'zelda-walkthroughs-v2';
const CACHE_VERSION = '1.0.0';

// Get the asset prefix from the current location
const getAssetPrefix = () => {
  const pathname = location.pathname;
  const match = pathname.match(/^(\/[^\/]+)\//);
  return match ? match[1] : '';
};

const assetPrefix = getAssetPrefix();

// Service worker scope
const SW_SCOPE = assetPrefix || '/';

// Dynamic cache URLs - will be populated at runtime
const urlsToCache = [
  `${assetPrefix}/`,
  `${assetPrefix}/manifest.json`,
  `${assetPrefix}/icons/icon-192x192.svg`,
  `${assetPrefix}/icons/icon-512x512.svg`,
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      // Cache core resources first
      return cache.addAll(urlsToCache).catch((error) => {
        console.warn('Failed to cache some resources:', error);
        // Continue even if some resources fail to cache
        return Promise.resolve();
      });
    }),
  );
  // Only skip waiting in production
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    self.skipWaiting();
  }
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      // If not in cache, fetch from network and cache it
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache the response for future use
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // If network fails and no cache, return offline page or fallback
          if (event.request.destination === 'document') {
            return caches.match(`${assetPrefix}/`);
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
    }),
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        // Clear all caches to force fresh load
        return caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              console.log('Clearing cache:', cacheName);
              return caches.delete(cacheName);
            }),
          );
        });
      })
      .then(() => {
        // Take control of all clients immediately
        return self.clients.claim();
      }),
  );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
