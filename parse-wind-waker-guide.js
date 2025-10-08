#!/usr/bin/env node

/**
 * Wind Waker Guide Parser
 *
 * This script parses the original Wind Waker guide text file and breaks it into
 * separate files by major section. Each section file is prefixed with an underscore
 * and retains the original text formatting.
 *
 * Usage: node parse-wind-waker-guide.js
 *
 * The script will:
 * 1. Read the original guide text file
 * 2. Identify major sections using pattern matching
 * 3. Create separate files for each section with underscore prefix
 * 4. Preserve original formatting and content
 * 5. Generate a summary of created files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Path to the original guide file
  inputFile: path.join(
    __dirname,
    'src/pages/Guides/WindWaker/original_guide.txt',
  ),

  // Output directory for section files
  outputDir: path.join(__dirname, 'src/pages/Guides/WindWaker/sections'),

  // File extension for output files
  outputExtension: '.txt',

  // Whether to create the output directory if it doesn't exist
  createOutputDir: true,

  // Whether to overwrite existing files
  overwriteExisting: false,
};

/**
 * Section patterns to identify major sections in the guide
 * These patterns are based on the structure identified in the TODO file
 */
const SECTION_PATTERNS = [
  // Version History
  {
    id: 'version-history',
    title: 'Version History',
    pattern: /^1\.\s*Version\s+History/i,
    priority: 1,
  },

  // Introduction
  {
    id: 'introduction',
    title: 'Introduction',
    pattern: /^2\.\s*Introduction/i,
    priority: 2,
  },

  // Items & Spoils
  {
    id: 'items-spoils',
    title: 'Items & Spoils',
    pattern: /^3\.\s*Items\s*[&\/]\s*Spoils/i,
    priority: 3,
  },

  // General Tips
  {
    id: 'general-tips',
    title: 'General Tips/Tricks',
    pattern: /^4\.\s*General\s+tips\s*[\/\&]\s*tricks/i,
    priority: 4,
  },

  // Basic Enemies
  {
    id: 'basic-enemies',
    title: 'Basic Enemies',
    pattern: /^5\.\s*Basic\s+enemies/i,
    priority: 5,
  },

  // Walkthrough sections (6.a through 6.z)
  {
    id: 'walkthrough-outset',
    title: 'Walkthrough - Outset Island',
    pattern: /^6\.a\.?\s*Outset/i,
    priority: 6.1,
  },
  {
    id: 'walkthrough-forsaken-fortress',
    title: 'Walkthrough - Storming the Forsaken Fortress',
    pattern: /^6\.b\.?\s*Storming\s+the\s+Forsaken\s+Fortress/i,
    priority: 6.2,
  },
  {
    id: 'walkthrough-windfall-sail',
    title: 'Walkthrough - Windfall Island and the Quest for a Sail',
    pattern:
      /^6\.c\.?\s*Windfall\s+Island\s+and\s+the\s+["']quest["']\s+for\s+a\s+sail/i,
    priority: 6.3,
  },
  {
    id: 'walkthrough-rito-tribe',
    title: 'Walkthrough - The Rito Tribe and Dragon Roost Island',
    pattern: /^6\.d\.?\s*The\s+Rito\s+tribe\s+and\s+Dragon\s+Roost\s+Island/i,
    priority: 6.4,
  },
  {
    id: 'walkthrough-dungeon-1',
    title: 'Walkthrough - Dungeon #1: Dragon Roost Cavern',
    pattern: /^6\.e\.?\s*Dungeon\s*#1:\s*Dragon\s+Roost\s+Cavern/i,
    priority: 6.5,
  },
  {
    id: 'walkthrough-forest-haven',
    title: 'Walkthrough - Forest Haven',
    pattern: /^6\.f\.?\s*Forest\s+Haven/i,
    priority: 6.6,
  },
  {
    id: 'walkthrough-dungeon-2',
    title: 'Walkthrough - Dungeon #2: Forbidden Woods',
    pattern: /^6\.g\.?\s*Dungeon\s*#2:\s*Forbidden\s+Woods/i,
    priority: 6.7,
  },
  {
    id: 'walkthrough-windfall-pirate',
    title: 'Walkthrough - Return to Windfall Island and More Pirate Fun',
    pattern:
      /^6\.h\.?\s*Return\s+to\s+Windfall\s+Island\s+and\s+more\s+pirate\s+fun/i,
    priority: 6.8,
  },
  {
    id: 'walkthrough-third-pearl',
    title: 'Walkthrough - Getting the Third Pearl and Raising the Tower',
    pattern:
      /^6\.i\.?\s*Getting\s+the\s+third\s+pearl\s+and\s+raising\s+the\s+tower/i,
    priority: 6.9,
  },
  {
    id: 'walkthrough-dungeon-3',
    title: 'Walkthrough - Dungeon #3: Tower of the Gods',
    pattern: /^6\.j\.?\s*Dungeon\s*#3:\s*Tower\s+of\s+the\s+Gods/i,
    priority: 6.1,
  },
  {
    id: 'walkthrough-lost-castle',
    title: 'Walkthrough - A Lost Castle and a Legendary Sword',
    pattern: /^6\.k\.?\s*A\s+lost\s+castle\s+and\s+a\s+legendary\s+sword/i,
    priority: 6.11,
  },
  {
    id: 'walkthrough-forsaken-return',
    title:
      'Walkthrough - Return to the Forsaken Fortress and a Destiny Revealed',
    pattern:
      /^6\.l\.?\s*Return\s+to\s+the\s+Forsaken\s+Fortress\s+and\s+a\s+destiny\s+revealed/i,
    priority: 6.12,
  },
  {
    id: 'walkthrough-upgrading',
    title: 'Walkthrough - Upgrading and Collection Run',
    pattern: /^6\.m\.?\s*Upgrading\s+and\s+collection\s+run/i,
    priority: 6.13,
  },
  {
    id: 'walkthrough-power-bracelets',
    title: 'Walkthrough - Power Bracelets and Fire Mountain',
    pattern: /^6\.n\.?\s*Power\s+bracelets\s+and\s+Fire\s+Mountain/i,
    priority: 6.14,
  },
  {
    id: 'walkthrough-iron-boots',
    title: 'Walkthrough - Iron Boots and Ice Ring Isle',
    pattern: /^6\.o\.?\s*Iron\s+boots\s+and\s+Ice\s+Ring\s+Isle/i,
    priority: 6.15,
  },
  {
    id: 'walkthrough-medli',
    title: "Walkthrough - Enlisting Medli's Help",
    pattern: /^6\.p\.?\s*Enlisting\s+Medli['\']s\s+help/i,
    priority: 6.16,
  },
  {
    id: 'walkthrough-dungeon-4',
    title: 'Walkthrough - Dungeon #4: Earth Temple',
    pattern: /^6\.q\.?\s*Dungeon\s*#4:\s*Earth\s+Temple/i,
    priority: 6.17,
  },
  {
    id: 'walkthrough-makar',
    title: 'Walkthrough - Makar Lends a Hand',
    pattern: /^6\.r\.?\s*Makar\s+lends\s+a\s+hand/i,
    priority: 6.18,
  },
  {
    id: 'walkthrough-dungeon-5',
    title: 'Walkthrough - Dungeon #5: Wind Temple',
    pattern: /^6\.s\.?\s*Dungeon\s*#5:\s*Wind\s+Temple/i,
    priority: 6.19,
  },
  {
    id: 'walkthrough-world-tour-1',
    title: "Walkthrough - Link's World Tour #1: Exploring the Globe",
    pattern:
      /^6\.t\.?\s*Link['\']s\s+world\s+tour\s*#1:\s*Exploring\s+the\s+globe/i,
    priority: 6.2,
  },
  {
    id: 'walkthrough-tingle',
    title: 'Walkthrough - Tingle Proves Useful',
    pattern: /^6\.u\.?\s*Tingle\s+proves\s+useful/i,
    priority: 6.21,
  },
  {
    id: 'walkthrough-world-tour-2',
    title: "Walkthrough - Link's World Tour #2: Treasure and Triforce",
    pattern:
      /^6\.v\.?\s*Link['\']s\s+world\s+tour\s*#2:\s*Treasure\s+and\s+Triforce/i,
    priority: 6.22,
  },
  {
    id: 'walkthrough-return-hyrule',
    title: 'Walkthrough - Return to Hyrule',
    pattern: /^6\.w\.?\s*Return\s+to\s+Hyrule/i,
    priority: 6.23,
  },
  {
    id: 'walkthrough-final-dungeon',
    title: "Walkthrough - Final Dungeon: Ganon's Tower",
    pattern: /^6\.x\.?\s*Final\s+Dungeon:\s*Ganon['\']s\s+Tower/i,
    priority: 6.24,
  },
  {
    id: 'walkthrough-ultimate-showdown',
    title: 'Walkthrough - The Ultimate Showdown',
    pattern: /^6\.y\.?\s*The\s+Ultimate\s+Showdown/i,
    priority: 6.25,
  },
  {
    id: 'walkthrough-ending',
    title: 'Walkthrough - Ending',
    pattern: /^6\.z\.?\s*Ending/i,
    priority: 6.26,
  },

  // Reference Lists
  {
    id: 'reference-songs',
    title: 'Reference - Wind Waker Songs',
    pattern: /^7\.a\.?\s*Wind\s+Waker\s+songs/i,
    priority: 7.1,
  },
  {
    id: 'reference-bottles',
    title: 'Reference - Locations of Bottles',
    pattern: /^7\.b\.?\s*Locations\s+of\s+bottles/i,
    priority: 7.2,
  },
  {
    id: 'reference-upgrades',
    title: 'Reference - Arrow/Bomb/Magic/Wallet Upgrades',
    pattern:
      /^7\.c\.?\s*Arrow\s*[\/\&]\s*bomb\s*[\/\&]\s*magic\s*[\/\&]\s*wallet\s+upgrades/i,
    priority: 7.3,
  },
  {
    id: 'reference-triforce-maps',
    title: 'Reference - Triforce Maps',
    pattern: /^7\.d\.?\s*Triforce\s+maps/i,
    priority: 7.4,
  },
  {
    id: 'reference-treasure-maps',
    title: 'Reference - Treasure Maps',
    pattern: /^7\.e\.?\s*Treasure\s+maps/i,
    priority: 7.5,
  },
  {
    id: 'reference-heart-pieces',
    title: 'Reference - Heart Pieces',
    pattern: /^7\.f\.?\s*Heart\s+pieces/i,
    priority: 7.6,
  },
];

/**
 * Utility function to create a directory if it doesn't exist
 * @param {string} dirPath - Path to the directory to create
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Utility function to sanitize filename
 * @param {string} filename - Filename to sanitize
 * @returns {string} Sanitized filename
 */
function sanitizeFilename(filename) {
  return filename
    .replace(/[^a-zA-Z0-9\s\-_]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .toLowerCase();
}

/**
 * Find the next section start after a given line index
 * @param {string[]} lines - Array of text lines
 * @param {number} startIndex - Starting line index
 * @returns {number} Index of next section or -1 if not found
 */
function findNextSectionStart(lines, startIndex) {
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if this line matches any section pattern
    for (const section of SECTION_PATTERNS) {
      if (section.pattern.test(line)) {
        return i;
      }
    }
  }
  return -1; // No more sections found
}

/**
 * Extract content for a section between two line indices
 * @param {string[]} lines - Array of text lines
 * @param {number} startIndex - Starting line index (inclusive)
 * @param {number} endIndex - Ending line index (exclusive, or -1 for end of file)
 * @returns {string} Extracted content
 */
function extractSectionContent(lines, startIndex, endIndex) {
  const end = endIndex === -1 ? lines.length : endIndex;
  return lines.slice(startIndex, end).join('\n');
}

/**
 * Parse the guide file and extract sections
 * @param {string} filePath - Path to the input file
 * @returns {Array} Array of section objects with content
 */
function parseGuideFile(filePath) {
  console.log(`Reading guide file: ${filePath}`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file not found: ${filePath}`);
  }

  // Read the file content
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  console.log(`File contains ${lines.length} lines`);

  const sections = [];
  const foundSections = new Set();

  // Find all section starts
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if this line matches any section pattern
    for (const sectionPattern of SECTION_PATTERNS) {
      if (
        sectionPattern.pattern.test(line) &&
        !foundSections.has(sectionPattern.id)
      ) {
        console.log(`Found section: ${sectionPattern.title} at line ${i + 1}`);

        // Find the next section start
        const nextSectionIndex = findNextSectionStart(lines, i);

        // Extract content for this section
        const content = extractSectionContent(lines, i, nextSectionIndex);

        sections.push({
          id: sectionPattern.id,
          title: sectionPattern.title,
          priority: sectionPattern.pattern,
          content: content,
          startLine: i + 1,
          endLine: nextSectionIndex === -1 ? lines.length : nextSectionIndex,
        });

        foundSections.add(sectionPattern.id);
        break; // Move to next line after finding a match
      }
    }
  }

  // Sort sections by priority
  sections.sort((a, b) => a.priority - b.priority);

  console.log(`Found ${sections.length} sections`);
  return sections;
}

/**
 * Write a section to a file
 * @param {Object} section - Section object with id, title, and content
 * @param {string} outputDir - Output directory path
 * @param {string} extension - File extension
 */
function writeSectionToFile(section, outputDir, extension) {
  const filename = `_${sanitizeFilename(section.id)}${extension}`;
  const filePath = path.join(outputDir, filename);

  // Check if file already exists
  if (fs.existsSync(filePath) && !CONFIG.overwriteExisting) {
    console.log(`Skipping existing file: ${filename}`);
    return;
  }

  // Create the file content with a header
  const header = `# ${section.title}\n\n`;
  const content = header + section.content;

  // Write the file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filename} (${section.content.length} characters)`);
}

/**
 * Generate a summary file listing all created sections
 * @param {Array} sections - Array of section objects
 * @param {string} outputDir - Output directory path
 */
function generateSummaryFile(sections, outputDir) {
  const summaryPath = path.join(outputDir, '_section-summary.txt');

  let summary = '# Wind Waker Guide - Section Summary\n\n';
  summary += `Generated on: ${new Date().toISOString()}\n`;
  summary += `Total sections: ${sections.length}\n\n`;

  summary += '## Sections Created:\n\n';

  sections.forEach((section, index) => {
    summary += `${index + 1}. **${section.title}**\n`;
    summary += `   - File: _${sanitizeFilename(section.id)}.txt\n`;
    summary += `   - Lines: ${section.startLine}-${section.endLine}\n`;
    summary += `   - Size: ${section.content.length} characters\n\n`;
  });

  summary += '## Usage Notes:\n\n';
  summary += '- All section files are prefixed with an underscore (_)\n';
  summary += '- Original formatting has been preserved\n';
  summary += '- Files are organized by section priority\n';
  summary += '- Use this summary to navigate between sections\n\n';

  fs.writeFileSync(summaryPath, summary, 'utf8');
  console.log(`Created summary file: _section-summary.txt`);
}

/**
 * Main function to orchestrate the parsing process
 */
function main() {
  try {
    console.log('Wind Waker Guide Parser');
    console.log('======================\n');

    // Ensure output directory exists
    if (CONFIG.createOutputDir) {
      ensureDirectoryExists(CONFIG.outputDir);
    }

    // Parse the guide file
    const sections = parseGuideFile(CONFIG.inputFile);

    if (sections.length === 0) {
      console.log('No sections found in the guide file.');
      return;
    }

    console.log(`\nProcessing ${sections.length} sections...\n`);

    // Write each section to a separate file
    sections.forEach((section) => {
      writeSectionToFile(section, CONFIG.outputDir, CONFIG.outputExtension);
    });

    // Generate summary file
    generateSummaryFile(sections, CONFIG.outputDir);

    console.log('\n✅ Parsing complete!');
    console.log(`📁 Output directory: ${CONFIG.outputDir}`);
    console.log(`📄 Files created: ${sections.length + 1} (including summary)`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Export functions for potential use as a module
export {
  parseGuideFile,
  writeSectionToFile,
  generateSummaryFile,
  SECTION_PATTERNS,
  CONFIG,
};
