/* eslint-disable @typescript-eslint/no-explicit-any */
import HowToChoose from '../content/guides/how-to-choose.tsx';
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
  collection: 'guides' | 'patterns';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

function toMeta(module: any, slug: string, collection: 'guides' | 'patterns'): DocMeta {
  const meta = module.metadata ?? module.default?.metadata ?? {};
  return {
    slug,
    collection,
    title: meta.title ?? slug,
    description: meta.description ?? '',
    component: module.default ?? module,
  };
}

export const guides: DocMeta[] = [toMeta(HowToChoose, 'how-to-choose', 'guides')];

export const patterns: DocMeta[] = [
  toMeta(AtomicDesign, 'atomic-design', 'patterns'),
  toMeta(CleanArchitecture, 'clean-architecture', 'patterns'),
  toMeta(ComponentDriven, 'component-driven', 'patterns'),
  toMeta(IslandsArchitecture, 'islands-architecture', 'patterns'),
  toMeta(Jamstack, 'jamstack', 'patterns'),
  toMeta(MicroFrontends, 'micro-frontends', 'patterns'),
  toMeta(Monorepo, 'monorepo', 'patterns'),
  toMeta(Spa, 'spa', 'patterns'),
  toMeta(StateMachines, 'state-machines', 'patterns'),
  toMeta(EventDriven, 'event-driven', 'patterns'),
  toMeta(FeatureFlags, 'feature-flags', 'patterns'),
];

export function getDoc(collection: 'guides' | 'patterns', slug: string): DocMeta | undefined {
  const list = collection === 'guides' ? guides : patterns;
  return list.find((d) => d.slug === slug);
} 