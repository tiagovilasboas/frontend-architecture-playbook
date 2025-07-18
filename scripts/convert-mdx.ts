import fs from 'fs';
import path from 'path';
import { compileSync } from '@mdx-js/mdx';

const CONTENT_DIR = path.resolve('src/content');

function walk(dir: string): string[] {
  return fs.readdirSync(dir).flatMap(name => {
    const file = path.join(dir, name);
    return fs.statSync(file).isDirectory()
      ? walk(file)
      : file.endsWith('.mdx')
        ? [file]
        : [];
  });
}

function convertFile(mdxFile: string) {
  try {
    const mdxSrc = fs.readFileSync(mdxFile, 'utf8');
    // Compile MDX to plain JSX (function-body) so we can embed inside a TSX file
    const compiled = compileSync(mdxSrc, {
      outputFormat: 'function-body',
      providerImportSource: '@mdx-js/react',
      development: false,
    }).toString();
    const tsxPath = mdxFile.replace(/\.mdx$/, '.tsx');
    const code = `/* Auto-generated from ${path.basename(mdxFile)} */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { TypographyStylesProvider } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';

function MDXContent(props: Record<string, unknown>) {
  ${compiled}
}

export default function Doc() {
  const components = { pre: (props: any) => <CodeHighlight {...props} /> };
  return (
    <TypographyStylesProvider>
      <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider>
    </TypographyStylesProvider>
  );
}
`;
    fs.writeFileSync(tsxPath, code);
    fs.unlinkSync(mdxFile);
    console.log('Converted', mdxFile, '→', tsxPath);
  } catch (err) {
    console.error('Failed to convert', mdxFile, err);
    throw err; // rethrow for visibility
  }
}

walk(CONTENT_DIR).forEach(convertFile);
