/**
 * Cache utilities for PWA cache management
 */

/**
 * Clear all caches and force reload
 */
export const clearAllCaches = async (): Promise<void> => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    console.log('Clearing caches:', cacheNames);
    
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    
    console.log('All caches cleared');
  }
};

/**
 * Force service worker update and reload
 */
export const forceServiceWorkerUpdate = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        console.log('Forcing service worker update...');
        await registration.update();
        
        // Send message to service worker to skip waiting
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        
        // Reload the page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    } catch (error) {
      console.error('Failed to update service worker:', error);
    }
  }
};

/**
 * Clear all data and force fresh load
 */
export const forceFreshLoad = async (): Promise<void> => {
  console.log('Forcing fresh load...');
  
  // Clear all caches
  await clearAllCaches();
  
  // Force service worker update
  await forceServiceWorkerUpdate();
  
  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();
  
  // Reload the page
  window.location.reload();
};

/**
 * Check if service worker is available and registered
 */
export const isServiceWorkerSupported = (): boolean => {
  return 'serviceWorker' in navigator;
};

/**
 * Get service worker registration info
 */
export const getServiceWorkerInfo = async () => {
  if (!isServiceWorkerSupported()) {
    return null;
  }
  
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    return {
      registered: !!registration,
      scope: registration?.scope,
      state: registration?.active?.state,
    };
  } catch (error) {
    console.error('Failed to get service worker info:', error);
    return null;
  }
};