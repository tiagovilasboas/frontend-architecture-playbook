# Front-End Architecture Playbook 🌐

> Baseado no repositório [Modern Front-End Architecture Patterns](https://github.com/tiagovilasboas/front-end-architecture) e implementado sobre o template **Skeleton + Astro**.

Este projeto reúne padrões, práticas e exemplos para construção de aplicações front-end modernas, sustentáveis e escaláveis. Ele serve como _playground_ demonstrativo e guia de referência.

---

## ✨ Filosofia

Os princípios que guiam este playbook derivam de **Clean Architecture** e **Domain-Driven Design (DDD)**, adaptados para o front-end:

1. **Separação de Responsabilidades (SoC)** – cada módulo possui uma única responsabilidade clara.
2. **Baixo Acoplamento & Alta Coesão** – módulos independentes, focados e fáceis de evoluir ou substituir.
3. **Independência de Frameworks** – a lógica de domínio é mantida agnóstica a detalhes de UI.

---

## 🏛️ Estrutura Recomendada

```text
src/
├── components/       # Componentes Astro (UI)
│   ├── layouts/      # Layouts de página globais
│   ├── sections/     # Seções de página reutilizáveis
│   └── ui/           # Átomos e moléculas visuais (Card, Button…)
│
├── content/          # Conteúdo gerenciado pelo Astro (Content Collections)
│   ├── config.ts     # Schemas de coleções
│   └── patterns/     # Markdown/MDX dos padrões de arquitetura
│
├── lib/              # Lógica de domínio e suporte
│   ├── services/     # Integrações externas (ex.: GitHub API)
│   └── utils/        # Funções utilitárias puras
│
├── pages/            # Rotas baseadas em arquivo do Astro
│   ├── index.astro
│   └── patterns/[slug].astro
│
├── styles/           # Estilos globais & tokens de design
│
└── config.ts         # Configurações globais do site (nome, author, etc.)
```

---

## 🚀 Tecnologias

| Camada | Ferramenta | Porque? |
| ------ | ---------- | ------- |
| **Aplicação** | [Astro](https://astro.build/) | Renderização estática por padrão & _islands_ para interatividade. |
| **Design System / UI** | [Skeleton](https://www.skeleton.dev/) + Tailwind | Componentes acessíveis, theming e utilidades CSS. |
| **Tipagem** | TypeScript | Segurança de tipos & melhor DX. |
| **Build Tool** | Vite (via Astro) | HMR veloz & bundles otimizados. |
| **Conteúdo** | Astro Content Collections | CMS estático tipo-safe. |
| **Ícones** | Lucide Icons | Conjunto leve e consistente de ícones. |

---

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto:

| Comando | Ação |
| :--- | :--- |
| `pnpm install` | Instala dependências |
| `pnpm dev` | Inicia servidor local em `localhost:4321` |
| `pnpm build` | Gera site de produção em `./dist/` |
| `pnpm preview` | Pré-visualiza o build localmente |
| `pnpm astro …` | Executa utilitários da CLI Astro (add, check, etc) |

---

## 🤝 Contribuindo

Sinta-se livre para abrir _issues_ ou _pull requests_ com novos padrões ou melhorias na documentação.

---

## Licença

MIT
