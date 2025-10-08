#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Convert SVG to PNG using canvas in Node.js
 * This uses canvas API which is available in Node.js 18+
 */

const sizes = [96, 144, 192, 512];
const sourceFile = join(__dirname, '..', 'public', 'icons', 'icon-pwa.svg');
const outputDir = join(__dirname, '..', 'public', 'icons');

async function convertSvgToPng() {
  console.log('🎨 Converting SVG icons to PNG...\n');

  if (!existsSync(sourceFile)) {
    console.error('❌ Source SVG file not found:', sourceFile);
    process.exit(1);
  }

  // Read the SVG file
  const svgContent = readFileSync(sourceFile, 'utf8');

  // Try using sharp if available
  try {
    const sharp = await import('sharp');
    console.log('✅ Using sharp for conversion (high quality)');
    
    for (const size of sizes) {
      const outputFile = join(outputDir, `icon-${size}x${size}.png`);
      
      await sharp.default(Buffer.from(svgContent))
        .resize(size, size)
        .png()
        .toFile(outputFile);
      
      console.log(`✅ Generated ${size}x${size} PNG icon`);
    }
    
    console.log('\n✅ All PNG icons generated successfully!');
    return;
  } catch (error) {
    console.log('⚠️  Sharp not available, using alternative method...\n');
  }

  // Fallback: Use canvas if sharp is not available
  try {
    const { createCanvas, loadImage } = await import('canvas');
    console.log('✅ Using canvas for conversion');

    // Convert SVG to data URL for loading
    const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
    
    for (const size of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Load and draw the SVG
      const image = await loadImage(svgDataUrl);
      ctx.drawImage(image, 0, 0, size, size);
      
      // Save as PNG
      const outputFile = join(outputDir, `icon-${size}x${size}.png`);
      const buffer = canvas.toBuffer('image/png');
      writeFileSync(outputFile, buffer);
      
      console.log(`✅ Generated ${size}x${size} PNG icon`);
    }
    
    console.log('\n✅ All PNG icons generated successfully!');
  } catch (error) {
    console.error('\n❌ Canvas not available either. Installing required package...');
    console.error('Please run: npm install sharp');
    console.error('Or: npm install canvas');
    console.error('\nError:', error.message);
    process.exit(1);
  }
}

// Run the conversion
convertSvgToPng().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
