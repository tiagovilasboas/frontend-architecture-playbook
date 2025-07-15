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
import Dry from '../content/patterns/dry.tsx';
import Kiss from '../content/patterns/kiss.tsx';
import Yagni from '../content/patterns/yagni.tsx';
import RepositoryPattern from '../content/patterns/repository-pattern.tsx';
import SecurityPatterns from '../content/patterns/security.tsx';
import CleanCode from '../content/patterns/clean-code.tsx';
import SRP from '../content/patterns/srp.tsx';
import SOC from '../content/patterns/soc.tsx';

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: 'guides' | 'architectures' | 'patterns' | 'techniques' | 'best-practices';
  component: React.ComponentType;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toMeta(module: any, slug: string, collection: 'guides' | 'architectures' | 'patterns' | 'techniques' | 'best-practices'): DocMeta {
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
  toMeta(RepositoryPattern, 'repository-pattern', 'patterns'),
  toMeta(SecurityPatterns, 'security', 'patterns'),
];

// Técnicas de desenvolvimento - ferramentas e estratégias
export const techniques: DocMeta[] = [
  toMeta(FeatureFlags, 'feature-flags', 'techniques'),
  toMeta(StateMachines, 'state-machines', 'techniques'),
];

// Boas práticas - princípios fundamentais de código limpo
export const bestPractices: DocMeta[] = [
  toMeta(Dry, 'dry', 'best-practices'),
  toMeta(Kiss, 'kiss', 'best-practices'),
  toMeta(Yagni, 'yagni', 'best-practices'),
  toMeta(CleanCode, 'clean-code', 'best-practices'),
  toMeta(SRP, 'srp', 'best-practices'),
  toMeta(SOC, 'soc', 'best-practices'),
];

export function getDoc(collection: 'guides' | 'architectures' | 'patterns' | 'techniques' | 'best-practices', slug: string): DocMeta | undefined {
  const list = collection === 'guides' ? guides : 
               collection === 'architectures' ? architectures :
               collection === 'patterns' ? patterns : 
               collection === 'techniques' ? techniques : bestPractices;
  return list.find((d) => d.slug === slug);
} 