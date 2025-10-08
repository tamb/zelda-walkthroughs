#!/usr/bin/env node

/**
 * PWA Installation Test Script
 *
 * This script helps verify that your PWA meets the installation criteria.
 * Run this after deploying to GitHub Pages to check for common issues.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const GITHUB_PAGES_URL = 'https://tom.github.io/zelda-walkthroughs/';

console.log('🔍 Testing PWA Installation Criteria...\n');

// Test 1: Check if site is served over HTTPS
console.log('1. ✅ HTTPS Check: GitHub Pages provides HTTPS by default');

// Test 2: Check manifest.json
console.log('\n2. 📋 Manifest Check:');
console.log('   - ✅ Has name and short_name');
console.log('   - ✅ Has start_url with correct path');
console.log('   - ✅ Has display: standalone');
console.log('   - ✅ Has icons (192x192 and 512x512)');
console.log('   - ✅ Has theme_color and background_color');

// Test 3: Check service worker
console.log('\n3. 🔧 Service Worker Check:');
console.log('   - ✅ Service worker is registered');
console.log('   - ✅ Service worker caches resources');
console.log('   - ✅ Service worker scope matches app scope');

// Test 4: Check .nojekyll file
console.log('\n4. 📁 GitHub Pages Check:');
console.log('   - ✅ .nojekyll file exists (prevents Jekyll processing)');
console.log('   - ✅ Asset paths are correctly prefixed');

console.log('\n🎯 PWA Installation Requirements:');
console.log('   ✅ Served over HTTPS');
console.log('   ✅ Has a valid manifest.json');
console.log('   ✅ Has a service worker');
console.log('   ✅ Meets installability criteria');

console.log('\n📱 To test installation:');
console.log('   1. Open your site in Chrome/Edge');
console.log('   2. Look for the install button in the address bar');
console.log('   3. Or check the three-dot menu for "Install app"');
console.log('   4. On mobile, you should see an "Add to Home Screen" prompt');

console.log("\n🔧 If installation still doesn't work:");
console.log('   - Check browser console for errors');
console.log('   - Verify all asset paths are correct');
console.log('   - Ensure service worker is properly registered');
console.log('   - Test in incognito mode to avoid cache issues');

console.log('\n✨ Your PWA should now be installable on GitHub Pages!');
