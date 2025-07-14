import HowToChoose from '../content/guides/how-to-choose.tsx';
import DependencyRule from '../content/guides/dependency-rule.tsx';
import AtomicDesign from '../content/patterns/atomic-design.tsx';
import CleanArchitecture from '../content/patterns/clean-architecture.tsx';
import ComponentDriven from '../content/patterns/component-driven.tsx';
import IslandsArchitecture from '../content/patterns/islands-architecture.tsx';
import Jamstack from '../content/patterns/jamstack.tsx';
import MicroFrontends from '../content/patterns/micro-frontends.tsx';
import Monorepo from '../content/patterns/monorepo.tsx';
import Spa from '../content/patterns/spa.tsx';
import StateMachines from '../content/patterns/state-machines.tsx';
import EventDriven from '../content/patterns/event-driven.tsx';
import FeatureFlags from '../content/patterns/feature-flags.tsx';

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: 'guides' | 'architectures' | 'patterns' | 'techniques';
  component: React.ComponentType;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toMeta(module: any, slug: string, collection: 'guides' | 'architectures' | 'patterns' | 'techniques'): DocMeta {
  const meta = module.metadata ?? module.default?.metadata ?? {};
  return {
    slug,
    collection,
    title: meta.title ?? slug,
    description: meta.description ?? '',
    component: module.default ?? module,
  };
}

export const guides: DocMeta[] = [
  toMeta(HowToChoose, 'how-to-choose', 'guides'),
  toMeta(DependencyRule, 'dependency-rule', 'guides')
];

// Arquiteturas reais - estrutura fundamental do sistema
export const architectures: DocMeta[] = [
  toMeta(CleanArchitecture, 'clean-architecture', 'architectures'),
  toMeta(MicroFrontends, 'micro-frontends', 'architectures'),
  toMeta(Monorepo, 'monorepo', 'architectures'),
  toMeta(Spa, 'spa', 'architectures'),
  toMeta(Jamstack, 'jamstack', 'architectures'),
  toMeta(IslandsArchitecture, 'islands-architecture', 'architectures'),
];

// Padrões de design - organização de componentes
export const patterns: DocMeta[] = [
  toMeta(ComponentDriven, 'component-driven', 'patterns'),
  toMeta(AtomicDesign, 'atomic-design', 'patterns'),
  toMeta(EventDriven, 'event-driven', 'patterns'),
];

// Técnicas de desenvolvimento - ferramentas e estratégias
export const techniques: DocMeta[] = [
  toMeta(FeatureFlags, 'feature-flags', 'techniques'),
  toMeta(StateMachines, 'state-machines', 'techniques'),
];

export function getDoc(collection: 'guides' | 'architectures' | 'patterns' | 'techniques', slug: string): DocMeta | undefined {
  const list = collection === 'guides' ? guides : 
               collection === 'architectures' ? architectures :
               collection === 'patterns' ? patterns : techniques;
  return list.find((d) => d.slug === slug);
} 