#!/usr/bin/env node
/**
 * Copies content JSON from the app (src/data/content) into mcp-server/data/content
 * so the MCP server can serve full content as markdown.
 * - guides → mcp-server/data/content/guides
 * - best-practices → mcp-server/data/content/best-practices
 * - architectures → mcp-server/data/content/architectures
 * - patterns → mcp-server/data/content/patterns
 * - techniques → mcp-server/data/content/techniques
 *
 * Run from repo root: cd mcp-server && node scripts/prepare-data.js
 * Or: npm run prepare-data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptDir = __dirname;
const mcpRoot = path.join(scriptDir, '..');
const repoRoot = path.join(mcpRoot, '..');

function copyCollection(collection) {
  const sourceDir = path.join(repoRoot, 'src', 'data', 'content', collection);
  const targetDir = path.join(mcpRoot, 'data', 'content', collection);

  if (!fs.existsSync(sourceDir)) {
    console.warn('Source not found:', sourceDir);
    return;
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));
  for (const file of files) {
    const src = path.join(sourceDir, file);
    const dest = path.join(targetDir, file);
    fs.copyFileSync(src, dest);
    console.log(collection + '/', file);
  }
}

copyCollection('guides');
copyCollection('best-practices');
copyCollection('architectures');
copyCollection('patterns');
copyCollection('techniques');

console.log(
  'Done. Content is in mcp-server/data/content/ (guides, best-practices, architectures, patterns, techniques)'
);
