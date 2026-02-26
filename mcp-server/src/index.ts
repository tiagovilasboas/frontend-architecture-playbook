#!/usr/bin/env node

// SDK exports McpServer from server/mcp but package.json doesn't expose that subpath; use path resolution
import { createRequire } from 'module';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const sdkRoot = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'node_modules',
  '@modelcontextprotocol',
  'sdk',
  'dist',
  'esm'
);
const { McpServer, ResourceTemplate } = require(
  join(sdkRoot, 'server', 'mcp.js')
);
const { StdioServerTransport } = require(join(sdkRoot, 'server', 'stdio.js'));
import { z } from 'zod';
import { readFileSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const CONTENT_GUIDES_DIR = join(DATA_DIR, 'content', 'guides');

interface PlaybookItem {
  href: string;
  label: string;
  slug?: string;
  title?: string;
  description?: string;
}

interface PlaybookSection {
  key: string;
  label: string;
  items: PlaybookItem[];
}

interface PlaybookData {
  baseUrl: string;
  navigation: PlaybookSection[];
}

// Minimal types for content-driven guide JSON (same shape as app content-schema)
interface ContentPage {
  meta: { title: string; description?: string };
  body: ContentBlock[];
}
type ContentBlock =
  | { type: 'hero'; title: string; subtitle?: string }
  | { type: 'section'; title?: string; children: ContentBlock[] }
  | { type: 'text'; content: string }
  | { type: 'title'; content: string; order?: number }
  | {
      type: 'list';
      items: (string | { title: string; description?: string })[];
      ordered?: boolean;
    }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'badges'; items: string[] }
  | { type: 'code'; code: string }
  | { type: 'codeExample'; title: string; description?: string; code: string }
  | { type: 'alert'; message: string }
  | {
      type: 'linkCards';
      cards: { title: string; description?: string; to: string }[];
    }
  | {
      type: 'iconCards';
      cards: { title: string; description?: string; items?: string[] }[];
    }
  | { type: 'callout'; title: string; content: string }
  | { type: 'anchor'; label: string; to?: string; href?: string }
  | {
      type: 'richCardGrid';
      cards: { title: string; subtitle?: string; bodyText?: string }[];
    }
  | { type: 'linkList'; links: { label: string; to: string }[] }
  | { type: 'stack'; children: ContentBlock[] };

function loadPlaybook(): PlaybookData {
  const raw = readFileSync(join(DATA_DIR, 'playbook.json'), 'utf-8');
  return JSON.parse(raw) as PlaybookData;
}

function loadCases(): unknown[] {
  const raw = readFileSync(join(DATA_DIR, 'cases.json'), 'utf-8');
  return JSON.parse(raw) as unknown[];
}

function loadGuideContent(slug: string): ContentPage | null {
  const path = join(CONTENT_GUIDES_DIR, `${slug}.json`);
  if (!existsSync(path)) return null;
  try {
    const raw = readFileSync(path, 'utf-8');
    return JSON.parse(raw) as ContentPage;
  } catch {
    return null;
  }
}

function blockToMarkdown(block: ContentBlock): string {
  const lines: string[] = [];
  switch (block.type) {
    case 'hero':
      lines.push(`# ${block.title}`);
      if (block.subtitle) lines.push('\n' + block.subtitle);
      break;
    case 'section':
      if (block.title) lines.push(`\n## ${block.title}\n`);
      for (const child of block.children || [])
        lines.push(blockToMarkdown(child));
      break;
    case 'text':
      lines.push((block as { content: string }).content);
      break;
    case 'title': {
      const order = (block as { order?: number }).order || 3;
      const prefix = '#'.repeat(Math.min(order, 4));
      lines.push(`\n${prefix} ${(block as { content: string }).content}\n`);
      break;
    }
    case 'list': {
      const listBlock = block as {
        items: (string | { title: string; description?: string })[];
        ordered?: boolean;
      };
      for (let i = 0; i < listBlock.items.length; i++) {
        const item = listBlock.items[i];
        const bullet = listBlock.ordered ? `${i + 1}.` : '-';
        const line =
          typeof item === 'string'
            ? item
            : `${item.title}${item.description ? ' ' + item.description : ''}`;
        lines.push(`${bullet} ${line}`);
      }
      break;
    }
    case 'table': {
      const t = block as { headers: string[]; rows: string[][] };
      lines.push(
        '\n' +
          t.headers.join(' | ') +
          '\n' +
          t.headers.map(() => '---').join(' | ')
      );
      for (const row of t.rows) {
        const cells = row.map(c => (c.startsWith('code:') ? c.slice(5) : c));
        lines.push(cells.join(' | '));
      }
      break;
    }
    case 'badges':
      lines.push((block as { items: string[] }).items.join(' · '));
      break;
    case 'code':
      lines.push('\n```\n' + (block as { code: string }).code + '\n```\n');
      break;
    case 'codeExample': {
      const ce = block as { title: string; description?: string; code: string };
      lines.push(`\n### ${ce.title}\n`);
      if (ce.description) lines.push(ce.description + '\n');
      lines.push('```\n' + ce.code + '\n```\n');
      break;
    }
    case 'alert':
      lines.push('\n> ' + (block as { message: string }).message + '\n');
      break;
    case 'linkCards':
      for (const card of (
        block as { cards: { title: string; description?: string }[] }
      ).cards)
        lines.push(
          `- **${card.title}**${card.description ? ': ' + card.description : ''}`
        );
      break;
    case 'iconCards':
      for (const card of (
        block as {
          cards: { title: string; description?: string; items?: string[] }[];
        }
      ).cards) {
        lines.push(
          `- **${card.title}**${card.description ? ': ' + card.description : ''}`
        );
        if (card.items?.length)
          card.items.forEach(it => lines.push(`  - ${it}`));
      }
      break;
    case 'callout':
      lines.push(
        `\n**${(block as { title: string }).title}**\n${(block as { content: string }).content}\n`
      );
      break;
    case 'anchor':
      lines.push(
        `- [${(block as { label: string }).label}](${(block as { to?: string; href?: string }).to || (block as { href?: string }).href || '#'})`
      );
      break;
    case 'richCardGrid':
      for (const card of (
        block as {
          cards: { title: string; subtitle?: string; bodyText?: string }[];
        }
      ).cards) {
        lines.push(`### ${card.title}`);
        if (card.subtitle) lines.push(card.subtitle);
        if (card.bodyText) lines.push(card.bodyText);
      }
      break;
    case 'linkList':
      for (const link of (block as { links: { label: string; to: string }[] })
        .links)
        lines.push(`- [${link.label}](${link.to})`);
      break;
    case 'stack':
      for (const child of (block as { children: ContentBlock[] }).children ||
        [])
        lines.push(blockToMarkdown(child));
      break;
    default:
      break;
  }
  return lines.join('\n');
}

function contentPageToMarkdown(page: ContentPage): string {
  const parts: string[] = [
    `# ${page.meta.title}`,
    page.meta.description ? `\n${page.meta.description}\n` : '',
  ];
  for (const block of page.body || []) parts.push(blockToMarkdown(block));
  return parts.join('\n');
}

function getAllGuides(playbook: PlaybookData): PlaybookItem[] {
  return playbook.navigation.flatMap(s => s.items);
}

function getGuideBySlug(
  playbook: PlaybookData,
  slug: string
): PlaybookItem | undefined {
  return getAllGuides(playbook).find(
    g => g.slug === slug || g.href.includes(slug)
  );
}

const server = new McpServer({
  name: 'frontend-architecture-playbook',
  version: '1.0.0',
});

const playbook = loadPlaybook();
const cases = loadCases();
const baseUrl =
  playbook.baseUrl || 'https://frontend-architecture-playbook.vercel.app';

/** Sequential thinking / reasoning guide: use when questions are about architecture, gaps, or best-practice violations */
const REASONING_GUIDE = `# Raciocínio sequencial (playbook)

Use **pensamento sequencial** (step-by-step) quando a pergunta envolver:

1. **Decisões de arquitetura** – escolha ou comparação de arquitetura (SPA, SSR, micro-frontends, camadas, etc.)
2. **Buracos de arquitetura** – algo que está faltando, inconsistente ou frágil na estrutura/código
3. **Violação de boas práticas** – quando o contexto ou o código foge de princípios do playbook (Dependency Rule, SRP, DRY, KISS, Clean Code, SoC, segurança, etc.)

## Como proceder

- **Passo 1 – Contexto:** Entenda restrições, tamanho do time, domínio e estágio do produto.
- **Passo 2 – Princípio em jogo:** Identifique qual princípio, padrão ou gap está em causa (Dependency Rule, camadas, SRP, performance, segurança, etc.).
- **Passo 3 – Consultar o playbook:** Use \`playbook_get_guide\` ou \`playbook://guide/{slug}\` para o tópico relevante e baseie a resposta no conteúdo real.
- **Passo 4 – Raciocinar em sequência:** Exponha o raciocínio passo a passo (trade-offs, prós/contras) antes de concluir ou recomendar.
- **Passo 5 – Conclusão:** Resuma a recomendação ou os próximos passos, alinhados ao playbook.

Não pule direto para a resposta: raciocine em sequência e cite o playbook quando aplicável.
`;

// --- Resources ---

server.resource('playbook-index', async () => ({
  contents: [
    {
      uri: 'playbook://index',
      mimeType: 'application/json',
      text: JSON.stringify(
        {
          baseUrl,
          sections: playbook.navigation.map(s => ({
            section: s.label,
            items: s.items.map(i => ({
              title: i.title || i.label,
              description: i.description,
              href: i.href,
              url: `${baseUrl}${i.href}`,
            })),
          })),
        },
        null,
        2
      ),
    },
  ],
}));

server.resource('playbook-cases', async () => ({
  contents: [
    {
      uri: 'playbook://cases',
      mimeType: 'application/json',
      text: JSON.stringify(cases, null, 2),
    },
  ],
}));

server.resource('playbook-reasoning-guide', async () => ({
  contents: [
    {
      uri: 'playbook://reasoning-guide',
      mimeType: 'text/markdown',
      text: REASONING_GUIDE,
    },
  ],
}));

const guideTemplate = new ResourceTemplate('playbook://guide/{slug}', {
  list: async () =>
    getAllGuides(playbook).map(g => {
      const slug = g.slug || g.href.replace(/^\//, '').replace(/\//g, '-');
      return { uri: `playbook://guide/${slug}`, name: g.title || g.label };
    }),
});

server.resource('playbook-guide', guideTemplate, async (uri, { slug }) => {
  const guide = getGuideBySlug(playbook, slug);
  if (!guide) {
    return {
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/plain',
          text: `Guide not found: ${slug}. Use playbook://index to list all guides.`,
        },
      ],
    };
  }
  const contentPage = loadGuideContent(slug);
  if (contentPage) {
    const markdown = contentPageToMarkdown(contentPage);
    return {
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/markdown',
          text: markdown + `\n\n---\nURL: ${baseUrl}${guide.href}`,
        },
      ],
    };
  }
  return {
    contents: [
      {
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify(
          {
            title: guide.title || guide.label,
            description: guide.description,
            href: guide.href,
            url: `${baseUrl}${guide.href}`,
          },
          null,
          2
        ),
      },
    ],
  };
});

// --- Tools ---

server.tool('playbook_search', { query: z.string() }, async ({ query }) => {
  const q = query.toLowerCase();
  const guides = getAllGuides(playbook);
  const matches = guides.filter(
    g =>
      (g.title || g.label).toLowerCase().includes(q) ||
      (g.description || '').toLowerCase().includes(q)
  );
  const sectionMatches = playbook.navigation.filter(s =>
    s.label.toLowerCase().includes(q)
  );
  const result = {
    query,
    guides: matches.map(g => ({
      title: g.title || g.label,
      description: g.description,
      url: `${baseUrl}${g.href}`,
    })),
    sections: sectionMatches.map(s => ({
      section: s.label,
      items: s.items.map(i => ({
        title: i.title || i.label,
        url: `${baseUrl}${i.href}`,
      })),
    })),
  };
  return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
});

server.tool('playbook_get_guide', { slug: z.string() }, async ({ slug }) => {
  const guide = getGuideBySlug(playbook, slug);
  if (!guide) {
    return {
      content: [
        {
          type: 'text',
          text: `Guide not found: ${slug}. Use playbook_search to find guides.`,
        },
      ],
    };
  }
  const contentPage = loadGuideContent(slug);
  if (contentPage) {
    const markdown = contentPageToMarkdown(contentPage);
    const text = markdown + `\n\n---\nURL: ${baseUrl}${guide!.href}`;
    return { content: [{ type: 'text', text }] };
  }
  const text = [
    `# ${guide!.title || guide!.label}`,
    guide!.description ? `\n${guide!.description}\n` : '',
    `\nURL: ${baseUrl}${guide!.href}`,
  ].join('');
  return { content: [{ type: 'text', text }] };
});

server.tool('playbook_get_reasoning_guide', {}, async () => ({
  content: [{ type: 'text', text: REASONING_GUIDE }],
}));

server.tool('playbook_list_guides', {}, async () => {
  const list = playbook.navigation.map(s => ({
    section: s.label,
    guides: s.items.map(i => ({
      title: i.title || i.label,
      description: i.description,
      url: `${baseUrl}${i.href}`,
    })),
  }));
  return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
});

server.tool(
  'playbook_get_cases',
  { company: z.string().optional() },
  async ({ company }) => {
    let list = cases as {
      company: string;
      title: string;
      challenge: string;
      solution: string;
      practices: string[];
      results: string[];
      link: string;
    }[];
    if (company) {
      const c = company.toLowerCase();
      list = list.filter(x => x.company.toLowerCase().includes(c));
    }
    return {
      content: [{ type: 'text', text: JSON.stringify(list, null, 2) }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Frontend Architecture Playbook MCP server running on stdio.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
