/**
 * Schema for content-driven pages.
 * One source of truth for UI and MCP: same JSON can render the app and be served by the MCP server.
 */

/** Icon key: maps to Tabler icon name in ContentRenderer */
export type ContentIconKey =
  | 'check'
  | 'code'
  | 'lock'
  | 'file-text'
  | 'chart-bar'
  | 'rocket'
  | 'shield'
  | 'bulb'
  | 'alert-triangle'
  | 'info-circle'
  | 'arrow-right'
  | 'device-mobile'
  | 'stack'
  | 'scale'
  | 'target'
  | 'puzzle'
  | 'palette'
  | 'building'
  | 'trending-up'
  | 'route'
  | 'map'
  | 'school'
  | 'users'
  | 'currency-dollar'
  | 'message-circle'
  | 'plug'
  | 'book'
  | 'tool';

/** List item: plain string or { title, description? } */
export type ListItem = string | { title: string; description?: string };

/** Link card in a grid (internal link) */
export interface LinkCard {
  to: string;
  title: string;
  description?: string;
  icon?: ContentIconKey;
}

/** Single card with icon + title + description or list items (no link) */
export interface IconCard {
  icon?: ContentIconKey;
  iconColor?: string;
  title: string;
  description?: string;
  /** If set, render a list instead of description */
  items?: string[];
}

/** Link in a linkList block */
export interface ContentLink {
  to: string;
  label: string;
}

/** Card with icon, title, optional subtitle/body/links/callout (e.g. study-guide level cards) */
export interface RichCard {
  icon?: ContentIconKey;
  iconColor?: string;
  title: string;
  subtitle?: string;
  bodyText?: string;
  links?: ContentLink[];
  nextLevel?: { title: string; content: string };
}

/** Block types rendered by ContentRenderer */
export type ContentBlock =
  | { type: 'hero'; title: string; subtitle?: string; icon?: ContentIconKey }
  | {
      type: 'section';
      title?: string;
      icon?: ContentIconKey;
      children: ContentBlock[];
    }
  | {
      type: 'text';
      content: string;
      size?: 'sm' | 'md' | 'lg';
      dimmed?: boolean;
    }
  | { type: 'title'; content: string; order?: 2 | 3 | 4 }
  | {
      type: 'list';
      items: ListItem[];
      icon?: ContentIconKey;
      spacing?: 'xs' | 'sm' | 'md';
      ordered?: boolean;
    }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'badges'; items: string[] }
  | { type: 'code'; code: string; block?: boolean; language?: string }
  | {
      type: 'codeExample';
      title: string;
      description?: string;
      code: string;
      defaultExpanded?: boolean;
    }
  | {
      type: 'alert';
      message: string;
      color?: 'blue' | 'green' | 'yellow' | 'red' | 'brand';
      icon?: ContentIconKey;
    }
  | {
      type: 'linkCards';
      cards: LinkCard[];
      cols?: { base?: number; sm?: number };
    }
  | {
      type: 'iconCards';
      cards: IconCard[];
      cols?: { base?: number; sm?: number };
    }
  | { type: 'linkList'; links: ContentLink[]; icon?: ContentIconKey }
  | { type: 'callout'; title: string; content: string; dimmed?: boolean }
  | {
      type: 'richCardGrid';
      cards: RichCard[];
      cols?: { base?: number; md?: number };
    }
  | {
      type: 'anchor';
      label: string;
      to?: string;
      href?: string;
      back?: boolean;
    }
  | {
      type: 'stack';
      gap?: 'sm' | 'md' | 'lg' | 'xl';
      children: ContentBlock[];
    }
  | { type: 'casesGrid'; title?: string }
  | { type: 'architectureComparison'; title?: string }
  | { type: 'decisionWizard' }
  | {
      type: 'canvasDiagram';
      diagram: 'dependency-rule-folders' | 'dependency-rule-flow';
      variant?: 'correct' | 'incorrect';
      title?: string;
      description?: string;
    }
  | {
      type: 'timeline';
      /** Which step is active (1-based); optional. */
      active?: number;
      items: Array<{
        title: string;
        description?: string;
        items: string[];
      }>;
      /** Optional alert after the timeline (e.g. "Resultado esperado"). */
      resultAlert?: {
        message: string;
        color?: 'blue' | 'green' | 'yellow' | 'red' | 'brand';
        icon?: ContentIconKey;
      };
    }
  | { type: 'glossary' };

/** Full page content: meta + body blocks */
export interface ContentPage {
  meta: {
    title: string;
    description?: string;
  };
  /** Optional: which guide nav to show (e.g. 'staff') */
  layout?: {
    showGuideNav?: string;
    showRelated?: boolean;
  };
  body: ContentBlock[];
}

/** Type guard */
export function isContentPage(value: unknown): value is ContentPage {
  if (!value || typeof value !== 'object') return false;
  const o = value as Record<string, unknown>;
  return (
    Array.isArray(o.body) &&
    o.meta &&
    typeof (o.meta as Record<string, unknown>).title === 'string'
  );
}
