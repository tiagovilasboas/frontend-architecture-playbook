import { getBonusPatterns } from './getBonusPatterns';

describe('getBonusPatterns', () => {
  it('retorna DRY para qualquer combinação', () => {
    const result = getBonusPatterns({
      projectType: 'mvp',
    });
    
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna State Machines para e-commerce', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
    });
    
    expect(result).toContainEqual({ slug: 'state-machines', title: 'State Machines' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna Atomic Design para dashboard', () => {
    const result = getBonusPatterns({
      projectType: 'dashboard',
    });
    
    expect(result).toContainEqual({ slug: 'atomic-design', title: 'Atomic Design' });
    expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
  });

  it('retorna apenas DRY para outros tipos de projeto', () => {
    const result = getBonusPatterns({
      projectType: 'saas',
    });
    
    expect(result).toEqual([{ slug: 'dry', title: 'DRY' }]);
  });

  it('retorna apenas DRY para projectType null', () => {
    const result = getBonusPatterns({
      projectType: null,
    });
    
    expect(result).toEqual([{ slug: 'dry', title: 'DRY' }]);
  });

  it('remove duplicatas baseado no slug', () => {
    const result = getBonusPatterns({
      projectType: 'ecommerce',
    });
    
    // Verifica que não há duplicatas
    const slugs = result.map(item => item.slug);
    const uniqueSlugs = [...new Set(slugs)];
    expect(slugs.length).toBe(uniqueSlugs.length);
  });

  it('testa todos os tipos de projeto', () => {
    const projectTypes = ['mvp', 'saas', 'ecommerce', 'dashboard', 'enterprise', 'startup'];
    
    for (const projectType of projectTypes) {
      const result = getBonusPatterns({ projectType });
      expect(result).toContainEqual({ slug: 'dry', title: 'DRY' });
      
      if (projectType === 'ecommerce') {
        expect(result).toContainEqual({ slug: 'state-machines', title: 'State Machines' });
      } else if (projectType === 'dashboard') {
        expect(result).toContainEqual({ slug: 'atomic-design', title: 'Atomic Design' });
      } else {
        expect(result).toEqual([{ slug: 'dry', title: 'DRY' }]);
      }
    }
  });
}); 