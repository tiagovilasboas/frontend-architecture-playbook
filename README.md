# 🚀 Frontend Architecture Playbook

> **Guia prático de arquiteturas front-end com tom de dev para dev — direto, conversacional, sem enrolação.**

## 🎯 O que é isso?

Um playbook interativo de arquiteturas front-end cobrindo Clean Architecture, Component-Driven, Micro-frontends, Monorepo, SSR/SSG, Islands Architecture, performance e muito mais. Inclui um MCP Server para integração com o Cursor AI.

## 🎨 Por que Front-End?

Front-end tem particularidades únicas:

- **Componentização** - Estruturas específicas
- **Estados complexos** - Gerenciamento de UI
- **Performance** - Otimizações específicas (Core Web Vitals, TTI, LCP)
- **Design Systems** - Padrões visuais
- **Frameworks** - React, Vue, Angular, Svelte
- **Build tools** - Vite, Webpack, Rollup
- **CSS-in-JS** - Styled Components, Emotion, etc.

## 📁 Estrutura do Projeto

```
frontend-architecture-playbook/
├── .cursorrules              ← Cursor AI rules (com Senior Reviewer integrado)
├── .github/
│   └── workflows/
│       ├── ci.yml            ← CI: lint, test, lighthouse
│       └── reviewdog.yml     ← Code review automático
├── docs/
│   ├── README.md             ← Índice da documentação
│   ├── ROADMAP.md
│   └── adr/                  ← Architecture Decision Records (Michael Nygard)
│       ├── README.md
│       ├── 001-visualizations-and-comparisons.md
│       └── 002-state-management.md
├── mcp-server/               ← MCP Server para integração com Cursor
│   ├── src/index.ts
│   └── data/
├── src/
│   ├── components/           ← Componentes Mantine + Tabler Icons
│   ├── data/
│   │   ├── content/          ← Guias em JSON (content-as-data)
│   │   └── glossary/
│   │       └── terms.json    ← Termos técnicos (SSR, LCP, TTI, Islands, etc.)
│   ├── pages/                ← Rotas da aplicação
│   └── lib/                  ← Utilitários, navegação, conteúdo
├── e2e/                      ← Testes end-to-end (Playwright)
└── examples/                 ← Exemplos de código
```

## 🚀 Como usar

1. **Clone o repo:**

```bash
git clone https://github.com/tiagovilasboas/frontend-architecture-playbook.git
```

2. **Instale e rode:**

```bash
npm install
npm run dev
```

3. **Configure o Cursor com o MCP Server:**

```bash
cd mcp-server && npm install && npm run build
```

Ver [mcp-server/README.md](./mcp-server/README.md) para configuração completa.

## 🎯 Conteúdo Coberto

### 🏗️ **Arquiteturas**

- Clean Architecture
- Component-Driven Development
- Micro-frontends
- Monorepo
- SSR / SSG / Islands Architecture

### ⚡ **Performance**

- Core Web Vitals (LCP, INP, CLS)
- Time to Interactive (TTI)
- Code splitting, lazy loading
- Partial Hydration

### 🧭 **Staff / Principal**

- Fundamentos, UI, Entrega, Estrutura, Escala
- Guardrails, ADRs, revisão de arquitetura

### 📚 **Glossário Técnico**

Mais de 50 termos densos: Islands Architecture, Hydration, Partial Hydration, LCP, TTI, Streaming SSR, CORS, CSP, Fiber, e muito mais.

## 🤖 MCP Server

Integra o playbook com o Cursor AI via Model Context Protocol:

- `playbook_search` — busca guias por palavra-chave
- `playbook_get_guide` — retorna um guia completo
- `playbook_list_guides` — lista todos os guias
- `playbook_get_cases` — casos reais (Netflix, Spotify, etc.)
- `playbook_map_snippet` — mapeia um trecho de código ao guia mais relevante
- `playbook_get_reasoning_guide` — raciocínio sequencial para decisões

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-regra`
3. Commit: `git commit -m '[feat] Adiciona regra para X'`
4. Push: `git push origin feature/nova-regra`
5. Abra um Pull Request

> **Decisões arquiteturais** devem ser documentadas em `docs/adr/` seguindo o formato Michael Nygard.

## 📚 Recursos

- [Cursor Documentation](https://cursor.sh/docs)
- [Mantine UI](https://mantine.dev)
- [web.dev Performance](https://web.dev/performance/)
- [React Best Practices](https://react.dev/learn)

## 📄 Licença

MIT License

---

**Feito com ❤️ para a comunidade front-end**
