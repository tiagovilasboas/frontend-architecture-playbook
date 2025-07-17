# Front-End Architecture Playbook

> **Guia prático, direto e realista sobre arquiteturas front-end. Dev para dev, sem enrolação.**

Um playbook que traz as arquiteturas mais conhecidas e que, na experiência de 18 anos de front-end, realmente entregam resultado. Existem dezenas de outras, mas aqui estão as que eu confio pra projetos reais.

## 🎯 **O que é?**

Este playbook é um guia prático que resolve problemas reais de arquitetura front-end. Não é teoria acadêmica - é experiência de batalha convertida em decisões arquiteturais claras.

**O grande segredo de qualquer arquitetura:** respeite a **Dependency Rule**. Se a regra de dependência for ignorada, nenhuma arquitetura salva seu projeto do caos. Camadas de fora só podem depender das de dentro. Negócio nunca depende de framework. Simples assim.

## 🚀 **Features**

### **📚 Conteúdo Organizado por Contexto**
- **🏗️ Arquiteturas** - Padrões arquiteturais principais
- **🎯 Padrões** - Padrões de design e implementação
- **⚡ Técnicas** - Técnicas específicas de desenvolvimento
- **📖 Guias** - Guias práticos e decisões
- **✅ Boas Práticas** - Princípios fundamentais

### **🏗️ Arquiteturas Cobertas**
- **Clean Architecture** - Separação clara de responsabilidades
- **Component-Driven Development** - Reutilização e composição
- **Micro-frontends** - Escalabilidade de times
- **Monorepo** - Compartilhamento de código
- **Single Page Application** - Aplicações de página única
- **SSR/SSG** - Performance e SEO
- **PWA** - Experiência mobile
- **Islands Architecture** - Performance híbrida
- **State Machines** - Lógica complexa
- **Event-Driven** - Desacoplamento
- **Feature Flags** - Deploy seguro
- **Atomic Design** - Design systems
- **JAMstack** - Performance e simplicidade
- **Security Patterns** - Padrões de segurança e autenticação

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

### **🎯 Decision Wizard**
- **Interativo** - Responde perguntas e encontra a arquitetura ideal
- **Contextual** - Considera time, projeto e objetivos
- **Prático** - Baseado em experiência real
- **Mobile-optimized** - Cards clicáveis e responsivos
- **3 perguntas** - Fluxo simplificado e direto
- **Sugestões garantidas** - Sempre retorna pelo menos uma arquitetura

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

- **Cypress E2E** - Testes completos do Decision Wizard
- **Cobertura total** - Todas as combinações de respostas testadas
- **Mobile/Desktop** - Testes em diferentes viewports
- **Performance** - Testes de carregamento e responsividade
- **Acessibilidade** - Verificação de contraste e navegação

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

# Otimizar imagens
npm run optimize:images

# Testes E2E
npx cypress run
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
- **Como Escolher** - Decision wizard interativo
- **Dependency Rule** - Regra fundamental de arquitetura

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

## 🤝 **Contribuindo**

Contribuições são bem-vindas! Se você tem:
- Experiência real com alguma arquitetura
- Casos de uso interessantes
- Melhorias no código
- Correções ou sugestões

Abra uma issue ou pull request!

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
