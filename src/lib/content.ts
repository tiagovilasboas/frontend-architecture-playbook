import HowToChoose from "../content/guides/how-to-choose.tsx";
import DependencyRule from "../content/guides/dependency-rule.tsx";
import Cases from "../content/guides/cases.tsx";
import AtomicDesign from "../content/patterns/atomic-design.tsx";
import CleanArchitecture from "../content/patterns/clean-architecture.tsx";
import ComponentDriven from "../content/patterns/component-driven.tsx";
import IslandsArchitecture from "../content/patterns/islands-architecture.tsx";
import Jamstack from "../content/patterns/jamstack.tsx";
import MicroFrontends from "../content/patterns/micro-frontends.tsx";
import Monorepo from "../content/patterns/monorepo.tsx";
import Spa from "../content/patterns/spa.tsx";
import StateMachines from "../content/patterns/state-machines.tsx";
import EventDriven from "../content/patterns/event-driven.tsx";
import FeatureFlags from "../content/patterns/feature-flags.tsx";
import Dry from "../content/patterns/dry.tsx";
import Kiss from "../content/patterns/kiss.tsx";
import Yagni from "../content/patterns/yagni.tsx";
import RepositoryPattern from "../content/patterns/repository-pattern.tsx";
import SecurityPatterns from "../content/patterns/security.tsx";
import CleanCode from "../content/patterns/clean-code.tsx";
import SRP from "../content/patterns/srp.tsx";
import SOC from "../content/patterns/soc.tsx";
import SSRSSGArchitecture from "../content/patterns/ssr-ssg.tsx";
import BFFArchitecture from "../content/patterns/bff.tsx";
import PWAArchitecture from "../content/patterns/pwa.tsx";
import HeadlessArchitecture from "../content/patterns/headless.tsx";
import HexagonalArchitecture from "../content/patterns/hexagonal.tsx";
import LayeredArchitecture from "../content/patterns/layered.tsx";
import EventSourcingArchitecture from "../content/patterns/event-sourcing.tsx";
import CQRSArchitecture from "../content/patterns/cqrs.tsx";
import MicroservicesFrontendArchitecture from "../content/patterns/microservices-frontend.tsx";

export type CollectionType =
  | "guides"
  | "architectures"
  | "patterns"
  | "techniques"
  | "best-practices";

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: CollectionType;
  component: React.ComponentType;
}

function toMeta(
  module: unknown,
  slug: string,
  collection: CollectionType,
): DocMeta {
  const moduleWithMetadata = module as {
    metadata?: { title?: string; description?: string };
    default?: { metadata?: { title?: string; description?: string } };
  };
  const meta = moduleWithMetadata.metadata ?? moduleWithMetadata.default?.metadata ?? {};
  return {
    slug,
    collection,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    component: (moduleWithMetadata.default ?? moduleWithMetadata) as React.ComponentType,
  };
}

// Organização por categorias com comentários explicativos
export const guides: DocMeta[] = [
  toMeta(Cases, "cases", "guides"),
  toMeta(HowToChoose, "how-to-choose", "guides"),
  toMeta(DependencyRule, "dependency-rule", "guides"),
];

// Arquiteturas reais - estrutura fundamental do sistema
export const architectures: DocMeta[] = [
  toMeta(SSRSSGArchitecture, "ssr-ssg", "architectures"),
  toMeta(BFFArchitecture, "bff", "architectures"),
  toMeta(PWAArchitecture, "pwa", "architectures"),
  toMeta(HeadlessArchitecture, "headless", "architectures"),
  toMeta(HexagonalArchitecture, "hexagonal", "architectures"),
  toMeta(LayeredArchitecture, "layered", "architectures"),
  toMeta(EventSourcingArchitecture, "event-sourcing", "architectures"),
  toMeta(CQRSArchitecture, "cqrs", "architectures"),
  toMeta(
    MicroservicesFrontendArchitecture,
    "microservices-frontend",
    "architectures",
  ),
  toMeta(CleanArchitecture, "clean-architecture", "architectures"),
  toMeta(MicroFrontends, "micro-frontends", "architectures"),
  toMeta(Monorepo, "monorepo", "architectures"),
  toMeta(Spa, "spa", "architectures"),
  toMeta(Jamstack, "jamstack", "architectures"),
  toMeta(IslandsArchitecture, "islands-architecture", "architectures"),
];

// Padrões de design - organização de componentes
export const patterns: DocMeta[] = [
  toMeta(ComponentDriven, "component-driven", "patterns"),
  toMeta(AtomicDesign, "atomic-design", "patterns"),
  toMeta(EventDriven, "event-driven", "patterns"),
  toMeta(RepositoryPattern, "repository-pattern", "patterns"),
  toMeta(SecurityPatterns, "security", "patterns"),
];

// Técnicas de desenvolvimento - ferramentas e estratégias
export const techniques: DocMeta[] = [
  toMeta(FeatureFlags, "feature-flags", "techniques"),
  toMeta(StateMachines, "state-machines", "techniques"),
];

// Boas práticas - princípios fundamentais de código limpo
export const bestPractices: DocMeta[] = [
  toMeta(Dry, "dry", "best-practices"),
  toMeta(Kiss, "kiss", "best-practices"),
  toMeta(Yagni, "yagni", "best-practices"),
  toMeta(CleanCode, "clean-code", "best-practices"),
  toMeta(SRP, "srp", "best-practices"),
  toMeta(SOC, "soc", "best-practices"),
];

// Mapa de coleções para facilitar lookup
const collectionMap: Record<CollectionType, DocMeta[]> = {
  guides,
  architectures,
  patterns,
  techniques,
  "best-practices": bestPractices,
};

export function getDoc(
  collection: CollectionType,
  slug: string,
): DocMeta | undefined {
  const list = collectionMap[collection];
  return list.find((doc) => doc.slug === slug);
}
