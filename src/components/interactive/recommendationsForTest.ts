// Helper function for testing the new recommendation logic
interface TestAnswers {
  projectType: string;
  teamSize: string;
  techLevel: string;
  priority: string;
  hasIntegrations: boolean;
}

export function recommendationsForTest(answers: TestAnswers): string[] {
  const { projectType, teamSize, techLevel, priority, hasIntegrations } = answers;
  
  const scores: Record<string, { score: number; reason: string }> = {};

  // Replicate the same logic from DecisionWizard for testing
  
  // Base scoring por tipo de projeto
  if (projectType === 'mvp') {
    scores['spa'] = { score: 8, reason: 'Rápido para prototipar' };
    scores['jamstack'] = { score: 7, reason: 'Deploy simples e performance' };
    if (priority === 'performance') {
      scores['islands-architecture'] = { score: 9, reason: 'Performance máxima para MVP' };
    }
  }

  if (projectType === 'saas') {
    scores['clean-architecture'] = { score: 9, reason: 'Manutenibilidade e testes' };
    scores['component-driven'] = { score: 8, reason: 'Reutilização de UI' };
    if (priority === 'scalability') {
      scores['monorepo'] = { score: 7, reason: 'Facilita escalabilidade de código' };
    }
  }

  if (projectType === 'ecommerce') {
    scores['event-driven'] = { score: 9, reason: 'Gerenciar fluxos complexos (carrinho, pagamento)' };
    scores['clean-architecture'] = { score: 8, reason: 'Lógica de negócio complexa' };
    if (hasIntegrations) {
      scores['state-machines'] = { score: 7, reason: 'Estados complexos (pedidos, inventory)' };
    }
  }

  if (projectType === 'dashboard') {
    scores['component-driven'] = { score: 9, reason: 'Reutilização de charts e widgets' };
    scores['spa'] = { score: 8, reason: 'Interatividade em tempo real' };
    if (techLevel === 'senior') {
      scores['atomic-design'] = { score: 7, reason: 'Design system estruturado' };
    }
  }

  if (projectType === 'enterprise') {
    scores['clean-architecture'] = { score: 9, reason: 'Complexidade empresarial' };
    if (teamSize === 'large' && techLevel === 'senior') {
      scores['micro-frontends'] = { score: 10, reason: 'Times grandes independentes' };
    }
    if (teamSize === 'large') {
      scores['monorepo'] = { score: 8, reason: 'Compartilhamento entre times' };
    }
  }

  if (projectType === 'startup') {
    scores['clean-architecture'] = { score: 9, reason: 'Base sólida para crescimento' };
    scores['component-driven'] = { score: 8, reason: 'Velocidade de desenvolvimento' };
    if (teamSize === 'large' && techLevel === 'senior' && priority === 'scalability') {
      scores['micro-frontends'] = { score: 7, reason: 'Escalabilidade extrema de times' };
    }
  }

  // Ajustes por tamanho do time
  if (teamSize === 'small') {
    scores['spa'] = { score: (scores['spa']?.score || 0) + 2, reason: scores['spa']?.reason || 'Simplicidade para time pequeno' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 0) + 2, reason: scores['jamstack']?.reason || 'Fácil para time pequeno' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 4;
    }
    if (scores['monorepo']) {
      scores['monorepo'].score -= 2;
    }
  }

  if (teamSize === 'large') {
    scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita colaboração em time grande' };
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Organização para time grande' };
  }

  // Ajustes por nível técnico
  if (techLevel === 'junior') {
    scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Mais simples para time júnior' };
    scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 2, reason: scores['component-driven']?.reason || 'Conceitos claros para júniors' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 5;
    }
    if (scores['event-driven']) {
      scores['event-driven'].score -= 2;
    }
  }

  if (techLevel === 'senior') {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Time pode implementar bem' };
    scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Time experiente com eventos' };
  }

  // Ajustes por prioridade
  if (priority === 'speed') {
    scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Desenvolvimento rápido' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 2, reason: scores['jamstack']?.reason || 'Deploy rápido' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 3;
    }
  }

  if (priority === 'performance') {
    scores['islands-architecture'] = { score: (scores['islands-architecture']?.score || 5) + 4, reason: scores['islands-architecture']?.reason || 'Performance máxima' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 3, reason: scores['jamstack']?.reason || 'Performance de CDN' };
    
    if (scores['spa']) {
      scores['spa'].score -= 1;
    }
  }

  if (priority === 'maintainability') {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 4, reason: scores['clean-architecture']?.reason || 'Máxima manutenibilidade' };
    scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 3, reason: scores['component-driven']?.reason || 'Componentes fáceis de manter' };
  }

  if (priority === 'scalability') {
    if (teamSize === 'large') {
      scores['micro-frontends'] = { score: (scores['micro-frontends']?.score || 5) + 4, reason: scores['micro-frontends']?.reason || 'Máxima escalabilidade de times' };
    }
    scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita escalabilidade de código' };
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Base sólida para crescer' };
  }

  // Ajustes por integrações
  if (hasIntegrations) {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Isola integrações na camada externa' };
    scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Facilita integrações via eventos' };
  }

  // Fallback
  if (Object.keys(scores).length === 0) {
    scores['spa'] = { score: 7, reason: 'Opção segura e versátil' };
    scores['component-driven'] = { score: 6, reason: 'Boa organização de código' };
  }

  // Garante pelo menos 3 opções
  if (Object.keys(scores).length < 3) {
    if (!scores['clean-architecture']) {
      scores['clean-architecture'] = { score: 6, reason: 'Base sólida para qualquer projeto' };
    }
    if (!scores['component-driven']) {
      scores['component-driven'] = { score: 5, reason: 'Reutilização e organização' };
    }
    if (!scores['spa']) {
      scores['spa'] = { score: 5, reason: 'Flexibilidade e simplicidade' };
    }
  }

  return Object.entries(scores)
    .map(([pattern, data]) => ({ pattern, score: data.score }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.pattern);
} 