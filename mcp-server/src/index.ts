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
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');

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

function loadPlaybook(): PlaybookData {
  const raw = readFileSync(join(DATA_DIR, 'playbook.json'), 'utf-8');
  return JSON.parse(raw) as PlaybookData;
}

function loadCases(): unknown[] {
  const raw = readFileSync(join(DATA_DIR, 'cases.json'), 'utf-8');
  return JSON.parse(raw) as unknown[];
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
  const text = [
    `# ${guide.title || guide.label}`,
    guide.description ? `\n${guide.description}\n` : '',
    `\nURL: ${baseUrl}${guide.href}`,
  ].join('');
  return { content: [{ type: 'text', text }] };
});

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
