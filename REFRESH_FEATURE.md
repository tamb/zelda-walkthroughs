# PWA Refresh Feature

## Overview
The refresh button allows users to manually update the app and download the latest version while preserving their progress and settings stored in IndexedDB/localforage.

## How It Works

### 1. **Cache Clearing**
- Clears all service worker caches
- Forces download of fresh files from the server
- Preserves IndexedDB/localforage data (user progress, settings)

### 2. **Service Worker Update**
- Forces the service worker to update
- Re-registers the service worker if needed
- Ensures the latest version is active

### 3. **User Experience**
- Only visible when the app is running as a PWA (installed)
- Shows confirmation dialog before clearing cache
- Displays loading state during refresh
- Automatically reloads the page after clearing cache

## Technical Implementation

### Files Modified
- `src/components/Navbar/Navbar.tsx` - Added refresh button to navigation
- `src/utils/cacheUtils.ts` - Cache clearing utilities
- `public/sw.js` - Enhanced service worker with update handling

### Key Functions
- `clearAppCache()` - Main function that clears cache and updates service worker
- `isPWA()` - Detects if app is running as installed PWA
- `confirmCacheRefresh()` - Shows confirmation dialog

## Usage
1. Install the PWA
2. Look for the "🔄 Refresh" button in the navigation (only visible in PWA mode)
3. Click the button and confirm the action
4. The app will clear its cache and download the latest version

## Benefits
- **Manual Updates**: Users can get updates without waiting for automatic service worker updates
- **Data Preservation**: User progress and settings are preserved
- **Fresh Content**: Ensures users get the latest content and bug fixes
- **Offline Capability**: App remains functional offline after refresh

## Browser Support
- Works in all modern browsers that support PWAs
- Requires service worker support
- Uses standard Cache API and Service Worker API
