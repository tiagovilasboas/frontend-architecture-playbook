# Glossário: plano em baby steps

Objetivo: para cada termo técnico do playbook, ter **tradução** (quando fizer sentido), **conceito** (1–3 frases) e **referências** (web), em PT-BR, entregando máximo valor ao dev (ver PLAYBOOK-UX-VALOR-DEV.md).

## Ordem das levas (por tema e dependência)

Cada leva = ~8–12 termos. Ao final de cada leva, o resultado fica em `src/data/content/glossary/` (ou em `docs/glossary/` até a página existir) em formato reutilizável (ex.: JSON por categoria).

| Leva | Tema                    | Termos                                                                                                                                       | Prioridade                              |
| ---- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1    | SSR & hidratação        | Hydration, Partial hydration, Islands architecture, Streaming SSR, Selective hydration, Server components, Edge rendering                    | Alta (já temos guia SSR & SSG, Islands) |
| 2    | Performance – métricas  | Critical rendering path, LCP, FID, INP, CLS, Render blocking resources, Long tasks API, PerformanceObserver API                              | Alta (guia Performance)                 |
| 3    | Performance – rendering | Browser compositing layers, Paint vs composite vs layout, CSS containment, Layout thrashing, Tree shaking, Code splitting strategies         | Alta                                    |
| 4    | Segurança               | CORS preflight, CSP, Trusted Types, CSRF vs XSS, SameSite cookies, DOM clobbering, Prototype pollution                                       | Alta (guia Security)                    |
| 5    | Estado e concorrência   | Concurrent rendering, Reconciliation, Fiber, Virtual DOM, Memoization pitfalls, Stale closure, Race conditions in UI, Optimistic UI rollback | Média                                   |
| 6    | Cache e rede            | Service Worker lifecycle, Cache invalidation, Stale-while-revalidate, Preload/Prefetch/Preconnect, ETag vs Cache-Control, AbortController    | Média (PWA, Performance)                |
| 7    | Observers e memória     | IntersectionObserver, ResizeObserver, MutationObserver, Detached DOM, Memory leak detection, IndexedDB                                       | Média                                   |
| 8    | Workers e APIs          | Web Workers vs Service Workers, Shadow DOM, Custom Elements, Module federation, WebAssembly                                                  | Média                                   |
| 9    | Restante                | Event loop, Scheduler, Suspense, CRDT, a11y tree, ARIA live regions, etc.                                                                    | Conforme demanda                        |

## Formato de cada verbete (fonte para JSON do glossário)

```json
{
  "id": "hydration",
  "term": "Hydration",
  "termPt": "Hidratação",
  "definition": "Processo em que o JavaScript do framework 'reativa' o HTML já renderizado no servidor, anexando event listeners e estado ao DOM para que a página se torne interativa.",
  "category": "ssr-entrega",
  "guideHref": "/architectures/ssr-ssg",
  "guideLabel": "SSR & SSG",
  "references": [
    { "label": "MDN - Hydration", "url": "..." },
    { "label": "web.dev", "url": "..." }
  ]
}
```

- **term**: em inglês (jargão comum).
- **termPt**: tradução ou equivalente em português quando for termo de uso (ex.: Hidratação).
- **definition**: 1–3 frases em PT-BR; conceito, não tutorial.
- **category**: chave para filtro (ssr-entrega, performance, security, state, etc.).
- **guideHref** / **guideLabel**: link para o guia do playbook que aprofunda.
- **references**: 1–2 links externos (MDN, web.dev, spec, artigo canônico).

## Baby step 1 (Leva 1 – SSR & hidratação) ✅ Feito

Termos concluídos: **Hydration**, **Partial hydration**, **Islands architecture**, **Streaming SSR**, **Selective hydration**, **Server components**, **Edge rendering**.

- **Arquivo:** `src/data/glossary/terms.json` — estrutura com `meta`, `categories` e `terms[]` (id, term, termPt, definition, category, guideHref, guideLabel, references[]).
- Cada verbete tem definição em PT-BR, link para guia do playbook e 1–2 referências externas (React, Astro, MDN, web.dev, etc.).

**Leva 2 (Performance – métricas) concluída.** Critical rendering path, LCP, FID, INP, CLS, Render-blocking resources, Long Tasks API, PerformanceObserver API.

**Leva 3 (Performance – rendering) concluída.** Paint vs composite vs layout, CSS containment, Layout thrashing, Tree shaking, Code splitting strategies. Referências: web.dev, MDN, Chrome, Webpack, Rollup, CSS-Tricks.

**Leva 4 (Segurança) concluída.** CORS preflight, CSP, Trusted Types, CSRF vs XSS mitigation, SameSite cookie attribute, DOM clobbering, Prototype pollution. Categoria "Segurança" adicionada; referências: MDN, web.dev, OWASP, PortSwigger.

**Leva 5 (Estado e concorrência) concluída.** Categoria "Estado & Concorrência". Termos: Concurrent rendering, Reconciliation algorithm, Virtual DOM, Fiber architecture, Stale closure, Memoization pitfalls, Race conditions in UI state, Optimistic UI rollback. Referências: React, DEV, Stack Overflow, TanStack Query, Code With Seb, jser.dev.

**Leva 6 (Cache e rede) concluída.** Categoria "Cache & Rede". Termos: Service Worker lifecycle, Cache invalidation strategies, Stale-while-revalidate, Preload vs Prefetch vs Preconnect, ETag vs Cache-Control, AbortController. Referências: web.dev, MDN, RFC 9111.

**Leva 7 (Observers e memória) concluída.** Categoria "Observers & Memória". Termos: IntersectionObserver, ResizeObserver loop limit, MutationObserver cost, Detached DOM nodes, Browser memory leak detection, IndexedDB. Referências: MDN, Chrome DevTools, Microsoft Edge, DebugBear, web.dev, Google.

**Leva 8 (Workers e APIs) concluída.** Categoria "Workers & APIs". Termos: Web Workers vs Service Workers, Shadow DOM, Custom Elements lifecycle, Module federation, WebAssembly integration. Referências: web.dev, MDN, Stack Overflow, Webpack, module-federation.io, WebAssembly.org.

Próxima = **Leva 9 (restante)** conforme demanda: Event loop, Scheduler, Suspense, CRDT, a11y tree, ARIA, etc.
