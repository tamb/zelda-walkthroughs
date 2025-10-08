/**
 * Cache utility functions for PWA refresh functionality
 */

/**
 * Clears the service worker cache while preserving IndexedDB/localforage data
 */
export const clearAppCache = async (): Promise<void> => {
  try {
    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName)),
      );
      console.log('✅ Service worker cache cleared');
    }

    // Force service worker update
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        // Send message to service worker to skip waiting
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // Update the service worker
        await registration.update();
        console.log('✅ Service worker updated');
      } else {
        // Fallback: unregister and re-register if no registration exists
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((reg) => reg.unregister()));
        await navigator.serviceWorker.register('sw.js');
        console.log('✅ Service worker re-registered');
      }
    }

    // Force reload to get fresh files
    window.location.reload();
  } catch (error) {
    console.error('❌ Error clearing cache:', error);
    throw error;
  }
};

/**
 * Checks if the app is running as a PWA (installed)
 */
export const isPWA = (): boolean => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true ||
    document.referrer.includes('android-app://')
  );
};

/**
 * Shows a confirmation dialog before clearing cache
 */
export const confirmCacheRefresh = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const confirmed = window.confirm(
      'This will refresh the app and download the latest version. Your progress and settings will be preserved. Continue?',
    );
    resolve(confirmed);
  });
};
