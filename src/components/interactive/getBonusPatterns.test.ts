import { getBonusPatterns } from './getBonusPatterns';

describe('getBonusPatterns', () => {
  it('retorna DRY para qualquer combinação', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
    });
    
    expect(result).toContainEqual({ 
      slug: 'dry', 
      title: 'DRY - Don\'t Repeat Yourself',
      description: 'Princípio fundamental para qualquer código'
    });
  });

  it('retorna State Machines para e-commerce', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
    });
    
    expect(result).toContainEqual({ 
      slug: 'state-machines', 
      title: 'State Machines',
      description: 'Para gerenciar estados complexos de pedidos e carrinho'
    });
  });

  it('retorna Atomic Design para dashboard', () => {
    const result = getBonusPatterns({
      projectType: 'dashboard',
    });
    
    expect(result).toContainEqual({ 
      slug: 'atomic-design', 
      title: 'Atomic Design',
      description: 'Para criar design system de charts e widgets'
    });
  });

  it('retorna Feature Flags para enterprise', () => {
    const result = getBonusPatterns({
      projectType: 'enterprise',
    });
    
    expect(result).toContainEqual({ 
      slug: 'feature-flags', 
      title: 'Feature Flags',
      description: 'Para controlar releases em ambiente corporativo'
    });
  });

  it('retorna Repository Pattern para projetos com integrações', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
      hasIntegrations: true,
    });
    
    expect(result).toContainEqual({ 
      slug: 'repository-pattern', 
      title: 'Repository Pattern',
      description: 'Para abstrair e organizar integrações externas'
    });
  });

  it('retorna Clean Code para times júniores', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
      techLevel: 'junior',
    });
    
    expect(result).toContainEqual({ 
      slug: 'clean-code', 
      title: 'Clean Code',
      description: 'Princípios fundamentais para código limpo'
    });
  });

  it('retorna State Machines para times sêniores', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
      techLevel: 'senior',
    });
    
    expect(result).toContainEqual({ 
      slug: 'state-machines', 
      title: 'State Machines',
      description: 'Padrão avançado para gestão de estados complexos'
    });
  });

  it('retorna Feature Flags para times grandes', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
      teamSize: 'large',
    });
    
    expect(result).toContainEqual({ 
      slug: 'feature-flags', 
      title: 'Feature Flags',
      description: 'Essencial para coordenar releases em times grandes'
    });
  });

  it('retorna DRY quando há poucos bonus patterns', () => {
    const result = getBonusPatterns({
      projectType: 'mvp',
    });
    
    expect(result).toContainEqual({ 
      slug: 'dry', 
      title: 'DRY - Don\'t Repeat Yourself',
      description: 'Princípio fundamental para qualquer código'
    });
  });

  it('limita a 3 bonus patterns', () => {
    const result = getBonusPatterns({
      projectType: 'enterprise',
      teamSize: 'large',
      techLevel: 'senior',
      hasIntegrations: true,
    });
    
    expect(result.length).toBeLessThanOrEqual(3);
  });

  it('retorna array vazio nunca acontece (sempre tem fallback)', () => {
    const result = getBonusPatterns({
      projectType: null,
    });
    
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContainEqual({ 
      slug: 'dry', 
      title: 'DRY - Don\'t Repeat Yourself',
      description: 'Princípio fundamental para qualquer código'
    });
  });

  it('evita duplicatas de State Machines', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce', // já adiciona state-machines
      techLevel: 'senior', // tentaria adicionar novamente
    });
    
    const stateMachines = result.filter(r => r.slug === 'state-machines');
    expect(stateMachines.length).toBe(1);
  });

  it('evita duplicatas de Feature Flags', () => {
    const result = getBonusPatterns({
      projectType: 'enterprise', // já adiciona feature-flags
      teamSize: 'large', // tentaria adicionar novamente
    });
    
    const featureFlags = result.filter(r => r.slug === 'feature-flags');
    expect(featureFlags.length).toBe(1);
  });

  it('não adiciona Event-Driven para e-commerce (evita duplicação)', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
      hasIntegrations: true,
    });
    
    // Event-driven não deve aparecer para e-commerce pois já está nas recomendações principais
    expect(result.find(r => r.slug === 'event-driven')).toBeUndefined();
  });
}); 