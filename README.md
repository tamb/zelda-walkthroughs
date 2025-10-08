# Zelda Walkthroughs

A Progressive Web App (PWA) for interactive walkthroughs and guides for The Legend of Zelda games.

## Features

- 📱 **Progressive Web App** - Installable on mobile and desktop devices
- 🔄 **Offline Support** - Works without internet connection
- 🎮 **Interactive Guides** - Step-by-step walkthroughs for Zelda games
- 📱 **Mobile Optimized** - Responsive design for all screen sizes

## PWA Features

This app is a fully functional Progressive Web App with:

- **Installable** - Add to home screen on mobile devices and install on desktop
- **Offline Support** - Service worker caches content for offline use
- **App-like Experience** - Standalone display mode without browser UI
- **Fast Loading** - Optimized assets and caching strategies

## Setup

Install the dependencies:

```bash
npm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
npm run dev
```

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This app is configured for deployment to GitHub Pages with multiple deployment options:

### Option 1: GitHub Actions (Recommended)
The app includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Your app will be available at:**
   ```
   https://<your-username>.github.io/zelda-walkthroughs/
   ```

### Option 2: Manual Deployment
Deploy manually using the gh-pages package:

```bash
# Build and deploy to GitHub Pages
npm run deploy

# Or use the deployment script
npm run deploy:script
```

### Option 3: Local Development
For local development and testing:

```bash
# Regular development build
npm run dev

# Build for GitHub Pages (with correct asset paths)
npm run build:gh-pages

# Preview the production build
npm run preview
```

## Installation

### Mobile (iOS/Android)
1. Open the app in your mobile browser
2. Look for the "Add to Home Screen" option in your browser menu
3. Tap "Add" to install the app

### Desktop (Chrome/Edge)
1. Open the app in Chrome or Edge
2. Look for the install icon in the address bar
3. Click "Install" to add the app to your desktop

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!
