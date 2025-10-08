/**
 * Version utilities for displaying version information
 */

/**
 * Gets the version from package.json at build time
 * This will be replaced by the build process with the actual version
 */
export const getAppVersion = (): string => {
  // This will be replaced by the build process
  return '1.0.0-alpha.2';
};

/**
 * Gets a formatted version string for display
 */
export const getFormattedVersion = (): string => {
  return `v${getAppVersion()}`;
};

/**
 * Gets version info for display in UI components
 */
export const getVersionInfo = () => {
  return {
    version: getAppVersion(),
    formatted: getFormattedVersion(),
    display: `v${getAppVersion()}`,
  };
};
