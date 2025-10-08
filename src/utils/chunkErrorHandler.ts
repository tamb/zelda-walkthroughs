/**
 * Chunk loading error handler for GitHub Pages
 * Handles cases where chunks fail to load due to path issues
 */

/**
 * Handles chunk loading errors and provides fallbacks
 */
export const handleChunkError = (error: Error, retry: () => void) => {
  console.warn('Chunk loading failed, attempting to reload:', error);

  // If it's a chunk loading error, try to reload the page
  if (
    error.message.includes('Loading chunk') ||
    error.message.includes('Loading CSS chunk')
  ) {
    console.log('Chunk loading error detected, reloading page...');
    window.location.reload();
    return;
  }

  // For other errors, retry once
  setTimeout(retry, 1000);
};

/**
 * Sets up global error handling for chunk loading issues
 */
export const setupChunkErrorHandling = () => {
  // Handle unhandled promise rejections (common with chunk loading errors)
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason;

    if (error && typeof error === 'object' && error.message) {
      if (
        error.message.includes('Loading chunk') ||
        error.message.includes('Loading CSS chunk') ||
        error.message.includes('ChunkLoadError')
      ) {
        console.warn('Chunk loading error caught:', error.message);
        event.preventDefault(); // Prevent the error from being logged

        // Reload the page to get fresh chunks
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    }
  });

  // Handle regular errors
  window.addEventListener('error', (event) => {
    const error = event.error;

    if (error && typeof error === 'object' && error.message) {
      if (
        error.message.includes('Loading chunk') ||
        error.message.includes('Loading CSS chunk') ||
        error.message.includes('ChunkLoadError')
      ) {
        console.warn('Chunk loading error caught:', error.message);
        event.preventDefault();

        // Reload the page to get fresh chunks
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    }
  });
};
