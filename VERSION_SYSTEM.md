# Version System

## Overview
The app automatically displays the version number from `package.json` in two places:
1. **Page Title**: Shows in the browser tab as "Zelda Walkthroughs v1.0.0"
2. **Navbar Brand**: Shows next to the app name in the navigation bar

## How It Works

### 1. **Build Process Integration**
- The `build:gh-pages` script automatically runs version injection after building
- Reads version from `package.json` and injects it into the HTML title
- Uses a post-build script to ensure version is always current

### 2. **Version Display Locations**

#### **Page Title (Browser Tab)**
```html
<title>Zelda Walkthroughs <small class="text-muted">v1.0.0</small></title>
```

#### **Navbar Brand (UI)**
```jsx
<BSNavbar.Brand>
  Zelda Walkthroughs
  <small className="text-muted ms-1">v1.0.0</small>
</BSNavbar.Brand>
```

### 3. **Files Involved**

- `package.json` - Source of version information
- `scripts/inject-version.js` - Post-build script that injects version into HTML
- `src/utils/versionUtils.ts` - Utility functions for version display
- `src/components/Navbar/Navbar.tsx` - Displays version in navbar

### 4. **Updating Version**

To update the version:
1. Update the `version` field in `package.json`
2. Run `npm run build:gh-pages`
3. The new version will automatically appear in both locations

### 5. **Build Scripts**

```json
{
  "scripts": {
    "build:gh-pages": "GITHUB_PAGES=true REPOSITORY_NAME=zelda-walkthroughs rsbuild build && node scripts/inject-version.js"
  }
}
```

## Benefits

- ✅ **Automatic**: Version is always up-to-date with package.json
- ✅ **Consistent**: Same version displayed in title and navbar
- ✅ **Build-time**: No runtime version fetching needed
- ✅ **GitHub Pages Ready**: Works with the deployment process

## Styling

The version is displayed with Bootstrap's `text-muted` class for a subtle appearance:
- Small font size
- Muted color
- Proper spacing with `ms-1` margin

This ensures the version is visible but doesn't interfere with the main UI design.
