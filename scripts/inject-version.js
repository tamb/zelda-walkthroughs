#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Injects version number into HTML title during build
 */
function injectVersionIntoHTML() {
  try {
    // Read package.json to get version
    const packageJsonPath = join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const version = packageJson.version;

    console.log(`📦 Injecting version ${version} into HTML...`);

    // Read the built HTML file
    const htmlPath = join(__dirname, '..', 'dist', 'index.html');
    let htmlContent = readFileSync(htmlPath, 'utf8');

    // Update the title to include version
    const titleRegex = /<title>(.*?)<\/title>/;
    const titleMatch = htmlContent.match(titleRegex);

    if (titleMatch) {
      const currentTitle = titleMatch[1];
      const newTitle = `${currentTitle} <small class="text-muted">v${version}</small>`;
      htmlContent = htmlContent.replace(
        titleRegex,
        `<title>${newTitle}</title>`,
      );

      // Write the updated HTML back
      writeFileSync(htmlPath, htmlContent, 'utf8');
      console.log(`✅ Version ${version} injected into title`);
    } else {
      console.warn('⚠️  Could not find title tag in HTML');
    }
  } catch (error) {
    console.error('❌ Error injecting version:', error.message);
    process.exit(1);
  }
}

// Run the injection
injectVersionIntoHTML();
