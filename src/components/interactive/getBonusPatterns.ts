export interface BonusAnswers {
  projectType: string | null;
  teamSize?: string | null;
  techLevel?: string | null;
  hasIntegrations?: boolean | null;
}

export interface BonusPattern {
  slug: string;
  title: string;
  description?: string;
}

export function getBonusPatterns({ 
  projectType, 
  teamSize, 
  techLevel, 
  hasIntegrations 
}: BonusAnswers): BonusPattern[] {
  const bonus: BonusPattern[] = [];

  // Padrões baseados no tipo de projeto
  if (projectType === 'ecommerce') {
    bonus.push({ 
      slug: 'state-machines', 
      title: 'State Machines',
      description: 'Para gerenciar estados complexos de pedidos e carrinho'
    });
  }

  if (projectType === 'dashboard') {
    bonus.push({ 
      slug: 'atomic-design', 
      title: 'Atomic Design',
      description: 'Para criar design system de charts e widgets'
    });
  }

  if (projectType === 'enterprise') {
    bonus.push({ 
      slug: 'feature-flags', 
      title: 'Feature Flags',
      description: 'Para controlar releases em ambiente corporativo'
    });
  }

  if (projectType === 'mvp' || projectType === 'startup') {
    bonus.push({ 
      slug: 'security', 
      title: 'Security Patterns',
      description: 'Práticas essenciais de segurança desde o início'
    });
  }

  // Padrões baseados em integrações
  if (hasIntegrations) {
    bonus.push({ 
      slug: 'repository-pattern', 
      title: 'Repository Pattern',
      description: 'Para abstrair e organizar integrações externas'
    });
    
    // Event-driven já deve estar nas recomendações principais para projetos com muitas integrações
    // Então adicionamos algo complementar
    if (projectType !== 'ecommerce') { // Evita duplicar se já está nas principais
      bonus.push({ 
        slug: 'event-driven', 
        title: 'Event-Driven Architecture',
        description: 'Para coordenar integrações via eventos'
      });
    }
  }

  // Padrões baseados no nível técnico
  if (techLevel === 'junior') {
    // Times júniores se beneficiam de princípios fundamentais
    bonus.push({ 
      slug: 'clean-code', 
      title: 'Clean Code',
      description: 'Princípios fundamentais para código limpo'
    });
  }

  if (techLevel === 'senior') {
    // Times sêniores podem absorver padrões mais avançados
    if (!bonus.some(b => b.slug === 'state-machines')) {
      bonus.push({ 
        slug: 'state-machines', 
        title: 'State Machines',
        description: 'Padrão avançado para gestão de estados complexos'
      });
    }
  }

  // Padrões baseados no tamanho do time
  if (teamSize === 'large') {
    if (!bonus.some(b => b.slug === 'feature-flags')) {
      bonus.push({ 
        slug: 'feature-flags', 
        title: 'Feature Flags',
        description: 'Essencial para coordenar releases em times grandes'
      });
    }
  }

  // Sempre incluir DRY como base fundamental (mas só se não tiver muitos outros)
  if (bonus.length < 2) {
    bonus.push({ 
      slug: 'dry', 
      title: 'DRY - Don\'t Repeat Yourself',
      description: 'Princípio fundamental para qualquer código'
    });
  }

  // Limita a 3 bonus patterns para não sobrecarregar
  return bonus.slice(0, 3);
} 