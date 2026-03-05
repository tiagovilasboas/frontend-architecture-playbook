/**
 * Copies the staff-level-shine project into themes/staff-level-shine.
 * Run from repo root: node scripts/copy-staff-level-shine.cjs [sourcePath]
 *
 * Default source: C:\Users\tcarv\Downloads\staff-level-shine-main\staff-level-shine-main
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DEFAULT_SOURCE = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  'Downloads',
  'staff-level-shine-main',
  'staff-level-shine-main'
);
const DEST = path.join(REPO_ROOT, 'themes', 'staff-level-shine');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function main() {
  const source = path.resolve(process.argv[2] || DEFAULT_SOURCE);

  if (!fs.existsSync(source)) {
    console.error('Source not found:', source);
    console.error('Usage: node scripts/copy-staff-level-shine.cjs [sourcePath]');
    process.exit(1);
  }

  if (!fs.existsSync(path.join(REPO_ROOT, 'themes'))) {
    fs.mkdirSync(path.join(REPO_ROOT, 'themes'), { recursive: true });
  }

  console.log('Copying:', source, '->', DEST);
  copyRecursive(source, DEST);
  console.log('Done. Theme is at themes/staff-level-shine');
}

main();
