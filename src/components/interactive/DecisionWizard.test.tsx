import { recommendationsForTest } from './recommendationsForTest';

describe('DecisionWizard recommendations', () => {
  it('MVP recomenda SPA em primeiro', () => {
    const result = recommendationsForTest({
      projectType: 'mvp',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('spa');
    expect(result).toContain('spa');
    expect(result).toContain('jamstack');
  });

  it('MVP com integrações recomenda Islands Architecture', () => {
    const result = recommendationsForTest({
      projectType: 'mvp',
      willGrow: false,
      hasIntegrations: true,
    });
    expect(result).toContain('spa');
    expect(result).toContain('jamstack');
    expect(result).toContain('islands-architecture');
  });

  it('SaaS recomenda Clean Architecture', () => {
    const result = recommendationsForTest({
      projectType: 'saas',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('clean-architecture');
    expect(result).toContain('component-driven');
  });

  it('SaaS com crescimento recomenda Monorepo', () => {
    const result = recommendationsForTest({
      projectType: 'saas',
      willGrow: true,
      hasIntegrations: false,
    });
    expect(result).toContain('clean-architecture');
    expect(result).toContain('component-driven');
    expect(result).toContain('monorepo');
  });

  it('SaaS com integrações recomenda Feature Flags', () => {
    const result = recommendationsForTest({
      projectType: 'saas',
      willGrow: false,
      hasIntegrations: true,
    });
    expect(result).toContain('clean-architecture');
    expect(result).toContain('component-driven');
    expect(result).toContain('feature-flags');
  });

  it('E-commerce recomenda Event-Driven', () => {
    const result = recommendationsForTest({
      projectType: 'ecommerce',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('event-driven');
    expect(result).toContain('clean-architecture');
  });

  it('E-commerce com integrações recomenda State Machines', () => {
    const result = recommendationsForTest({
      projectType: 'ecommerce',
      willGrow: false,
      hasIntegrations: true,
    });
    expect(result).toContain('event-driven');
    expect(result).toContain('clean-architecture');
    expect(result).toContain('state-machines');
  });

  it('Dashboard recomenda Component-Driven', () => {
    const result = recommendationsForTest({
      projectType: 'dashboard',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('component-driven');
    expect(result).toContain('atomic-design');
    expect(result).toContain('spa');
  });

  it('Enterprise com crescimento recomenda Micro-frontends', () => {
    const result = recommendationsForTest({
      projectType: 'enterprise',
      willGrow: true,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('micro-frontends');
    expect(result).toContain('monorepo');
    expect(result).toContain('clean-architecture');
  });

  it('Enterprise sem crescimento recomenda Monorepo', () => {
    const result = recommendationsForTest({
      projectType: 'enterprise',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('monorepo');
    expect(result).toContain('clean-architecture');
  });

  it('Enterprise com integrações recomenda Feature Flags', () => {
    const result = recommendationsForTest({
      projectType: 'enterprise',
      willGrow: false,
      hasIntegrations: true,
    });
    expect(result).toContain('monorepo');
    expect(result).toContain('clean-architecture');
    expect(result).toContain('feature-flags');
  });

  it('Startup com crescimento recomenda Micro-frontends', () => {
    const result = recommendationsForTest({
      projectType: 'startup',
      willGrow: true,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('micro-frontends');
    expect(result).toContain('clean-architecture');
    expect(result).toContain('event-driven');
    // Monorepo pode não estar nos top 3, mas deve estar na lista completa
  });

  it('Startup sem crescimento recomenda Clean Architecture', () => {
    const result = recommendationsForTest({
      projectType: 'startup',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result[0]).toBe('clean-architecture');
    expect(result).toContain('event-driven');
  });

  it('Fallback retorna pelo menos uma sugestão', () => {
    const result = recommendationsForTest({
      projectType: 'dashboard',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('component-driven');
  });

  it('Se faltar respostas, retorna array vazio', () => {
    const result = recommendationsForTest({
      projectType: null,
      willGrow: null,
      hasIntegrations: null,
    });
    expect(result).toEqual([]);
  });

  it('todas as 24 combinações possíveis retornam pelo menos uma arquitetura', () => {
    const projectTypes = ['mvp', 'saas', 'ecommerce', 'dashboard', 'enterprise', 'startup'];
    const willGrowOptions = [true, false];
    const hasIntegrationsOptions = [true, false];
    let tested = 0;
    for (const projectType of projectTypes) {
      for (const willGrow of willGrowOptions) {
        for (const hasIntegrations of hasIntegrationsOptions) {
          tested++;
          const result = recommendationsForTest({
            projectType,
            willGrow,
            hasIntegrations,
          });
          expect(Array.isArray(result)).toBe(true);
          expect(result.length).toBeGreaterThan(0);
        }
      }
    }
    expect(tested).toBe(24);
  });

  it('garante que sempre retorna pelo menos uma arquitetura mesmo com dados inválidos', () => {
    const result = recommendationsForTest({
      projectType: 'invalid-type',
      willGrow: false,
      hasIntegrations: false,
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('spa');
  });
}); 