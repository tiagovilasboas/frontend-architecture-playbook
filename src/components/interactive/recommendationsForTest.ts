export function recommendationsForTest({
  projectType,
  willGrow,
  hasIntegrations,
}: {
  projectType: string | null;
  willGrow: boolean | null;
  hasIntegrations: boolean | null;
}): string[] {
  if (!projectType || willGrow === null || hasIntegrations === null) return [];
  const scores: Record<string, number> = {};
  
  // MVP
  if (projectType === 'mvp') {
    scores['spa'] = 10;
    scores['jamstack'] = 8;
    if (hasIntegrations) scores['islands-architecture'] = 7;
  }
  
  // SaaS
  if (projectType === 'saas') {
    scores['clean-architecture'] = 10;
    scores['component-driven'] = 9;
    if (willGrow) scores['monorepo'] = 8;
    if (hasIntegrations) scores['feature-flags'] = 7;
  }
  
  // E-commerce
  if (projectType === 'ecommerce') {
    scores['event-driven'] = 10;
    scores['clean-architecture'] = 9;
    if (hasIntegrations) scores['state-machines'] = 8;
  }
  
  // Dashboard
  if (projectType === 'dashboard') {
    scores['component-driven'] = 10;
    scores['atomic-design'] = 9;
    scores['spa'] = 8;
  }
  
  // Enterprise
  if (projectType === 'enterprise') {
    if (willGrow) scores['micro-frontends'] = 10;
    scores['monorepo'] = 9;
    scores['clean-architecture'] = 8;
    if (hasIntegrations) scores['feature-flags'] = 8;
  }
  
  // Startup
  if (projectType === 'startup') {
    if (willGrow) scores['micro-frontends'] = 10;
    scores['clean-architecture'] = 9;
    scores['event-driven'] = 8;
    if (willGrow) scores['monorepo'] = 7;
  }
  
  // Fallback
  if (Object.keys(scores).length === 0) {
    scores['spa'] = 8;
    scores['component-driven'] = 7;
  }
  
  const sorted = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .map(([pattern]) => pattern);
  
  if (sorted.length === 0) return ['spa'];
  return sorted.slice(0, 3);
} 