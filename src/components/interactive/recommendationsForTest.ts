export function recommendationsForTest({
  projectType,
  teamSize,
  timeConstraint,
  integrationNeeds,
  scalePlans,
}: {
  projectType: string | null;
  teamSize: string | null;
  timeConstraint: string | null;
  integrationNeeds: string | null;
  scalePlans: string | null;
}): string[] {
  if (!projectType || !teamSize || !timeConstraint || !integrationNeeds || !scalePlans) return [];
  const scores: Record<string, number> = {};
  // MVP com prazo apertado
  if (projectType === 'mvp' && timeConstraint === 'tight') {
    scores['spa'] = 10;
    scores['jamstack'] = 8;
    scores['islands-architecture'] = 7;
  }
  // SaaS com crescimento planejado
  if (projectType === 'saas' && scalePlans === 'growth') {
    scores['clean-architecture'] = 10;
    scores['component-driven'] = 9;
    scores['feature-flags'] = 8;
    scores['monorepo'] = 7;
  }
  // E-commerce com integrações complexas
  if (projectType === 'ecommerce' && integrationNeeds === 'complex') {
    scores['event-driven'] = 10;
    scores['clean-architecture'] = 9;
    scores['state-machines'] = 8;
  }
  // Dashboard com time pequeno
  if (projectType === 'dashboard' && teamSize === 'small') {
    scores['component-driven'] = 10;
    scores['atomic-design'] = 9;
    scores['spa'] = 8;
  }
  // Enterprise com time grande
  if (projectType === 'enterprise' && teamSize === 'large') {
    scores['micro-frontends'] = 10;
    scores['monorepo'] = 9;
    scores['clean-architecture'] = 8;
    scores['feature-flags'] = 8;
  }
  // Startup com escala massiva
  if (projectType === 'startup' && scalePlans === 'massive') {
    scores['micro-frontends'] = 10;
    scores['clean-architecture'] = 9;
    scores['event-driven'] = 8;
    scores['monorepo'] = 7;
  }
  // Solo dev com prazo flexível
  if (teamSize === 'solo' && timeConstraint === 'flexible') {
    scores['clean-architecture'] = 10;
    scores['component-driven'] = 9;
    scores['atomic-design'] = 8;
  }
  // Time médio com integrações moderadas
  if (teamSize === 'medium' && integrationNeeds === 'moderate') {
    scores['spa'] = 9;
    scores['component-driven'] = 8;
    scores['feature-flags'] = 7;
  }
  // Fallback para casos não cobertos
  if (Object.keys(scores).length === 0) {
    scores['spa'] = 8;
    scores['component-driven'] = 7;
  }
  // Garante pelo menos uma sugestão
  const sorted = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .map(([pattern]) => pattern);
  if (sorted.length === 0) return ['spa'];
  return sorted.slice(0, 3);
} 