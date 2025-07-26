# 🚀 Cursor Rules para Front-End

> **Guia prático de Cursor Rules para desenvolvimento front-end - porque produtividade não é só sobre código, é sobre contexto.**

## 🎯 O que é isso?

Cursor Rules são configurações que transformam o Cursor em um assistente especializado para seu projeto. Em vez de ter um "AI genérico", você tem um parceiro que entende suas convenções, padrões e necessidades específicas.

## 🎨 Por que Front-End?

Front-end tem particularidades únicas:

- **Componentização** - Estruturas específicas
- **Estados complexos** - Gerenciamento de UI
- **Performance** - Otimizações específicas
- **Design Systems** - Padrões visuais
- **Frameworks** - React, Vue, Angular, Svelte
- **Build tools** - Vite, Webpack, Rollup
- **CSS-in-JS** - Styled Components, Emotion, etc.

## 📁 Estrutura do Projeto

```
cursor-rules-frontend/
├── rules/
│   ├── react/
│   ├── vue/
│   ├── angular/
│   ├── svelte/
│   ├── performance/
│   ├── testing/
│   └── design-systems/
├── examples/
│   ├── components/
│   ├── hooks/
│   └── patterns/
├── templates/
│   ├── .cursorrules
│   └── .cursorrules.template
└── docs/
    ├── getting-started.md
    └── best-practices.md
```

## 🚀 Como usar

1. **Clone o repo:**

```bash
git clone https://github.com/seu-usuario/cursor-rules-frontend.git
```

2. **Escolha suas regras:**

```bash
cp templates/.cursorrules.template .cursorrules
```

3. **Personalize para seu projeto:**

- Ajuste as regras para seu framework
- Adicione suas convenções
- Configure seu design system

## 🎯 Cenários Cobertos

### 🟢 **React**

- Componentes funcionais vs classes
- Hooks personalizados
- Context API
- Performance com React.memo
- TypeScript + React

### 🔵 **Vue**

- Composition API
- Options API
- Pinia para estado
- Nuxt.js patterns

### 🟡 **Angular**

- Services
- RxJS patterns
- NgRx
- Angular Material

### 🟠 **Svelte**

- Stores
- Actions
- Transitions
- SvelteKit

### ⚡ **Performance**

- Code splitting
- Lazy loading
- Bundle optimization
- Core Web Vitals

### 🧪 **Testing**

- Jest + React Testing Library
- Vitest
- Cypress
- Playwright

### 🎨 **Design Systems**

- Storybook
- Component documentation
- Theme management
- Accessibility

## 💡 Exemplos Práticos

### React Component Rule

```json
{
  "name": "React Component",
  "description": "Cria componentes React seguindo padrões específicos",
  "rules": [
    "Use functional components",
    "Implemente PropTypes ou TypeScript",
    "Siga naming convention PascalCase",
    "Separe lógica de apresentação"
  ]
}
```

### Performance Rule

```json
{
  "name": "Performance First",
  "description": "Otimizações automáticas para performance",
  "rules": [
    "Use React.memo para componentes pesados",
    "Implemente lazy loading",
    "Otimize re-renders",
    "Considere bundle size"
  ]
}
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-regra`
3. Commit: `git commit -m '[feat] Adiciona regra para X'`
4. Push: `git push origin feature/nova-regra`
5. Abra um Pull Request

## 📚 Recursos

- [Cursor Documentation](https://cursor.sh/docs)
- [Cursor Rules Guide](https://cursor.sh/docs/rules)
- [Front-End Performance](https://web.dev/performance/)
- [React Best Practices](https://react.dev/learn)

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**Feito com ❤️ para a comunidade front-end**

_Quer contribuir? Abra uma issue ou PR!_
