const CACHE_NAME = 'zelda-walkthroughs-v1';

// Get the asset prefix from the current location
const getAssetPrefix = () => {
  const pathname = location.pathname;
  const match = pathname.match(/^(\/[^\/]+)\//);
  return match ? match[1] : '';
};

const assetPrefix = getAssetPrefix();

// Service worker scope
const SW_SCOPE = assetPrefix || '/';

const urlsToCache = [
  `${assetPrefix}/`,
  `${assetPrefix}/static/css/index.8646d976.css`,
  `${assetPrefix}/static/js/index.78de77f0.js`,
  `${assetPrefix}/static/js/lib-react.bc9a3f0c.js`,
  `${assetPrefix}/static/js/lib-router.95cb1783.js`,
  `${assetPrefix}/static/js/518.7904bcef.js`,
  `${assetPrefix}/manifest.json`,
  `${assetPrefix}/icons/icon-192x192.svg`,
  `${assetPrefix}/icons/icon-512x512.svg`,
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    }),
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
