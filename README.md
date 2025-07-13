# Front-End Architecture Playbook

> **Guia prático, direto e realista sobre arquiteturas front-end. Dev para dev, sem enrolação.**

Um playbook que traz as arquiteturas mais conhecidas e que, na experiência de 18 anos de front-end, realmente entregam resultado. Existem dezenas de outras, mas aqui estão as que eu confio pra projetos reais.

## 🎯 **O que é?**

Este playbook é um guia prático que resolve problemas reais de arquitetura front-end. Não é teoria acadêmica - é experiência de batalha convertida em decisões arquiteturais claras.

**O grande segredo de qualquer arquitetura:** respeite a **Dependency Rule**. Se a regra de dependência for ignorada, nenhuma arquitetura salva seu projeto do caos. Camadas de fora só podem depender das de dentro. Negócio nunca depende de framework. Simples assim.

## 🚀 **Features**

### **📚 Arquiteturas Cobertas**
- **Clean Architecture** - Separação clara de responsabilidades
- **Component-Driven Development** - Reutilização e composição
- **Micro-frontends** - Escalabilidade de times
- **Monorepo** - Compartilhamento de código
- **SPA** - Aplicações de página única
- **SSR/SSG** - Performance e SEO
- **PWA** - Experiência mobile
- **Islands Architecture** - Performance híbrida
- **State Machines** - Lógica complexa
- **Event-Driven** - Desacoplamento
- **Feature Flags** - Deploy seguro
- **Atomic Design** - Design systems

### **🎯 Decision Wizard**
- **Interativo** - Responde perguntas e encontra a arquitetura ideal
- **Contextual** - Considera time, projeto e objetivos
- **Prático** - Baseado em experiência real

### **💻 Exemplos Reais**
- **Código testável** - Exemplos que funcionam
- **Casos de uso** - E-commerce, dashboard, analytics
- **Armadilhas** - Problemas comuns e como evitar
- **Referências** - Livros, artigos e casos reais

## 🛠️ **Tecnologias**

- **React 19** + **TypeScript** - Base moderna
- **Vite** - Build otimizado com code splitting
- **Mantine** - Design system completo
- **React Router** - Navegação SPA
- **Tabler Icons** - Ícones consistentes

## 📊 **Performance**

- **Code splitting** - Chunks otimizados por funcionalidade
- **Lazy loading** - Páginas carregam sob demanda
- **Bundle otimizado** - 11 chunks separados
- **Dark mode** - Suporte completo
- **Responsivo** - Funciona em qualquer tela

## 🏃‍♂️ **Quick Start**

```bash
# Clone
git clone https://github.com/tiagovilasboas/frontend-architecture-playbook.git
cd frontend-architecture-playbook

# Instale
npm install

# Dev
npm run dev

# Build
npm run build
```

## 🏗️ **Estrutura do Projeto**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── DocsShell.tsx   # Layout principal
│   ├── NavMenu.tsx     # Menu lateral
│   ├── HeaderBar.tsx   # Header
│   └── Footer.tsx      # Footer
├── content/            # Conteúdo das arquiteturas
│   ├── guides/         # Guias práticos
│   └── patterns/       # Padrões arquiteturais
├── hooks/              # Custom hooks
├── types/              # Tipos TypeScript
├── pages/              # Páginas da aplicação
└── examples/           # Exemplos de código real
```

## 🎨 **Design System**

- **Mantine** - Componentes consistentes
- **Dark/Light mode** - Suporte completo
- **Responsivo** - Mobile-first
- **Acessibilidade** - WCAG compliant
- **Performance** - Otimizado para velocidade

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

- **SRP** - Single Responsibility Principle
- **SOC** - Separation of Concerns
- **Clean Code** - Legível e manutenível
- **TypeScript** - Tipagem forte
- **ESLint** - Padrões consistentes

## 🎨 **Diretrizes de Tema**

- **Dark/Light mode** - Suporte completo
- **Sem cores fixas** - Use `withBorder` e `variant="light"`
- **Adaptação automática** - Deixe o Mantine cuidar do tema
- **Teste sempre** - Verifique ambos os temas antes de commitar

> 📋 Veja as regras em `.cursorrules` para diretrizes detalhadas

## 🎯 **Para Quem é?**

### **Júnior/Pleno**
- Aprenda a escolher arquitetura certa
- Evite over-engineering
- Entenda trade-offs reais

### **Sênior/Tech Lead**
- Base para decisões arquiteturais
- Justificativas técnicas sólidas
- Padrões testados em produção

### **CTO/Arquitetos**
- ROI das decisões técnicas
- Escalabilidade de longo prazo
- Redução de dívida técnica

## 📚 **Conteúdo**

### **Guias**
- **Como Escolher** - Decision wizard interativo

### **Padrões**
- **Clean Architecture** - Separação de camadas
- **Component-Driven** - Reutilização
- **Micro-frontends** - Escalabilidade
- **Monorepo** - Compartilhamento
- **SPA** - Aplicações modernas
- **SSR/SSG** - Performance
- **PWA** - Mobile
- **Islands** - Híbrido
- **State Machines** - Lógica complexa
- **Event-Driven** - Desacoplamento
- **Feature Flags** - Deploy seguro
- **Atomic Design** - Design systems

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

**Tiago Boas** - Front-end engineer há 18 anos
- Liderou squads em bancos digitais, fintechs e SaaS
- Criou módulos para Smart TVs (LG, Samsung)
- Otimizou checkouts de e-commerce (-40% abandono)
- Acelerou dashboards de analytics (+60% performance)
- Entregou microserviços Go que salvaram MVP (2 semanas vs 3 meses)

**Links:**
- [GitHub](https://github.com/tiagovilasboas)
- [LinkedIn](https://www.linkedin.com/in/tiagovilasboas)
- [Twitter](https://twitter.com/tiagovilasboas)

---

**Lembre-se:** Arquitetura é trade-off atrás de trade-off. Não existe bala de prata. O que resolve pra um, pode ser dor de cabeça pra outro. O segredo? Saber o que você precisa agora — e não fechar portas pro futuro.
