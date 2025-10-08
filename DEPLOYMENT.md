# GitHub Pages Deployment Guide

This guide explains how to deploy your Zelda Walkthroughs PWA to GitHub Pages.

## Prerequisites

- A GitHub repository
- Node.js and npm installed
- Git configured

## Deployment Methods

### Method 1: GitHub Actions (Automated) ⭐ Recommended

This method automatically deploys your app whenever you push to the main branch.

#### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Check deployment:**
   - Go to the **Actions** tab in your repository
   - You should see a workflow running called "Deploy to GitHub Pages"
   - Once complete, your app will be available at:
     ```
     https://<your-username>.github.io/zelda-walkthroughs/
     ```

#### Benefits:
- ✅ Automatic deployment on every push
- ✅ No manual intervention required
- ✅ Build logs and error tracking
- ✅ Rollback capabilities

### Method 2: Manual Deployment

Deploy manually using the gh-pages package.

#### Setup Steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   # Option A: Simple deployment
   npm run deploy
   
   # Option B: Using the deployment script
   npm run deploy:script
   ```

3. **Your app will be available at:**
   ```
   https://<your-username>.github.io/zelda-walkthroughs/
   ```

#### Benefits:
- ✅ Full control over deployment timing
- ✅ Can deploy from any branch
- ✅ Good for testing before automatic deployment

### Method 3: Local Testing

Test your GitHub Pages build locally before deploying.

#### Commands:

```bash
# Build for GitHub Pages (with correct asset paths)
npm run build:gh-pages

# Preview the production build
npm run preview

# Regular development server
npm run dev
```

## Configuration

### Repository Settings

Update the repository name in these files if needed:

1. **`deploy.config.js`** - Update `repositoryName` and `githubUsername`
2. **`package.json`** - Update the `REPOSITORY_NAME` in build scripts
3. **`.github/workflows/deploy.yml`** - Update `REPOSITORY_NAME` environment variable

### Asset Prefix

The app automatically handles asset prefixes for GitHub Pages:
- Local development: `/` (root)
- GitHub Pages: `/zelda-walkthroughs/` (repository name)

## Troubleshooting

### Common Issues:

1. **Assets not loading:**
   - Ensure `assetPrefix` is correctly set in `rsbuild.config.ts`
   - Check that the repository name matches in all configuration files

2. **Service Worker not working:**
   - Verify the service worker is correctly handling asset prefixes
   - Check browser developer tools for service worker errors

3. **PWA not installable:**
   - Ensure the manifest.json is accessible
   - Check that all required meta tags are present
   - Verify HTTPS is enabled (GitHub Pages provides this automatically)

### Debug Steps:

1. **Check build output:**
   ```bash
   npm run build:gh-pages
   ls -la dist/
   ```

2. **Test locally:**
   ```bash
   npm run preview
   # Open browser and check network tab for 404s
   ```

3. **Check GitHub Actions logs:**
   - Go to Actions tab → Click on failed workflow → Check logs

## Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Update DNS settings:**
   - Add CNAME record pointing to `<username>.github.io`

3. **Enable custom domain in GitHub Pages settings**

## Security Considerations

- GitHub Pages automatically provides HTTPS
- Service worker works only over HTTPS
- PWA features require secure context

## Performance Tips

- The app uses asset prefixing for optimal GitHub Pages performance
- Service worker caches resources for offline use
- Build process optimizes assets for production

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all configuration files are correct
3. Test locally with `npm run build:gh-pages`
4. Check browser developer tools for errors
