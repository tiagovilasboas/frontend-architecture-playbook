import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileSync } from '@mdx-js/mdx';

// Resolve project root no matter where script is executed
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const CONTENT_DIR = path.join(ROOT, 'src', 'content');

function walk(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    const file = path.join(dir, name);
    return fs.statSync(file).isDirectory()
      ? walk(file)
      : file.endsWith('.mdx')
        ? [file]
        : [];
  });
}

function convertFile(mdxFile) {
  const mdxSrc = fs.readFileSync(mdxFile, 'utf8');
  const compiled = compileSync(mdxSrc, {
    outputFormat: 'function-body',
    providerImportSource: '@mdx-js/react',
    development: false,
  }).toString();

  const tsxPath = mdxFile.replace(/\.mdx$/, '.tsx');
  const relativeName = path.basename(mdxFile);
  const code = `/* Auto-generated from ${relativeName}. Do not edit directly. */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { TypographyStylesProvider } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';

function MDXContent(props) {
  ${compiled}
}

export const metadata = MDXContent.frontmatter ?? MDXContent.metadata ?? {};

export default function DocWrapper() {
  const components = { pre: (props) => <CodeHighlight {...props} /> };
  return (
    <TypographyStylesProvider>
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
    </TypographyStylesProvider>
  );
}
`;

  fs.writeFileSync(tsxPath, code, 'utf8');
  fs.unlinkSync(mdxFile);
  console.log('Converted', mdxFile, '->', tsxPath);
}

walk(CONTENT_DIR).forEach(convertFile);
