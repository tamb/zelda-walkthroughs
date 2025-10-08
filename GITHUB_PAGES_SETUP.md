# GitHub Pages Environment Setup

## Issue
The deployment is being blocked by GitHub Pages environment protection rules.

## Solution

You need to configure the GitHub Pages environment in your repository settings:

### Step 1: Go to Repository Settings
1. Go to your repository: https://github.com/tamb/zelda-walkthroughs
2. Click **Settings** tab
3. Click **Pages** in the left sidebar

### Step 2: Configure Source
1. Under **Source**, select **GitHub Actions**
2. This enables the workflow deployment

### Step 3: Configure Environment (if needed)
1. Go to **Settings** → **Environments**
2. Look for **github-pages** environment
3. If it doesn't exist, create it:
   - Click **New environment**
   - Name it: `github-pages`
   - Click **Configure environment**

### Step 4: Set Branch Protection (if needed)
1. In the **github-pages** environment settings
2. Under **Environment protection rules**:
   - **Required reviewers**: Leave empty (or add yourself)
   - **Wait timer**: 0 minutes
   - **Deployment branches**: 
     - Select **Selected branches**
     - Add `main` to the allowed branches
     - Or select **All branches** to allow any branch

### Step 5: Alternative - Use Different Branch
If you can't modify the environment settings, you can:

1. **Create a `gh-pages` branch:**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. **Update the workflow to use `gh-pages` branch:**
   ```yaml
   on:
     push:
       branches:
         - gh-pages  # Change from 'main' to 'gh-pages'
   ```

3. **Deploy to the branch:**
   ```bash
   npm run deploy
   ```

### Step 6: Manual Deployment (Quick Fix)
If the above doesn't work, you can deploy manually:

```bash
# Build the project
npm run build:gh-pages

# Deploy using gh-pages package
npx gh-pages -d dist
```

This will push the built files directly to the `gh-pages` branch, bypassing the workflow.

## Verification

After fixing the environment:
1. Push your changes to trigger the workflow
2. Check the **Actions** tab for successful deployment
3. Visit your site at: https://tamb.github.io/zelda-walkthroughs/

## Common Issues

- **Environment doesn't exist**: Create it manually in Settings → Environments
- **Branch not allowed**: Add `main` to deployment branches in environment settings
- **Permission denied**: Check repository permissions and GitHub Pages settings
