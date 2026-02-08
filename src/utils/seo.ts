export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const getPageMeta = (pathname: string): PageMeta => {
  const baseUrl = 'https://frontend-architecture-playbook.vercel.app';

  switch (pathname) {
    case '/':
      return {
        title: 'Arquitetura Front-End: Guia Completo + Decision Wizard v3.0',
        description:
          'Arquitetura Front-End: Guia completo com Decision Wizard v3.0 + 9 arquiteturas comparadas. Clean Architecture, Micro-frontends, SSR/SSG, BFF, PWA. 9 casos reais com fontes verificáveis.',
        keywords:
          'arquitetura front-end, arquitetura frontend, front-end architecture, frontend architecture, clean architecture, micro frontends, javascript patterns, web development, typescript, decision wizard v3, architecture patterns, frontend best practices',
        ogTitle: 'Arquitetura Front-End: Guia Completo + Decision Wizard v3.0',
        ogDescription:
          'Guia completo de arquitetura front-end com Decision Wizard v3.0 e 9 arquiteturas comparadas. 9 casos reais com fontes verificáveis.',
        ogImage: `${baseUrl}/og-image.png`,
        canonical: baseUrl,
      };

    case '/guides/dependency-rule':
      return {
        title: 'Dependency Rule - Regra Fundamental da Arquitetura Front-End',
        description:
          'Aprenda a regra mais importante de qualquer arquitetura front-end. Dependency Rule explicada com exemplos práticos, implementação e benefícios. Se você quebrar essa regra, nenhuma arquitetura salva seu projeto.',
        keywords:
          'dependency rule, arquitetura front-end, clean architecture, frontend architecture, dependency injection, architecture principles, software design, separation of concerns',
        ogTitle: 'Dependency Rule - Regra Fundamental da Arquitetura Front-End',
        ogDescription:
          'A regra mais importante de qualquer arquitetura front-end. Se você ignorar isso, nenhuma arquitetura consegue salvar seu projeto do caos.',
        canonical: `${baseUrl}/guides/dependency-rule`,
      };

    case '/guides/how-to-choose':
      return {
        title: 'Como Escolher sua Arquitetura Front-End - Decision Wizard v3.0',
        description:
          'Decision Wizard v3.0 com 6 perguntas para encontrar sua arquitetura ideal. Ferramenta interativa que analisa seu contexto e recomenda a melhor arquitetura para seu projeto.',
        keywords:
          'architecture decision tool, frontend architecture guide, decision wizard, architecture comparison, software architecture, technology choice',
        ogTitle: 'Decision Wizard v3.0 - Como Escolher Arquitetura Front-End',
        ogDescription:
          '6 perguntas para encontrar sua arquitetura ideal - agora com todas as 15 arquiteturas disponíveis.',
        canonical: `${baseUrl}/guides/how-to-choose`,
      };

    case '/guides/architecture-comparison':
      return {
        title: 'Comparação de Arquiteturas Front-End - Métricas e Trade-offs',
        description:
          'Comparação visual detalhada de 9 arquiteturas front-end com métricas de performance, manutenibilidade, testabilidade e escalabilidade. Análise de trade-offs e casos de uso.',
        keywords:
          'arquitetura front-end, architecture comparison, frontend patterns comparison, clean architecture vs micro frontends, architecture metrics, performance comparison, scalability analysis',
        ogTitle: 'Comparação Visual de Arquiteturas Front-End',
        ogDescription:
          '9 arquiteturas front-end comparadas visualmente com métricas de performance, manutenibilidade e escalabilidade.',
        canonical: `${baseUrl}/guides/architecture-comparison`,
      };

    case '/guides/cases':
      return {
        title:
          'Casos Reais de Arquitetura Front-End - 9 Cases com Fontes',
        description:
          '9 casos reais de empresas que aplicaram boas práticas com resultado. Cada caso com link para artigo ou tech blog original.',
        keywords:
          'frontend case studies, netflix architecture, spotify frontend, airbnb tech, real world examples, performance optimization, architecture success stories',
        ogTitle: 'Casos Reais: Quando Front-End Vira Dinheiro',
        ogDescription:
          '9 empresas que provaram que performance não é frescura. Stack bonita não paga boleto, mas essas histórias sim.',
        canonical: `${baseUrl}/guides/cases`,
      };

    // Architecture Patterns
    case '/patterns/clean-architecture':
      return {
        title: 'Clean Architecture Front-End - Implementação Prática',
        description:
          'Clean Architecture aplicada ao front-end. Separação de responsabilidades, independência de frameworks, testes unitários puros. Implementação prática com React/TypeScript.',
        keywords:
          'clean architecture, frontend clean architecture, react clean architecture, separation of concerns, dependency inversion, testable code',
        canonical: `${baseUrl}/patterns/clean-architecture`,
      };

    case '/patterns/micro-frontends':
      return {
        title: 'Micro-frontends - Arquitetura para Times Independentes',
        description:
          'Micro-frontends: como dividir aplicações front-end em times independentes. Implementação prática, ferramentas, casos de uso e trade-offs.',
        keywords:
          'micro frontends, microservices frontend, team independence, module federation, webpack 5, independent deployment',
        canonical: `${baseUrl}/patterns/micro-frontends`,
      };

    case '/patterns/component-driven':
      return {
        title: 'Component-Driven Development - Design Systems e Reutilização',
        description:
          'Component-Driven Development: como criar componentes reutilizáveis e design systems escaláveis. Storybook, Atomic Design, composição e manutenibilidade.',
        keywords:
          'component driven development, design systems, atomic design, storybook, reusable components, frontend architecture',
        canonical: `${baseUrl}/patterns/component-driven`,
      };

    case '/patterns/ssr-ssg':
      return {
        title: 'SSR vs SSG - Server-Side Rendering vs Static Generation',
        description:
          'Comparação detalhada entre SSR (Server-Side Rendering) e SSG (Static Site Generation). Quando usar cada um, implementação prática e performance.',
        keywords:
          'ssr, ssg, server side rendering, static site generation, next.js, gatsby, performance optimization',
        canonical: `${baseUrl}/patterns/ssr-ssg`,
      };

    case '/patterns/bff':
      return {
        title: 'BFF Pattern - Backend for Frontend',
        description:
          'BFF (Backend for Frontend): como otimizar APIs para diferentes clientes. Implementação prática, casos de uso e benefícios para performance.',
        keywords:
          'bff, backend for frontend, api optimization, mobile optimization, performance, microservices',
        canonical: `${baseUrl}/patterns/bff`,
      };

    case '/patterns/pwa':
      return {
        title: 'PWA - Progressive Web Apps - Apps Nativos com Web',
        description:
          'Progressive Web Apps: como criar apps nativos usando web technologies. Service Workers, manifest, offline support e performance.',
        keywords:
          'pwa, progressive web app, service workers, offline support, mobile app, web app',
        canonical: `${baseUrl}/patterns/pwa`,
      };

    // Best Practices
    case '/patterns/clean-code':
      return {
        title: 'Clean Code Front-End - Código Limpo e Manutenível',
        description:
          'Clean Code aplicado ao front-end. Princípios SOLID, nomes significativos, funções pequenas e código auto-documentado.',
        keywords:
          'clean code, solid principles, code quality, maintainable code, frontend best practices',
        canonical: `${baseUrl}/patterns/clean-code`,
      };

    case '/patterns/srp':
      return {
        title: 'SRP - Single Responsibility Principle no Front-End',
        description:
          'Single Responsibility Principle aplicado ao desenvolvimento front-end. Como dividir responsabilidades em componentes, hooks e services.',
        keywords:
          'srp, single responsibility principle, component design, separation of concerns, frontend architecture',
        canonical: `${baseUrl}/patterns/srp`,
      };

    // Techniques
    case '/techniques/performance':
      return {
        title: 'Performance Front-End - Otimização e Métricas',
        description:
          'Técnicas de otimização de performance front-end. Core Web Vitals, lazy loading, code splitting, bundle optimization e métricas.',
        keywords:
          'frontend performance, core web vitals, lazy loading, code splitting, bundle optimization, lighthouse',
        canonical: `${baseUrl}/techniques/performance`,
      };

    default:
      // Fallback para páginas não mapeadas
      return {
        title: 'Front-End Architecture Playbook',
        description:
          'Guia prático de arquiteturas front-end com exemplos reais e ferramentas interativas.',
        keywords:
          'frontend architecture, web development, software architecture',
        canonical: `${baseUrl}${pathname}`,
      };
  }
};

export const updatePageMeta = (pathname: string) => {
  const meta = getPageMeta(pathname);

  // Update title
  document.title = meta.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', meta.description);

  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', meta.keywords);

  // Update canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute(
    'href',
    meta.canonical ||
      `https://frontend-architecture-playbook.vercel.app${pathname}`
  );

  // Update Open Graph
  if (meta.ogTitle) {
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.ogTitle);
  }

  if (meta.ogDescription) {
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', meta.ogDescription);
  }

  if (meta.ogImage) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', meta.ogImage);
  }
};
