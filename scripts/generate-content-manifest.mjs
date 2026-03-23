#!/usr/bin/env node
/**
 * Generates content-manifest.json from src/data/content JSON files.
 * Used by content-data.ts for sync metadata (title, description) and slug list.
 * Run from repo root: node scripts/generate-content-manifest.mjs
 * Runs automatically in prebuild.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');
const contentDir = path.join(repoRoot, 'src', 'data', 'content');
const outPath = path.join(repoRoot, 'src', 'data', 'content-manifest.json');

function walk(dir) {
  const entries = [];
  if (!fs.existsSync(dir)) return entries;

  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      entries.push(...walk(fullPath));
    } else if (name.endsWith('.json') && name !== 'manifest.json') {
      entries.push(fullPath);
    }
  }
  return entries;
}

const manifest = { entries: [] };

for (const filePath of walk(contentDir)) {
  const relative = path.relative(contentDir, filePath);
  const match = relative.match(/^([^/]+)\/(.+)\.json$/);
  if (!match) continue;

  const [, collection, slug] = match;
  let meta = { title: slug, description: '' };

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    if (data.meta?.title) meta.title = data.meta.title;
    if (data.meta?.description) meta.description = data.meta.description;
  } catch (e) {
    console.warn('Skipping', filePath, e.message);
  }

  manifest.entries.push({ collection, slug, ...meta });
}

fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), 'utf-8');
console.log('Generated content manifest:', manifest.entries.length, 'entries');
