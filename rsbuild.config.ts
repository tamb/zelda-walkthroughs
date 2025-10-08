import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

// Check if we're building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.REPOSITORY_NAME || 'zelda-walkthroughs';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    template: './public/index.html',
    inject: 'body',
    scriptLoading: 'defer',
  },
  output: {
    // Set asset prefix for GitHub Pages deployment
    assetPrefix: isGitHubPages ? `/${repositoryName}/` : '/',
    copy: [
      {
        from: './public/manifest.json',
        to: './manifest.json',
      },
      {
        from: './public/sw.js',
        to: './sw.js',
      },
      {
        from: './public/icons',
        to: './icons',
      },
      {
        from: './.nojekyll',
        to: './.nojekyll',
      },
    ],
  },
});
