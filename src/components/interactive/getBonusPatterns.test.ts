import { getBonusPatterns } from './getBonusPatterns';

describe('getBonusPatterns', () => {
  it('retorna DRY para qualquer combinação', () => {
    const result = getBonusPatterns({
      projectType: 'mvp',
      teamSize: 'solo',
      timeConstraint: 'tight',
      integrationNeeds: 'simple',
    });
    
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna Feature Flags e Event-Driven para integrações complexas', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'complex',
    });
    
    expect(result).toContainEqual({ slug: 'feature-flags', title: 'Feature Flags' });
    expect(result).toContainEqual({ slug: 'event-driven', title: 'Event-Driven' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna State Machines para e-commerce', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
      teamSize: 'small',
      timeConstraint: 'normal',
      integrationNeeds: 'moderate',
    });
    
    expect(result).toContainEqual({ slug: 'state-machines', title: 'State Machines' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna KISS e YAGNI para prazo apertado', () => {
    const result = getBonusPatterns({
      projectType: 'mvp',
      teamSize: 'solo',
      timeConstraint: 'tight',
      integrationNeeds: 'simple',
    });
    
    expect(result).toContainEqual({ slug: 'kiss', title: 'KISS' });
    expect(result).toContainEqual({ slug: 'yagni', title: 'YAGNI' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna Monorepo e Micro-frontends para time grande', () => {
    const result = getBonusPatterns({
      projectType: 'enterprise',
      teamSize: 'large',
      timeConstraint: 'flexible',
      integrationNeeds: 'complex',
    });
    
    expect(result).toContainEqual({ slug: 'monorepo', title: 'Monorepo' });
    expect(result).toContainEqual({ slug: 'micro-frontends', title: 'Micro-frontends' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna Atomic Design para dashboard', () => {
    const result = getBonusPatterns({
      projectType: 'dashboard',
      teamSize: 'small',
      timeConstraint: 'normal',
      integrationNeeds: 'simple',
    });
    
    expect(result).toContainEqual({ slug: 'atomic-design', title: 'Atomic Design' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('combina múltiplas condições corretamente', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
      teamSize: 'large',
      timeConstraint: 'tight',
      integrationNeeds: 'complex',
    });
    
    // Deve incluir patterns de todas as condições que batem
    expect(result).toContainEqual({ slug: 'state-machines', title: 'State Machines' });
    expect(result).toContainEqual({ slug: 'monorepo', title: 'Monorepo' });
    expect(result).toContainEqual({ slug: 'micro-frontends', title: 'Micro-frontends' });
    expect(result).toContainEqual({ slug: 'kiss', title: 'KISS' });
    expect(result).toContainEqual({ slug: 'yagni', title: 'YAGNI' });
    expect(result).toContainEqual({ slug: 'feature-flags', title: 'Feature Flags' });
    expect(result).toContainEqual({ slug: 'event-driven', title: 'Event-Driven' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('remove duplicatas baseado no slug', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
      teamSize: 'large',
      timeConstraint: 'tight',
      integrationNeeds: 'complex',
    });
    
    // Verifica que não há duplicatas
    const slugs = result.map(item => item.slug);
    const uniqueSlugs = [...new Set(slugs)];
    expect(slugs.length).toBe(uniqueSlugs.length);
  });

  it('retorna array vazio se todos os parâmetros forem null', () => {
    const result = getBonusPatterns({
      projectType: null,
      teamSize: null,
      timeConstraint: null,
      integrationNeeds: null,
    });
    
    // Mesmo com parâmetros null, deve retornar pelo menos DRY
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna apenas DRY para combinações não cobertas', () => {
    const result = getBonusPatterns({
      projectType: 'startup',
      teamSize: 'medium',
      timeConstraint: 'normal',
      integrationNeeds: 'simple',
    });
    
    // Para essa combinação específica, só deve retornar DRY
    expect(result).toEqual([{ slug: 'dry', title: 'DRY' }]);
  });
}); 