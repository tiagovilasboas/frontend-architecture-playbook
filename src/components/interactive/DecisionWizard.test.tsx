import { recommendationsForTest } from './recommendationsForTest';

describe('DecisionWizard recommendations', () => {
  it('MVP com prazo apertado recomenda SPA em primeiro', () => {
    const result = recommendationsForTest({
      projectType: 'mvp',
      teamSize: 'small',
      timeConstraint: 'tight',
      integrationNeeds: 'simple',
      scalePlans: 'niche',
    });
    expect(result[0]).toBe('spa');
    expect(result).toContain('spa');
  });

  it('SaaS com crescimento recomenda Clean Architecture', () => {
    const result = recommendationsForTest({
      projectType: 'saas',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'moderate',
      scalePlans: 'growth',
    });
    expect(result).toContain('clean-architecture');
    expect(result[0]).toBe('clean-architecture');
  });

  it('E-commerce com integrações complexas recomenda Event-Driven', () => {
    const result = recommendationsForTest({
      projectType: 'ecommerce',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'complex',
      scalePlans: 'growth',
    });
    expect(result).toContain('event-driven');
    expect(result[0]).toBe('event-driven');
  });

  it('Enterprise com time grande recomenda Micro-frontends', () => {
    const result = recommendationsForTest({
      projectType: 'enterprise',
      teamSize: 'large',
      timeConstraint: 'normal',
      integrationNeeds: 'moderate',
      scalePlans: 'growth',
    });
    expect(result).toContain('micro-frontends');
    expect(result[0]).toBe('micro-frontends');
  });

  it('Startup com escala massiva recomenda Micro-frontends', () => {
    const result = recommendationsForTest({
      projectType: 'startup',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'moderate',
      scalePlans: 'massive',
    });
    expect(result).toContain('micro-frontends');
    expect(result[0]).toBe('micro-frontends');
  });

  it('Solo dev com prazo flexível recomenda Clean Architecture', () => {
    const result = recommendationsForTest({
      projectType: 'dashboard',
      teamSize: 'solo',
      timeConstraint: 'flexible',
      integrationNeeds: 'simple',
      scalePlans: 'niche',
    });
    expect(result).toContain('clean-architecture');
    expect(result[0]).toBe('clean-architecture');
  });

  it('Time médio com integrações moderadas recomenda SPA', () => {
    const result = recommendationsForTest({
      projectType: 'dashboard',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'moderate',
      scalePlans: 'growth',
    });
    expect(result).toContain('spa');
    expect(result[0]).toBe('spa');
  });

  it('Fallback retorna pelo menos uma sugestão', () => {
    const result = recommendationsForTest({
      projectType: 'dashboard',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'simple',
      scalePlans: 'niche',
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('spa');
  });

  it('Se faltar respostas, retorna array vazio', () => {
    const result = recommendationsForTest({
      projectType: null,
      teamSize: null,
      timeConstraint: null,
      integrationNeeds: null,
      scalePlans: null,
    });
    expect(result).toEqual([]);
  });

  it('todas as combinações possíveis retornam pelo menos uma arquitetura', () => {
    const projectTypes = ['mvp', 'saas', 'ecommerce', 'dashboard', 'enterprise', 'startup'];
    const teamSizes = ['solo', 'small', 'medium', 'large'];
    const timeConstraints = ['tight', 'normal', 'flexible'];
    const integrationNeeds = ['simple', 'moderate', 'complex'];
    const scalePlans = ['niche', 'growth', 'massive'];

    for (const projectType of projectTypes) {
      for (const teamSize of teamSizes) {
        for (const timeConstraint of timeConstraints) {
          for (const integrationNeedsValue of integrationNeeds) {
            for (const scalePlansValue of scalePlans) {
              const result = recommendationsForTest({
                projectType,
                teamSize,
                timeConstraint,
                integrationNeeds: integrationNeedsValue,
                scalePlans: scalePlansValue,
              });
              expect(result.length).toBeGreaterThan(0);
            }
          }
        }
      }
    }
  });
}); 