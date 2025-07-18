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
      scores['ssr-ssg'] = { score: 8, reason: 'SEO + performance inicial críticos' };
    }
    if (priority === 'speed') {
      scores['layered'] = { score: 7, reason: 'Mais simples que Clean para MVP rápido' };
    }
  }

  if (projectType === 'saas') {
    scores['clean-architecture'] = { score: 9, reason: 'Manutenibilidade e testes' };
    scores['component-driven'] = { score: 8, reason: 'Reutilização de UI' };
    if (priority === 'scalability') {
      scores['monorepo'] = { score: 7, reason: 'Facilita escalabilidade de código' };
    }
    if (hasIntegrations) {
      scores['bff'] = { score: 8, reason: 'Simplifica integrações múltiplas' };
      scores['hexagonal'] = { score: 7, reason: 'Isolamento de dependências externas' };
    }
    if (priority === 'performance') {
      scores['ssr-ssg'] = { score: 7, reason: 'SEO e performance para aquisição' };
    }
  }

  if (projectType === 'ecommerce') {
    scores['event-driven'] = { score: 9, reason: 'Gerenciar fluxos complexos (carrinho, pagamento)' };
    scores['clean-architecture'] = { score: 8, reason: 'Lógica de negócio complexa' };
    scores['ssr-ssg'] = { score: 9, reason: 'SEO crítico para descoberta de produtos' };
    scores['pwa'] = { score: 8, reason: 'App-like experience aumenta conversão' };
    if (hasIntegrations) {
      scores['state-machines'] = { score: 7, reason: 'Estados complexos (pedidos, inventory)' };
      scores['bff'] = { score: 7, reason: 'Agregação de APIs (pagamento, estoque, etc)' };
      scores['cqrs'] = { score: 6, reason: 'Separar leitura (catálogo) de escrita (pedidos)' };
    }
    if (priority === 'maintainability') {
      scores['hexagonal'] = { score: 7, reason: 'Isolar integrações de pagamento/estoque' };
    }
  }

  if (projectType === 'dashboard') {
    scores['component-driven'] = { score: 9, reason: 'Reutilização de charts e widgets' };
    scores['spa'] = { score: 8, reason: 'Interatividade em tempo real' };
    if (techLevel === 'senior') {
      scores['atomic-design'] = { score: 7, reason: 'Design system estruturado' };
    }
    if (hasIntegrations) {
      scores['bff'] = { score: 8, reason: 'Agregação de dados de múltiplas APIs' };
      scores['cqrs'] = { score: 7, reason: 'Otimizar queries de leitura para dashboards' };
    }
    if (priority === 'performance') {
      scores['islands-architecture'] = { score: 7, reason: 'Hidratação seletiva de widgets' };
    }
    if (priority === 'maintainability') {
      scores['layered'] = { score: 6, reason: 'Separação clara: UI → Logic → Data' };
    }
  }

  if (projectType === 'enterprise') {
    scores['clean-architecture'] = { score: 9, reason: 'Complexidade empresarial' };
    scores['hexagonal'] = { score: 8, reason: 'Isolamento de sistemas legados' };
    if (teamSize === 'large' && techLevel === 'senior') {
      scores['micro-frontends'] = { score: 10, reason: 'Times grandes independentes' };
      scores['microservices-frontend'] = { score: 8, reason: 'Alinhamento com arquitetura backend' };
    }
    if (teamSize === 'large') {
      scores['monorepo'] = { score: 8, reason: 'Compartilhamento entre times' };
    }
    if (hasIntegrations) {
      scores['bff'] = { score: 8, reason: 'Abstração de sistemas legados complexos' };
      scores['headless'] = { score: 7, reason: 'Flexibilidade para múltiplos canais' };
      scores['event-sourcing'] = { score: 6, reason: 'Auditoria e compliance empresarial' };
    }
    if (priority === 'maintainability') {
      scores['layered'] = { score: 7, reason: 'Alternativa mais simples ao Clean' };
    }
  }

  if (projectType === 'startup') {
    scores['clean-architecture'] = { score: 9, reason: 'Base sólida para crescimento' };
    scores['component-driven'] = { score: 8, reason: 'Velocidade de desenvolvimento' };
    // Para startups que precisam de SEO/performance
    if (priority === 'performance') {
      scores['ssr-ssg'] = { score: 8, reason: 'SEO crítico para aquisição' };
      scores['islands-architecture'] = { score: 7, reason: 'Performance competitiva' };
    }
    // PWA para startups mobile-first
    if (priority === 'performance' || priority === 'scalability') {
      scores['pwa'] = { score: 7, reason: 'Reduz fricção de instalação vs app nativo' };
    }
    // Micro-frontends só para startups grandes com times sêniores
    if (teamSize === 'large' && techLevel === 'senior' && priority === 'scalability') {
      scores['micro-frontends'] = { score: 7, reason: 'Escalabilidade extrema de times' };
      scores['microservices-frontend'] = { score: 6, reason: 'Alinhamento com microservices backend' };
    }
    // Para times pequenos, opções mais simples
    if (teamSize === 'small' && techLevel !== 'senior') {
      scores['layered'] = { score: 7, reason: 'Mais simples que Clean para time pequeno' };
    }
  }

  // Ajustes por tamanho do time
  if (teamSize === 'small') {
    scores['spa'] = { score: (scores['spa']?.score || 0) + 2, reason: scores['spa']?.reason || 'Simplicidade para time pequeno' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 0) + 2, reason: scores['jamstack']?.reason || 'Fácil para time pequeno' };
    scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Estrutura simples para time pequeno' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 4;
    }
    if (scores['microservices-frontend']) {
      scores['microservices-frontend'].score -= 5;
    }
    if (scores['monorepo']) {
      scores['monorepo'].score -= 2;
    }
    if (scores['event-sourcing']) {
      scores['event-sourcing'].score -= 3;
    }
    if (scores['cqrs']) {
      scores['cqrs'].score -= 3;
    }
  }

  if (teamSize === 'large') {
    scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita colaboração em time grande' };
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Organização para time grande' };
    scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Facilita desenvolvimento paralelo' };
    scores['microservices-frontend'] = { score: (scores['microservices-frontend']?.score || 4) + 3, reason: scores['microservices-frontend']?.reason || 'Times independentes com deploys autônomos' };
  }

  // Ajustes por nível técnico
  if (techLevel === 'junior') {
    scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Mais simples para time júnior' };
    scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 2, reason: scores['component-driven']?.reason || 'Conceitos claros para júniors' };
    scores['layered'] = { score: (scores['layered']?.score || 5) + 3, reason: scores['layered']?.reason || 'Estrutura fácil de entender' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 2, reason: scores['jamstack']?.reason || 'Deploy simples para iniciantes' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 5;
    }
    if (scores['microservices-frontend']) {
      scores['microservices-frontend'].score -= 6;
    }
    if (scores['event-driven']) {
      scores['event-driven'].score -= 2;
    }
    if (scores['hexagonal']) {
      scores['hexagonal'].score -= 3;
    }
    if (scores['event-sourcing']) {
      scores['event-sourcing'].score -= 4;
    }
    if (scores['cqrs']) {
      scores['cqrs'].score -= 4;
    }
  }

  if (techLevel === 'senior') {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Time pode implementar bem' };
    scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Time experiente com eventos' };
    scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Time domina abstrações complexas' };
    scores['event-sourcing'] = { score: (scores['event-sourcing']?.score || 4) + 2, reason: scores['event-sourcing']?.reason || 'Time experiente com padrões avançados' };
    scores['cqrs'] = { score: (scores['cqrs']?.score || 4) + 2, reason: scores['cqrs']?.reason || 'Time pode implementar separação read/write' };
    scores['microservices-frontend'] = { score: (scores['microservices-frontend']?.score || 4) + 2, reason: scores['microservices-frontend']?.reason || 'Time experiente com arquiteturas distribuídas' };
  }

  // Ajustes por prioridade
  if (priority === 'speed') {
    scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Desenvolvimento rápido' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 2, reason: scores['jamstack']?.reason || 'Deploy rápido' };
    scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Estrutura simples, desenvolvimento rápido' };
    
    if (scores['micro-frontends']) {
      scores['micro-frontends'].score -= 3;
    }
    if (scores['microservices-frontend']) {
      scores['microservices-frontend'].score -= 4;
    }
    if (scores['hexagonal']) {
      scores['hexagonal'].score -= 2;
    }
    if (scores['event-sourcing']) {
      scores['event-sourcing'].score -= 3;
    }
  }

  if (priority === 'performance') {
    scores['islands-architecture'] = { score: (scores['islands-architecture']?.score || 5) + 4, reason: scores['islands-architecture']?.reason || 'Performance máxima' };
    scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 3, reason: scores['jamstack']?.reason || 'Performance de CDN' };
    scores['ssr-ssg'] = { score: (scores['ssr-ssg']?.score || 5) + 4, reason: scores['ssr-ssg']?.reason || 'First paint otimizado' };
    scores['pwa'] = { score: (scores['pwa']?.score || 5) + 3, reason: scores['pwa']?.reason || 'Cache offline e performance nativa' };
    
    if (scores['spa']) {
      scores['spa'].score -= 1;
    }
    if (scores['cqrs']) {
      scores['cqrs'].score += 2;
    }
  }

  if (priority === 'maintainability') {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 4, reason: scores['clean-architecture']?.reason || 'Máxima manutenibilidade' };
    scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 3, reason: scores['component-driven']?.reason || 'Componentes fáceis de manter' };
    scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 3, reason: scores['hexagonal']?.reason || 'Isolamento facilita manutenção' };
    scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Separação clara de responsabilidades' };
    
    if (scores['event-sourcing']) {
      scores['event-sourcing'].score += 2;
    }
  }

  if (priority === 'scalability') {
    if (teamSize === 'large') {
      scores['micro-frontends'] = { score: (scores['micro-frontends']?.score || 5) + 4, reason: scores['micro-frontends']?.reason || 'Máxima escalabilidade de times' };
      scores['microservices-frontend'] = { score: (scores['microservices-frontend']?.score || 4) + 4, reason: scores['microservices-frontend']?.reason || 'Escalabilidade extrema com deploys independentes' };
    }
    scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita escalabilidade de código' };
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Base sólida para crescer' };
    scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Facilita adição de novas integrações' };
    scores['pwa'] = { score: (scores['pwa']?.score || 5) + 2, reason: scores['pwa']?.reason || 'Escalabilidade de plataforma (web → mobile)' };
    
    if (scores['headless']) {
      scores['headless'].score += 3;
    }
  }

  // Ajustes por integrações
  if (hasIntegrations) {
    scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Isola integrações na camada externa' };
    scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Facilita integrações via eventos' };
    scores['bff'] = { score: (scores['bff']?.score || 5) + 3, reason: scores['bff']?.reason || 'Agregação e orquestração de APIs' };
    scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Ports & Adapters isolam integrações' };
    scores['headless'] = { score: (scores['headless']?.score || 5) + 2, reason: scores['headless']?.reason || 'Desacoplamento de backends' };
  }

  // Fallback
  if (Object.keys(scores).length === 0) {
    scores['spa'] = { score: 7, reason: 'Opção segura e versátil' };
    scores['component-driven'] = { score: 6, reason: 'Boa organização de código' };
    scores['layered'] = { score: 6, reason: 'Estrutura simples e clara' };
  }

  // Garante pelo menos 3 opções
  if (Object.keys(scores).length < 3) {
    if (!scores['clean-architecture'] && !scores['layered'] && !scores['hexagonal']) {
      scores['clean-architecture'] = { score: 6, reason: 'Base sólida para qualquer projeto' };
    }
    if (!scores['component-driven']) {
      scores['component-driven'] = { score: 5, reason: 'Reutilização e organização' };
    }
    if (!scores['spa'] && !scores['ssr-ssg'] && !scores['jamstack']) {
      scores['spa'] = { score: 5, reason: 'Flexibilidade e simplicidade' };
    }
  }

  // Garantir opção para SEO quando necessário
  if ((projectType === 'ecommerce' || priority === 'performance') && !scores['ssr-ssg']) {
    scores['ssr-ssg'] = { score: 5, reason: 'SEO e performance essenciais' };
  }
  
  // Garantir opção mobile quando relevante  
  if ((projectType === 'ecommerce' || projectType === 'startup') && !scores['pwa']) {
    scores['pwa'] = { score: 4, reason: 'Experiência mobile importante' };
  }

  return Object.entries(scores)
    .map(([pattern, data]) => ({ pattern, score: data.score }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.pattern);
} 