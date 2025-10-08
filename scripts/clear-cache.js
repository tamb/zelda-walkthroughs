#!/usr/bin/env node

/**
 * Clear cache script for development and deployment
 * This helps ensure fresh resources are loaded
 */

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧹 Clearing cache and old files...');

try {
  // Clear dist directory
  const distPath = join(__dirname, '..', 'dist');
  if (existsSync(distPath)) {
    console.log('📁 Clearing dist directory...');
    rmSync(distPath, { recursive: true, force: true });
  }

  // Clear node_modules/.cache if it exists
  const cachePath = join(__dirname, '..', 'node_modules', '.cache');
  if (existsSync(cachePath)) {
    console.log('🗑️  Clearing build cache...');
    rmSync(cachePath, { recursive: true, force: true });
  }

  console.log('✅ Cache cleared successfully!');
  console.log('💡 Tip: Hard refresh your browser (Ctrl+Shift+R) to clear browser cache');
  
} catch (error) {
  console.error('❌ Error clearing cache:', error.message);
  process.exit(1);
}
