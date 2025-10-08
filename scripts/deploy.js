#!/usr/bin/env node

import { execSync } from 'child_process';
import { deploymentConfig } from '../deploy.config.js';

console.log('🚀 Starting deployment process...');
console.log(`📦 Repository: ${deploymentConfig.repositoryName}`);
console.log(`🌐 Deployment URL: ${deploymentConfig.deploymentUrl}`);

try {
  // Build for GitHub Pages
  console.log('🔨 Building for GitHub Pages...');
  execSync('npm run build:gh-pages', { stdio: 'inherit' });

  // Deploy to GitHub Pages
  console.log('🚀 Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log('✅ Deployment completed successfully!');
  console.log(
    `🌐 Your app is now available at: ${deploymentConfig.deploymentUrl}`,
  );
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
