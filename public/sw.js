const CACHE_NAME = 'zelda-walkthroughs-v3-alpha2';
const CACHE_VERSION = '1.0.0-alpha.2';

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
  console.log('Service Worker installing...', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache', CACHE_NAME);
      // Cache core resources first
      return cache.addAll(urlsToCache).catch((error) => {
        console.warn('Failed to cache some resources:', error);
        // Continue even if some resources fail to cache
        return Promise.resolve();
      });
    }),
  );
  // Force skip waiting to ensure new version takes control immediately
  self.skipWaiting();
});

// Fetch event - network first strategy for fresh content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
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
        // If network fails, try cache as fallback
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          
          // If no cache and network fails, return offline page or fallback
          if (event.request.destination === 'document') {
            return caches.match(`${assetPrefix}/`);
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...', CACHE_VERSION);
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        console.log('Found caches:', cacheNames);
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
        console.log('Cache cleanup complete, taking control...');
        // Take control of all clients immediately
        return self.clients.claim();
      })
      .then(() => {
        // Send message to all clients to reload
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: CACHE_VERSION,
            });
          });
        });
      }),
  );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
