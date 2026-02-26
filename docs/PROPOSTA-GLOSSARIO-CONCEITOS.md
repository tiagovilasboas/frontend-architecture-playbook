# Proposta: termos técnicos de front-end no playbook

Os termos abaixo fazem sentido no playbook como **referência** e **aprofundamento**. Duas formas de incluir:

1. **Glossário** – uma página única (ex.: **Conceitos de referência**) em **Decisão & Referência**, com definições curtas e links para os guias que aprofundam.
2. **Enriquecer guias existentes** – adicionar seções ou parágrafos nos guias atuais (SSR & SSG, Performance, Security, PWA, etc.) para os termos que já se encaixam no tema.

Sugestão: **fazer as duas coisas**: criar o **Glossário** e, aos poucos, **expandir os guias** com os termos marcados abaixo.

---

## Onde ficaria o Glossário

- **Seção:** **Decisão & Referência** (junto com ADR, Casos, Comparação, Roadmap, MCP).
- **Rota sugerida:** `/guides/glossary` ou `/guides/conceitos`.
- **Conteúdo:** lista de termos (A–Z ou por categoria), cada um com:
  - definição em 1–3 frases;
  - link para o guia relacionado quando existir (ex.: "Hydration" → SSR & SSG).
- **No menu:** novo item "Glossário" ou "Conceitos de referência" em Decisão & Referência.

Assim o playbook ganha um lugar fixo para **conceitos** sem virar documentação de framework; os guias continuam sendo o lugar do “como” e “quando”.

---

## Mapeamento: termo → onde encaixa

### 1. SSR, hidratação, streaming, islands (Arquitetura de Entrega)

| Termo                | Onde encaixa                    | Ação sugerida                                                        |
| -------------------- | ------------------------------- | -------------------------------------------------------------------- |
| Hydration            | SSR & SSG                       | Enriquecer guia + verbete no Glossário                               |
| Partial hydration    | SSR & SSG, Islands Architecture | Enriquecer ambos + Glossário                                         |
| Islands architecture | Islands Architecture            | Já existe página; acrescentar Partial hydration, Selective hydration |
| Streaming SSR        | SSR & SSG                       | Enriquecer guia + Glossário                                          |
| Selective hydration  | SSR & SSG, Islands              | Enriquecer + Glossário                                               |
| Server components    | SSR & SSG                       | Enriquecer + Glossário                                               |
| Edge rendering       | SSR & SSG ou JAMstack           | Enriquecer + Glossário                                               |

**Guia principal:** [SSR & SSG](/architectures/ssr-ssg), [Islands Architecture](/architectures/islands-architecture).

---

### 2. Rendering, React, concorrência (Construindo UI / referência)

| Termo                          | Onde encaixa                                | Ação sugerida                |
| ------------------------------ | ------------------------------------------- | ---------------------------- |
| Concurrent rendering           | Glossário; opcional futuro guia "Rendering" | Glossário + link para estudo |
| Time slicing                   | Glossário                                   | Glossário                    |
| Reconciliation algorithm       | Glossário                                   | Glossário                    |
| Fiber architecture             | Glossário                                   | Glossário                    |
| Virtual DOM diffing complexity | Glossário                                   | Glossário                    |
| Scheduler priorities           | Glossário                                   | Glossário                    |
| Render waterfalls              | Performance, Glossário                      | Performance + Glossário      |
| Suspense boundaries            | SSR & SSG, Glossário                        | Enriquecer SSR + Glossário   |
| Tearing in concurrent UI       | Glossário                                   | Glossário                    |
| Deterministic rendering        | Glossário                                   | Glossário                    |

**Guia principal:** Performance (render waterfalls); SSR & SSG (Suspense). O resto como **conceitos de referência** no Glossário até haver um guia dedicado a “Rendering”.

---

### 3. Estado, imutabilidade, memoização (Fundamentos / Construindo UI)

| Termo                           | Onde encaixa                  | Ação sugerida                         |
| ------------------------------- | ----------------------------- | ------------------------------------- |
| Structural sharing              | Glossário; Clean Code / State | Glossário                             |
| Immutable data patterns         | Clean Code, Glossário         | Enriquecer Clean Code + Glossário     |
| Referential equality            | Glossário                     | Glossário                             |
| Memoization pitfalls            | Performance, Glossário        | Performance ou Clean Code + Glossário |
| Stale closure problem           | Glossário                     | Glossário                             |
| Race conditions in UI state     | State Machines, Event-driven  | Enriquecer + Glossário                |
| Optimistic UI rollback strategy | State Machines, Glossário     | Enriquecer + Glossário                |
| Offline conflict resolution     | PWA, Glossário                | PWA + Glossário                       |
| CRDT basics for collaboration   | Event Sourcing ou Glossário   | Glossário (ou link Event Sourcing)    |
| Idempotent UI actions           | Glossário, Clean Code         | Glossário                             |

**Guias principais:** [State Machines](/techniques/state-machines), [Clean Code](/best-practices/clean-code), [PWA](/architectures/pwa), [Event Sourcing](/architectures/event-sourcing).

---

### 4. Event loop, tarefas, rendering path (Performance / Entrega)

| Termo                            | Onde encaixa           | Ação sugerida                            |
| -------------------------------- | ---------------------- | ---------------------------------------- |
| Event loop (macro vs microtasks) | Performance, Glossário | Enriquecer Performance + Glossário       |
| Task starvation                  | Performance, Glossário | Glossário                                |
| Layout thrashing                 | Performance            | Enriquecer Performance                   |
| Critical rendering path          | Performance            | Enriquecer Performance                   |
| Render blocking resources        | Performance            | Já próximo do tema; reforçar + Glossário |

**Guia principal:** [Performance](/techniques/performance).

---

### 5. Bundle, code splitting, módulos (Entrega / Performance)

| Termo                     | Onde encaixa               | Ação sugerida                               |
| ------------------------- | -------------------------- | ------------------------------------------- |
| Tree shaking internals    | Performance, Glossário     | Enriquecer Performance + Glossário          |
| Code splitting strategies | Performance                | Já existe; detalhar estratégias + Glossário |
| Dynamic import chunking   | Performance                | Enriquecer Performance                      |
| Module federation         | Micro-frontends, Glossário | Enriquecer Micro-frontends + Glossário      |

**Guias principais:** [Performance](/techniques/performance), [Micro-frontends](/architectures/micro-frontends).

---

### 6. Web APIs, Workers, WebAssembly (referência / PWA)

| Termo                             | Onde encaixa                       | Ação sugerida                   |
| --------------------------------- | ---------------------------------- | ------------------------------- |
| Shadow DOM                        | Glossário; opcional Web Components | Glossário                       |
| Custom Elements lifecycle         | Glossário                          | Glossário                       |
| Web Components interoperability   | Glossário                          | Glossário                       |
| Web Workers vs Service Workers    | PWA, Glossário                     | Enriquecer PWA + Glossário      |
| SharedArrayBuffer                 | Glossário                          | Glossário                       |
| Transferable objects              | Glossário                          | Glossário                       |
| OffscreenCanvas                   | Glossário                          | Glossário                       |
| WebAssembly integration           | Glossário                          | Glossário                       |
| Backpressure in streams API       | Glossário                          | Glossário                       |
| AbortController                   | Performance, Glossário             | Performance (fetch) + Glossário |
| Streaming fetch response handling | Performance, Glossário             | Glossário                       |

**Guia principal:** [PWA](/architectures/pwa) (Workers, Service Worker). Resto como **Glossário** até haver página “APIs do browser”.

---

### 7. Compositing, paint, layout, CSS (Performance)

| Termo                        | Onde encaixa | Ação sugerida          |
| ---------------------------- | ------------ | ---------------------- |
| Browser compositing layers   | Performance  | Enriquecer Performance |
| Paint vs composite vs layout | Performance  | Enriquecer Performance |
| GPU acceleration in CSS      | Performance  | Enriquecer Performance |
| CSS containment              | Performance  | Enriquecer Performance |
| Subpixel rendering           | Glossário    | Glossário              |

**Guia principal:** [Performance](/techniques/performance).

---

### 8. Observers e métricas (Performance)

| Termo                           | Onde encaixa           | Ação sugerida          |
| ------------------------------- | ---------------------- | ---------------------- |
| IntersectionObserver internals  | Performance            | Enriquecer Performance |
| ResizeObserver loop limits      | Performance, Glossário | Glossário              |
| MutationObserver cost           | Performance, Glossário | Glossário              |
| PerformanceObserver API         | Performance            | Enriquecer Performance |
| Long tasks API                  | Performance            | Enriquecer Performance |
| First Input Delay (FID)         | Performance            | Enriquecer Performance |
| Interaction to Next Paint (INP) | Performance            | Enriquecer Performance |
| Cumulative Layout Shift (CLS)   | Performance            | Enriquecer Performance |
| Largest Contentful Paint (LCP)  | Performance            | Enriquecer Performance |
| Speculative prerendering        | Performance, Glossário | Glossário              |

**Guia principal:** [Performance](/techniques/performance).

---

### 9. Memória e vazamentos (Performance)

| Termo                         | Onde encaixa           | Ação sugerida          |
| ----------------------------- | ---------------------- | ---------------------- |
| Browser memory leak detection | Performance            | Enriquecer Performance |
| Detached DOM nodes            | Performance            | Enriquecer Performance |
| Garbage collection timing     | Performance, Glossário | Glossário              |

**Guia principal:** [Performance](/techniques/performance).

---

### 10. Cache e rede (PWA / Performance)

| Termo                             | Onde encaixa           | Ação sugerida              |
| --------------------------------- | ---------------------- | -------------------------- |
| IndexedDB                         | PWA, Glossário         | Enriquecer PWA + Glossário |
| Service Worker lifecycle traps    | PWA                    | Enriquecer PWA             |
| Cache invalidation strategies     | PWA, Performance       | Enriquecer PWA             |
| Stale-while-revalidate            | PWA, Performance       | Enriquecer PWA + Glossário |
| ETag vs Cache-Control             | Performance, Glossário | Glossário                  |
| HTTP/3 and QUIC                   | Glossário              | Glossário                  |
| Priority hints                    | Performance            | Enriquecer Performance     |
| Preload vs Prefetch vs Preconnect | Performance            | Enriquecer Performance     |

**Guias principais:** [PWA](/architectures/pwa), [Performance](/techniques/performance).

---

### 11. Segurança (Estrutura)

| Termo                         | Onde encaixa                 | Ação sugerida       |
| ----------------------------- | ---------------------------- | ------------------- |
| CORS preflight                | Security Patterns            | Enriquecer Security |
| SameSite cookie modes         | Security Patterns            | Enriquecer Security |
| CSRF vs XSS mitigation        | Security Patterns            | Enriquecer Security |
| Content Security Policy (CSP) | Security Patterns            | Enriquecer Security |
| Trusted Types                 | Security Patterns            | Enriquecer Security |
| DOM clobbering                | Security Patterns, Glossário | Glossário           |
| Prototype pollution           | Security Patterns, Glossário | Glossário           |

**Guia principal:** [Security Patterns](/patterns/security).

---

### 12. Concorrência e prioridade (Performance / Glossário)

| Termo                            | Onde encaixa           | Ação sugerida |
| -------------------------------- | ---------------------- | ------------- |
| Priority inversion in async code | Performance, Glossário | Glossário     |

---

### 13. Acessibilidade (Construindo UI / referência)

| Termo                       | Onde encaixa           | Ação sugerida |
| --------------------------- | ---------------------- | ------------- |
| Accessibility tree          | Glossário; futuro A11y | Glossário     |
| ARIA live regions internals | Glossário              | Glossário     |
| Pointer events              | Glossário              | Glossário     |

**Sugestão:** Glossário agora; se surgir guia “Acessibilidade” em Construindo UI, migrar para lá.

---

### 14. Arquitetura e colaboração (Escala / Decisão)

| Termo                        | Onde encaixa    | Ação sugerida                       |
| ---------------------------- | --------------- | ----------------------------------- |
| Micro-frontend orchestration | Micro-frontends | Enriquecer Micro-frontends          |
| Finite state modeling        | State Machines  | Enriquecer State Machines           |
| Event sourcing in frontend   | Event Sourcing  | Já existe; citar termos + Glossário |
| WebRTC                       | Glossário       | Glossário                           |

**Guias principais:** [Micro-frontends](/architectures/micro-frontends), [State Machines](/techniques/state-machines), [Event Sourcing](/architectures/event-sourcing).

---

## Resumo da proposta

| Ação                                      | Onde                                                                                                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nova página Glossário**                 | Decisão & Referência → "Glossário" ou "Conceitos de referência" (`/guides/glossary`)                                                          |
| **Enriquecer guias**                      | SSR & SSG, Performance, PWA, Security Patterns, State Machines, Micro-frontends, Islands, Clean Code, Event Sourcing (conforme tabelas acima) |
| **Manter só no Glossário (por enquanto)** | Conceitos de runtime (Fiber, reconciliation, etc.), Web APIs avançadas, a11y, HTTP/3, DOM clobbering, etc.                                    |

Ordem sugerida de implementação:

1. **Criar a página Glossário** em Decisão & Referência (content-as-data, JSON) com os termos agrupados por tema (SSR, Performance, Security, Estado, etc.) e, quando existir, link para o guia.
2. **Preencher o Glossário** em levas: primeiro os termos que já têm guia (Hydration → SSR; LCP/FID/INP/CLS → Performance; CSP/XSS → Security; etc.).
3. **Enriquecer guias** aos poucos: adicionar em cada guia uma subseção “Conceitos” ou “Termos” com os itens da tabela, e link “Ver no Glossário” onde fizer sentido.

Se quiser, o próximo passo pode ser: (1) definir o schema do Glossário (por exemplo um JSON por letra ou por categoria) e (2) esboçar o conteúdo da primeira leva de termos (ex.: só os que têm guia hoje).
