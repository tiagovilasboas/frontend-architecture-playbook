/**
 * Validação de conteúdo (content-driven pages e glossário).
 *
 * - Garante que todos os JSON em src/data/content têm estrutura válida (meta.title, body, blocos com type conhecido).
 * - Sinaliza possível duplicata emoji + ícone: quando um bloco tem `icon` e o título/label/content começa com emoji.
 *
 * Rodar: npm test -- content-validation
 */

import * as fs from 'fs';
import * as path from 'path';
import { isContentPage } from '../content-schema';

const KNOWN_BLOCK_TYPES = new Set([
  'hero',
  'section',
  'text',
  'title',
  'list',
  'table',
  'badges',
  'code',
  'codeExample',
  'alert',
  'linkCards',
  'iconCards',
  'linkList',
  'callout',
  'richCardGrid',
  'anchor',
  'stack',
  'casesGrid',
  'architectureComparison',
  'decisionWizard',
  'timeline',
  'glossary',
]);

/** Emojis que costumam duplicar ícone (check, x, info, etc.) - ver ANALISE-EMOJI-SETA-ICONES.md */
const DECORATION_EMOJI = /^[\s]*(✅|❌|📈|📚|ℹ️|⚠️|🎯|←|→)/u;

function getJsonFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...getJsonFiles(full, baseDir));
    } else if (e.name.endsWith('.json')) {
      files.push(full);
    }
  }
  return files;
}

function* walkBlocks(body: unknown[]): Generator<Record<string, unknown>> {
  for (const block of body) {
    if (!block || typeof block !== 'object') continue;
    const b = block as Record<string, unknown>;
    yield b;
    if (Array.isArray(b.children)) yield* walkBlocks(b.children);
  }
}

describe('content validation', () => {
  const contentDir = path.join(process.cwd(), 'src', 'data', 'content');
  const jsonFiles = getJsonFiles(contentDir);

  it('loads all content JSON files without parse error', () => {
    expect(jsonFiles.length).toBeGreaterThan(0);
    for (const file of jsonFiles) {
      const raw = fs.readFileSync(file, 'utf8');
      expect(() => JSON.parse(raw)).not.toThrow();
    }
  });

  it('each content JSON has valid ContentPage structure (meta.title, body array)', () => {
    for (const file of jsonFiles) {
      const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
      expect(parsed).toBeDefined();
      expect(isContentPage(parsed)).toBe(true);
      expect(parsed.meta?.title).toBeDefined();
      expect(Array.isArray(parsed.body)).toBe(true);
    }
  });

  it('every block in body has a known type', () => {
    const unknown: { file: string; type: string }[] = [];
    for (const file of jsonFiles) {
      const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(parsed.body)) continue;
      for (const block of walkBlocks(parsed.body)) {
        const type = block.type;
        if (!type || !KNOWN_BLOCK_TYPES.has(type as string)) {
          unknown.push({
            file: path.relative(process.cwd(), file),
            type: String(type),
          });
        }
      }
    }
    expect(unknown).toEqual([]);
  });

  it('no block has both icon and title/label/content starting with decoration emoji (avoid duplicate)', () => {
    const duplicates: { file: string; blockType: string; text: string }[] = [];
    for (const file of jsonFiles) {
      const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(parsed.body)) continue;
      const rel = path.relative(process.cwd(), file);
      for (const block of walkBlocks(parsed.body)) {
        const hasIcon = block.icon != null;
        const title = typeof block.title === 'string' ? block.title : '';
        const label = typeof block.label === 'string' ? block.label : '';
        const content = typeof block.content === 'string' ? block.content : '';
        const text = title || label || content;
        if (hasIcon && text && DECORATION_EMOJI.test(text)) {
          duplicates.push({
            file: rel,
            blockType: String(block.type),
            text: text.slice(0, 40),
          });
        }
      }
    }
    expect(duplicates).toEqual([]);
  });
});

describe('glossary terms.json', () => {
  const termsPath = path.join(
    process.cwd(),
    'src',
    'data',
    'glossary',
    'terms.json'
  );

  it('exists and is valid JSON with terms array', () => {
    expect(fs.existsSync(termsPath)).toBe(true);
    const raw = fs.readFileSync(termsPath, 'utf8');
    const data = JSON.parse(raw);
    expect(Array.isArray(data.terms)).toBe(true);
  });

  it('each term has id, term, category, definition', () => {
    const data = JSON.parse(fs.readFileSync(termsPath, 'utf8'));
    for (const t of data.terms) {
      expect(t).toHaveProperty('id');
      expect(t).toHaveProperty('term');
      expect(t).toHaveProperty('category');
      expect(t).toHaveProperty('definition');
    }
  });
});
