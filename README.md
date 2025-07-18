# 🚀 Front-End Architecture Playbook

> **Decision wizard interativo + casos reais que provam ROI de arquitetura. Dev para dev, sem enrolação.**

Não é mais um guia teórico. É um **assistente de decisão** que considera seu contexto real (time, prazo, objetivo) e recomenda a arquitetura certa. Baseado em 18 anos de front-end e casos reais de Netflix, Spotify, Airbnb e outras.

## 🎯 **O que é?**

Um **sistema de suporte à decisão** que resolve a pergunta que todo dev já teve: "Qual arquitetura usar no meu projeto?". Combina:

- **🧙‍♂️ Decision Wizard:** 5 perguntas contextuais → recomendação personalizada + justificativa
- **💼 Casos Reais:** Como Netflix, Spotify, Airbnb geraram milhões com decisões técnicas certas  
- **📚 Guias Práticos:** Implementação passo-a-passo de cada arquitetura
- **⚡ Tom dev-to-dev:** Direto, sem academicismo. Foco em resultado.

**A base de tudo:** **Dependency Rule**. Camadas externas dependem das internas. Negócio nunca depende de framework. Respeite isso e qualquer arquitetura funciona. Ignore e nenhuma salva.

## 🚀 **Features**

### **🧙‍♂️ Decision Wizard v2.0 (NEW!)**
- **6 steps contextuais:** Tipo projeto, tamanho time, nível técnico, prioridade, integrações + resumo
- **Lógica sofisticada:** Sistema de scoring multi-dimensional com 37 testes
- **Recomendações inteligentes:** Cada sugestão vem com justificativa específica
- **Bonus patterns:** Padrões complementares baseados no contexto
- **Mobile-optimized:** UX responsiva e intuitiva

### **💼 Casos Reais de Impacto (UPDATED!)**
- **16 empresas:** Pinterest, Tinder, Slack, Uber, WhatsApp, Zoom, Figma, Discord + originais
- **Métricas concretas:** "+103% engagement", "-84% time to interactive", "99.9% sync accuracy"
- **Business impact:** Como decisões técnicas viraram milhões em receita
- **Links verificáveis:** Fontes originais dos casos
- **Prova de ROI:** Justifique refactors e decisões técnicas

### **📚 Conteúdo Organizado por Contexto**
- **📖 Guias** - Decision wizard, casos reais, dependency rule
- **🏗️ Arquiteturas** - 13+ padrões arquiteturais testados
- **🎯 Padrões** - Repository, Security, State Machines
- **⚡ Técnicas** - Code splitting, lazy loading, performance
- **✅ Boas Práticas** - DRY, KISS, YAGNI, Clean Code, SRP, SOC

### **🎯 SEO & Discoverability (NEW!)**
- **Meta tags otimizadas:** Keywords, structured data, Open Graph
- **Author attribution:** "By Tiago Vilas Boas" link no header
- **Sitemap.xml** + **robots.txt** para melhor indexação
- **Shareable content:** Cases e decisions linkáveis
- **Long-tail keywords:** "frontend architecture decision", "micro frontends when to use"

### **🏗️ Arquiteturas Cobertas (15 TOTAL!)**

**🔥 TIER 1: Essenciais**
- **SSR & SSG** - "Se você liga pra SEO, você usa SSR"
- **Backend-for-Frontend (BFF)** - "Uma API sob medida pro seu front"
- **Progressive Web Apps (PWA)** - "Web que se comporta como app nativo"

**🚀 TIER 2: Importantes**
- **Headless/API-First** - "Separação igreja-estado entre content e apresentação"
- **Hexagonal Architecture** - "Clean Architecture mais flexível e menos dogmática"
- **Layered Architecture** - "Clean Architecture sem a complexidade - direto ao ponto"

**📚 TIER 3: Específicas**
- **Event Sourcing Frontend** - "Toda ação é um evento - debug e auditoria que funciona"
- **CQRS Frontend** - "Read diferente de write - performance e clareza"
- **Microservices Frontend** - "Dividir pra conquistar - times, deploys, responsabilidades"

**⚡ Clássicas**
- **Clean Architecture** - Separação clara de responsabilidades
- **Component-Driven Development** - Reutilização e composição
- **Micro-frontends** - Escalabilidade de times
- **Monorepo** - Compartilhamento de código
- **Single Page Application** - Aplicações de página única
- **Islands Architecture** - Performance híbrida
- **JAMstack** - Performance e simplicidade

### **🎯 Padrões de Design**
- **Repository Pattern** - Abstração de acesso a dados
- **Security Patterns** - Padrões de segurança e autenticação
- **DRY** - Don't Repeat Yourself (lógica de negócio)
- **KISS** - Keep It Simple, Stupid
- **YAGNI** - You Aren't Gonna Need It

### **⚡ Técnicas Avançadas**
- **Dependency Injection** - Inversão de controle
- **Code Splitting** - Otimização de performance
- **Lazy Loading** - Carregamento sob demanda
- **Error Boundaries** - Tratamento de erros
- **Performance Monitoring** - Métricas reais

### **✅ Boas Práticas Fundamentais**
- **DRY** - Don't Repeat Yourself (lógica de negócio)
- **KISS** - Keep It Simple, Stupid
- **YAGNI** - You Aren't Gonna Need It
- **Clean Code** - Código legível e manutenível
- **Single Responsibility Principle** - Uma classe, uma responsabilidade
- **Separation of Concerns** - Separe responsabilidades claramente

### **🎯 Decision Wizard v2.0**
- **6 perguntas contextuais** - Tipo, time, nível técnico, prioridade, integrações + resumo
- **Sistema de scoring sofisticado** - Multi-dimensional com ajustes dinâmicos
- **Recomendações com justificativa** - "Por que Clean Architecture para seu contexto"
- **37 testes automatizados** - Cobertura completa de cenários
- **Bonus patterns inteligentes** - Padrões complementares baseados nas respostas
- **UX responsiva** - Mobile-first com navegação intuitiva

### **💻 Exemplos Reais**
- **Exemplos por arquitetura** - Cada arquitetura tem seu próprio arquivo em `src/utils/code-examples/`
- **Componente CodeExample** - Renderização dinâmica e consistente
- **Casos de uso** - E-commerce, dashboard, analytics
- **Armadilhas** - Problemas comuns e como evitar
- **Referências** - Livros, artigos e casos reais

### **📱 Mobile UX**
- **Rodovia estática** - Performance otimizada no mobile
- **Botões 100% width** - Melhor usabilidade em telas pequenas
- **Cards compactos** - Layout adaptado para mobile
- **Touch-friendly** - Elementos otimizados para toque
- **Responsivo** - Funciona perfeitamente em qualquer dispositivo

### **🛡️ Dependency Rule Guide**
- **Guia dedicado** - Regra fundamental de qualquer arquitetura
- **Exemplos práticos** - Código real com cenários
- **Armadilhas comuns** - Como evitar quebrar a regra
- **Acesso rápido** - Link destacado no header

## 🛠️ **Tecnologias**

- **React 19** + **TypeScript** - Base moderna
- **Vite** - Build otimizado com code splitting
- **Mantine** - Design system completo
- **React Router** - Navegação SPA
- **Tabler Icons** - Ícones consistentes
- **Cypress** - Testes E2E completos
- **Husky** - Git hooks para qualidade
- **Lint-staged** - Validação automática

## 📊 **Performance**

- **Code splitting** - Chunks otimizados por funcionalidade
- **Lazy loading** - Páginas carregam sob demanda
- **Bundle otimizado** - 11 chunks separados
- **Imagens otimizadas** - PNGs comprimidos pré-build (60% redução)
- **Dark mode** - Suporte completo
- **Responsivo** - Funciona em qualquer tela
- **Mobile-first** - UX otimizada para dispositivos móveis

## 🧪 **Testing**

- **Jest** - 37 testes unitários do Decision Wizard v2.0
- **Lógica de scoring** - Todos os cenários de recomendação testados
- **Bonus patterns** - Validação de padrões complementares
- **Coverage completo** - DecisionWizard + getBonusPatterns
- **Cenários reais** - MVP, SaaS, E-commerce, Enterprise, Startup
- **Context validation** - Time size, tech level, priorities testados
- **15 arquiteturas** - Todas testadas e funcionais

## 🏃‍♂️ **Quick Start**

```bash
# Clone
git clone https://github.com/tiagovilasboas/frontend-architecture-playbook.git
cd frontend-architecture-playbook

# Instale
npm install

# Dev (com kill-port automático)
npm run dev

# Build
npm run build

# Lint
npm run lint

# Testes
npm test

# Otimizar imagens
npm run optimize:images
```

## 🏗️ **Estrutura do Projeto**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── CodeExample.tsx # Renderização centralizada de código
│   ├── DocsShell.tsx   # Layout principal
│   ├── NavMenu.tsx     # Menu lateral
│   ├── NavItem.tsx     # Item de menu
│   ├── HeaderBar.tsx   # Header com Dependency Rule
│   ├── Footer.tsx      # Footer
│   ├── interactive/    # Componentes interativos
│   │   └── DecisionWizard.tsx
│   ├── ui/            # Componentes de UI
│   └── diagrams/      # Diagramas arquiteturais
├── content/            # Conteúdo organizado por contexto
│   ├── guides/         # Guias práticos
│   │   ├── cases.tsx   # NEW: Casos reais com ROI
│   │   ├── how-to-choose.tsx
│   │   └── dependency-rule.tsx
│   ├── patterns/       # Padrões de design
│   │   ├── dry.tsx
│   │   ├── kiss.tsx
│   │   ├── yagni.tsx
│   │   └── repository-pattern.tsx
│   ├── architectures/  # Arquiteturas principais
│   │   ├── clean-architecture.tsx
│   │   ├── component-driven.tsx
│   │   ├── micro-frontends.tsx
│   │   └── ...
│   └── techniques/     # Técnicas específicas
│       ├── dependency-injection.tsx
│       ├── code-splitting.tsx
│       └── ...
├── utils/              # Utilitários e dados
│   └── code-examples/  # Exemplos por arquitetura
├── hooks/              # Custom hooks
│   └── useNavigationActions.ts
├── types/              # Tipos TypeScript
│   └── index.ts
├── pages/              # Páginas da aplicação
└── examples/           # Exemplos de código real
```

## 🎨 **Design System**

- **Mantine** - Componentes consistentes
- **Dark/Light mode** - Suporte completo
- **Responsivo** - Mobile-first
- **Acessibilidade** - WCAG compliant
- **Performance** - Otimizado para velocidade
- **Hover states** - Feedback visual suave
- **Sticky header** - Navegação sempre acessível

## 📈 **Code Splitting**

O projeto usa code splitting inteligente:

- **vendor-react** - React, React Router
- **vendor-mantine** - UI components
- **vendor-icons** - Tabler Icons
- **content-patterns** - Arquiteturas
- **content-guides** - Guias
- **components** - Componentes reutilizáveis
- **pages** - Páginas da aplicação

## 🧪 **Qualidade do Código**

- **Single Responsibility Principle** - Uma classe, uma responsabilidade
- **Separation of Concerns** - Separe responsabilidades claramente
- **Clean Code** - Legível e manutenível
- **TypeScript** - Tipagem forte
- **ESLint** - Padrões consistentes
- **Husky** - Pre-commit hooks
- **Lint-staged** - Validação automática
- **Cypress E2E** - Testes completos automatizados
- **Otimização de imagens** - Compressão pré-build automática
- **Exemplos centralizados** - JSON único para todos os exemplos

## 🎨 **Diretrizes de Tema**

- **Dark/Light mode** - Suporte completo
- **Sem cores fixas** - Use `withBorder` e `variant="light"`
- **Adaptação automática** - Deixe o Mantine cuidar do tema
- **Teste sempre** - Verifique ambos os temas antes de commitar
- **Header/Footer** - Fundos mais escuros para destaque

> 📋 Veja as regras em `.cursor/rules.md` para diretrizes detalhadas

## 🎯 **Para Quem é?**

### **Júnior/Pleno**
- Aprenda a escolher arquitetura certa
- Evite over-engineering
- Entenda trade-offs reais
- Aplique boas práticas desde o início

### **Sênior/Tech Lead**
- Base para decisões arquiteturais
- Justificativas técnicas sólidas
- Padrões testados em produção
- Guia para refatoração

### **CTO/Arquitetos**
- ROI das decisões técnicas
- Escalabilidade de longo prazo
- Redução de dívida técnica
- Padrões para times

## 📚 **Conteúdo**

### **Guias**
- **Cases** - Casos reais de impacto com métricas de ROI
- **Como Escolher** - Decision wizard v2.0 interativo e inteligente
- **Dependency Rule** - Regra fundamental de qualquer arquitetura

### **Boas Práticas**
- **DRY** - Don't Repeat Yourself (lógica de negócio)
- **KISS** - Keep It Simple, Stupid
- **YAGNI** - You Aren't Gonna Need It
- **Clean Code** - Código legível e manutenível
- **Single Responsibility Principle** - Uma classe, uma responsabilidade
- **Separation of Concerns** - Separe responsabilidades claramente

### **Padrões**
- **Repository Pattern** - Abstração de acesso a dados
- **Security Patterns** - Padrões de segurança e autenticação
- **Dependency Injection** - Inversão de controle
- **Observer Pattern** - Desacoplamento
- **Factory Pattern** - Criação de objetos

### **Arquiteturas (13 padrões)**
- **Clean Architecture** - Separação de camadas
- **Component-Driven** - Reutilização
- **Micro-frontends** - Escalabilidade
- **Monorepo** - Compartilhamento
- **Single Page Application** - Aplicações modernas
- **SSR/SSG** - Performance
- **PWA** - Mobile
- **Islands** - Híbrido
- **State Machines** - Lógica complexa
- **Event-Driven** - Desacoplamento
- **Feature Flags** - Deploy seguro
- **Atomic Design** - Design systems
- **JAMstack** - Performance e simplicidade

### **Técnicas**
- **Code Splitting** - Otimização de performance
- **Lazy Loading** - Carregamento sob demanda
- **Error Boundaries** - Tratamento de erros
- **Performance Monitoring** - Métricas reais

## 🗺️ **Roadmap**

Veja onde estamos indo no [ROADMAP.md](./ROADMAP.md):

- **Q1 2025:** Visualizações e comparações (radar charts, trade-offs matrix)
- **Q2 2025:** Contexto rico (budget, stack analysis, team skills)
- **Q3 2025:** Machine Learning e feedback loop
- **Q4 2025:** Gamification e community features
- **2026:** AI Architecture Assistant

## 📋 **Architecture Decision Records**

Documentamos decisões importantes em [docs/adr/](./docs/adr/):

- **[ADR-001](./docs/adr/001-visualizations-and-comparisons.md):** Visualizações com Recharts

## 🤝 **Contribuindo**

Contribuições são bem-vindas! Se você tem:
- Experiência real com alguma arquitetura
- Casos de uso interessantes com métricas
- Melhorias no Decision Wizard
- Correções ou sugestões

Abra uma issue ou pull request! Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para guidelines.

## 📄 **Licença**

MIT - Use livremente para seus projetos.

## 👨‍💻 **Autor**

**Tiago Vilas Boas** - Front-end engineer há 18 anos

Sou o dev que transforma código em resultado: turbinei checkouts, simplifiquei cadastros bancários, acelerei fluxos de KYC e salvei dashboards engasgados. Fora dos horários de entrega, lapido os open-sources Ponto PJ e DataForge Tools e escrevo "Código Bonito Não Paga Boleto", tudo focado na mesma pegada: impacto real primeiro.

**Links:**
- [GitHub](https://github.com/tiagovilasboas)
- [LinkedIn](https://www.linkedin.com/in/tiagovilasboas)

---

**Lembre-se:** Arquitetura é trade-off atrás de trade-off. Não existe bala de prata. O que resolve pra um, pode ser dor de cabeça pra outro. O segredo? Saber o que você precisa agora — e não fechar portas pro futuro.
