# Plano de melhorias UI/UX — Mobile, Tablet e Laptop

Análise do estado atual e plano priorizado por viewport.

---

## 1. Estado atual por viewport

### Breakpoints atuais

| Hook                | Breakpoint                                                  | Uso                                         |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| `useBreakpoints`    | isSmallMobile: ≤480px, isMobile: ≤768px, isDesktop: ≥1024px | Maioria dos componentes                     |
| `useMobileDetector` | isTablet: 768–1024px                                        | App.tsx (loader), Suspense                  |
| **Gap**             | 768–1024px                                                  | Nem mobile nem desktop; sem layout dedicado |

### Comportamento por viewport

| Viewport              | Header                          | Navegação                           | Prev/Next                      | Conteúdo             |
| --------------------- | ------------------------------- | ----------------------------------- | ------------------------------ | -------------------- |
| **Mobile** (≤768)     | Burger + logo, tema, sem GitHub | Drawer, bottom nav (Início + Busca) | Setas 22×52px, padding 20px    | Full width, scroll   |
| **Tablet** (768–1024) | Mesmo que mobile                | Drawer, bottom nav                  | Setas 44×44px (isMobile=false) | Mesmo                |
| **Laptop** (≥1024)    | Burger + logo, tema, GitHub     | Drawer                              | Setas 44×44px                  | Padding 64px lateral |

**Problema:** Laptop usa drawer como mobile — não há sidebar fixa. Comentário no DocsShell menciona "burger quando < 1100px" mas o código não usa 1100px.

---

## 2. Análise por viewport

### 2.1 Mobile (≤768px)

| Aspecto              | Estado                      | Problema / oportunidade                               |
| -------------------- | --------------------------- | ----------------------------------------------------- |
| **Touch targets**    | Prev/next 22×52px           | Altura ok (≥44px), largura 22px pode ser apertada     |
| **Bottom nav**       | Início + Busca              | Ok; simplificado (Stripe-style)                       |
| **Drawer**           | Menu completo               | Bom; fecha ao navegar                                 |
| **Hero**             | minHeight 420, padding 3rem | Pode ser mais compacto em small mobile                |
| **Cards Home**       | SimpleGrid 1 col            | Ok                                                    |
| **Code blocks**      | CodeExample expandido, copy | Ok; horizontal scroll em trechos longos               |
| **Breadcrumb**       | Visível                     | Ok                                                    |
| **Reading progress** | Barra no topo               | Ok                                                    |
| **Neural network**   | 60 nós                      | Pode pesar em devices fracos                          |
| **Fadiga de scroll** | Home longa                  | Muitas seções; redundância (Bora começar ≈ Destaques) |

### 2.2 Tablet (768–1024px)

| Aspecto       | Estado                    | Problema / oportunidade                          |
| ------------- | ------------------------- | ------------------------------------------------ |
| **Layout**    | Igual a mobile            | Sem uso do espaço horizontal                     |
| **Menu**      | Drawer                    | Poderia ter sidebar colapsável                   |
| **Conteúdo**  | Full width                | Largura de leitura ideal (~65ch) não aproveitada |
| **Prev/Next** | 44×44                     | Ok                                               |
| **Cards**     | 2–3 colunas em SimpleGrid | Depende do bloco; inconsistente                  |

### 2.3 Laptop / Desktop (≥1024px)

| Aspecto                | Estado               | Problema / oportunidade                          |
| ---------------------- | -------------------- | ------------------------------------------------ |
| **Navegação**          | Drawer (burger)      | Perde padrão docs: sidebar fixa com TOC/jornada  |
| **Largura de leitura** | Sem max-width no doc | Texto pode ficar muito largo (ruim para leitura) |
| **Prev/Next**          | Fixas nas laterais   | Ok; mas competem com scrollbar                   |
| **Conteúdo central**   | Padding 64px (setas) | Sem constrain de linha (ex.: 720px)              |
| **GitHub**             | Visível              | Ok                                               |
| **Spotlight**          | Cmd+K                | Ok                                               |

---

## 3. Plano de ação priorizado

### Fase 1: Quick wins (1 sprint)

| #   | Ação                                                        | Viewport | Impacto             | Esforço |
| --- | ----------------------------------------------------------- | -------- | ------------------- | ------- |
| 1   | **Constrain doc content width** (ex.: 720px, 65ch)          | Laptop   | Leitura confortável | Baixo   |
| 2   | **Skip link** ("Pular para conteúdo")                       | Todos    | A11y                | Baixo   |
| 3   | **Aumentar touch target prev/next** em mobile (min 44×44)   | Mobile   | Touch mais fácil    | Baixo   |
| 4   | **Unificar breakpoints** — expor isTablet em useBreakpoints | Todos    | Consistência        | Baixo   |
| 5   | **Home mais enxuta** — consolidar seções redundantes        | Mobile   | Menos scroll        | Médio   |

### Fase 2: Navegação e descoberta (2 sprints)

| #   | Ação                                                       | Viewport       | Impacto                   | Esforço |
| --- | ---------------------------------------------------------- | -------------- | ------------------------- | ------- |
| 6   | **TOC em páginas longas** (scroll spy, sidebar em desktop) | Laptop, Tablet | Navegação no doc          | Alto    |
| 7   | **Sidebar fixa em desktop** (≥1100px) com jornada + TOC    | Laptop         | Padrão docs (Stripe, MDN) | Alto    |
| 8   | **Drawer apenas para mobile/tablet** (< 1100px)            | Mobile, Tablet | Consistência              | Médio   |
| 9   | **Layout tablet** — 2 colunas: conteúdo + TOC/mini-nav     | Tablet         | Uso do espaço             | Médio   |

### Fase 3: Polish e performance (1–2 sprints)

| #   | Ação                                                                                | Viewport | Impacto               | Esforço |
| --- | ----------------------------------------------------------------------------------- | -------- | --------------------- | ------- |
| 10  | **Reduzir/pausar NeuralNetwork em mobile** (prefer-reduced-motion ou conexão lenta) | Mobile   | Performance, bateria  | Médio   |
| 11  | **Lazy load abaixo da dobra** em páginas longas                                     | Todos    | Performance           | Médio   |
| 12  | **Sticky header menor** em scroll (logo compacto)                                   | Todos    | Mais área de conteúdo | Baixo   |
| 13  | **Padronizar max-width** em Cards, Papers do conteúdo                               | Todos    | Visual consistente    | Baixo   |

### Fase 4: Conteúdo e descoberta (já no ANALISE-UI-UX)

| #   | Ação                       | Fonte                              |
| --- | -------------------------- | ---------------------------------- |
| 14  | Glossário                  | ANALISE-UI-UX-PLAYBOOK-COMPARATIVO |
| 15  | Busca full-text            | Idem                               |
| 16  | "Próximo passo" contextual | Idem                               |

---

## 4. Detalhamento das ações prioritárias

### 4.1 Constrain doc content width (Laptop)

**Problema:** Texto largo (> 800px) cansa a leitura.

**Solução:** `max-width: 720px` ou `65ch` no container do conteúdo principal (`[data-doc-content]`). Manter centralizado.

**Onde:** `PrevNextArrows` (Box interno) ou `index.css` para `[data-doc-content]`.

### 4.2 Skip link

**Problema:** Leitores de tela e navegação por teclado passam por header, progress, breadcrumb antes do conteúdo.

**Solução:** `<a href="#main-content" class="skip-link">Pular para o conteúdo</a>` — visível no focus, posicionado no topo. O main content tem `id="main-content"`.

### 4.3 Touch target prev/next (Mobile)

**Problema:** Setas 22×52px — largura 22px é menor que 44px recomendado.

**Solução:** Em mobile, usar `minWidth: 44, minHeight: 44` mantendo proporção ou ícone maior. O padding lateral de 20px já evita sobreposição.

### 4.4 Unificar breakpoints

**Problema:** `useBreakpoints` (480, 768, 1024) e `useMobileDetector` (768, 1024, isTablet) — valores e nomes diferentes.

**Solução:** Adicionar `isTablet` em useBreakpoints: `useMediaQuery('(min-width: 769px) and (max-width: 1023px)')`. Migrar App.tsx para usar useBreakpoints em vez de useMobileDetector para isMobile.

### 4.5 Home mais enxuta

**Problema:** "Bora começar" (3 cards) + "O que tem pra você" (6 cards) + "Destaques" (2 cards) + "Por que isso te ajuda" (2 cards) — redundância e muito scroll.

**Solução:** Consolidar em: Hero + 3 cards de jornada + Casos (destaque) + CTA final. Remover ou fundir "O que tem" e "Por que isso te ajuda".

### 4.6 TOC em páginas longas

**Problema:** Docs longos (ex.: architecture-comparison, migration-strategies) sem índice navegável.

**Solução:** Extrair headings (h2, h3) do conteúdo; renderizar lista à direita em desktop, collapsible no topo em mobile. Scroll spy para highlight do item atual. Ver `ANALISE-UI-UX-PLAYBOOK-COMPARATIVO` Fase 1.

### 4.7 Sidebar fixa em desktop

**Problema:** Toda navegação via drawer — diferente de Stripe, MDN, Linear.

**Solução:** Em `≥1100px`, mostrar sidebar fixa à esquerda com seções da jornada (NAV_JOURNEY). Burger e drawer só em < 1100px. Conteúdo principal com margin-left para a sidebar.

---

## 5. Resumo executivo

| Prioridade | Foco                    | Principais ações                                |
| ---------- | ----------------------- | ----------------------------------------------- |
| **P0**     | Leitura + a11y + mobile | Constrain width, skip link, touch targets       |
| **P1**     | Navegação               | TOC, sidebar desktop, unificar breakpoints      |
| **P2**     | Performance + polish    | Neural network em mobile, Home enxuta           |
| **P3**     | Conteúdo                | Glossário, busca, próximo passo (ver outro doc) |

**Gap principal:** Desktop não tem sidebar fixa; conteúdo sem max-width; tablet sem layout dedicado. Mobile está razoável; melhorias em touch e home.

---

## 6. Referências

- `ANALISE-UI-UX-PLAYBOOK-COMPARATIVO.md` — plano geral vs referências
- `PLAYBOOK-UX-VALOR-DEV.md` — valor ao dev, glossário
- `useBreakpoints.ts` — breakpoints atuais
- [WCAG 2.2 — Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size.html) — mínimo 24×24px, recomendado 44×44
- [Optimal line length](https://practicaltypography.com/line-length.html) — 45–75 caracteres por linha
