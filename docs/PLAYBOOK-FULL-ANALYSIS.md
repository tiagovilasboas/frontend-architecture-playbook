# Frontend Architecture Playbook — Full Analysis

## 1. Structure & Navigation

### Routes and pages

- **Router:** Single catch-all doc route `/:collection/:slug` (`App.tsx`). Collections: `guides`, `architectures`, `patterns`, `techniques`, `best-practices`.
- **Pages:** Only two page components: `src/pages/Home.tsx` (/) and `src/pages/DocPage.tsx` (all doc URLs). No per-topic page files.
- **Content registry:** `src/lib/content.tsx` defines all docs: lazy-loaded TSX components or `ContentDrivenPage` for JSON-backed guides. `getDoc(collection, slug)` resolves component; `src/lib/content-data.ts` loads JSON from `src/data/content/**/*.json` via Vite glob; `DocPage` uses `getDocContent()` first, then falls back to `getDoc()` (legacy TSX).

### Navigation

- **Journey (main nav):** `src/lib/navigation.ts` — `NAV_JOURNEY`: 7 sections in fixed order — Por onde começar → Fundamentos → Construindo UI → Arquitetura de Entrega → Estrutura de Código → Escala & Times → Decisão & Referência. Used by `MobileNavMenu` (drawer) and `PrevNextArrows` / `getBreadcrumbsForPath`.
- **Prev/Next:** `getPrevNext(pathname)` returns previous/next item in the flat list of all journey items; arrows are in `DocsShell` (fixed left/right). Home (/) has only "next" = first journey item.
- **Guide sidebar:** `GuideNavigation` shows "Todos os Guias" for pages that set `layout.showGuideNav` (e.g. `study-guide`, `adr`). Order comes from `GUIDE_NAV_SLUGS` in `content.tsx` (subset of guides; staff-\* guides are not in this list).

### User journeys (how a dev moves)

- **Home → start:** Hero CTA to Dependency Rule, "Encontre sua Arquitetura" (how-to-choose), Comparação; "Bora começar" cards: 1) Dependency Rule, 2) Decision Wizard, 3) Comparação; "Destaques" link to Cases and Architecture Comparison; final CTA to wizard.
- **Study guide:** `/guides/study-guide` (JSON) — single entry in "Por onde começar"; rich cards per level (Júnior, Pleno, Sênior, Staff) with links to guides/architectures/patterns and "Próximo nível".
- **Fundamentals:** Nav section "Fundamentos" — dependency-rule, DRY/KISS/YAGNI/SRP/SOC/clean-code, how-to-choose, staff-fundamentals.
- **Building UI:** SPA, component-driven, atomic-design, state-machines, event-driven, staff-ui.
- **Delivery:** SSR/SSG, JAMstack, PWA, islands, performance, staff-entrega.
- **Structure:** Clean, layered, hexagonal, repository-pattern, security, staff-estrutura.
- **Scale:** Monorepo, micro-frontends, microservices-frontend, BFF, headless, feature-flags, CQRS, event-sourcing, staff-escala.
- **Decision:** Staff hub, architecture-comparison, implementation-roadmap, migration-strategies, adr, cases, security-business, mcp.
- **Cross-linking:** Home hardcodes a few links; journey menu and GuideNavigation (when shown) provide the main paths. No contextual "next step" blocks inside legacy TSX pages beyond RelatedContent (next/prev in same collection).

---

## 2. Content Types & Delivery

### Content-driven (JSON + ContentRenderer)

- **Source:** `src/data/content/guides/*.json` (10 files). Loaded by `content-data.ts` (`getDocContent`); rendered by `ContentDrivenPage` → `ContentRenderer`.
- **Guides using JSON:** migration-strategies, adr, mcp, security-business, study-guide, staff-fundamentals, staff-ui, staff-entrega, staff-estrutura, staff-escala. In `content.tsx` these are registered with `ContentDrivenPage` (no lazy TSX).

### Legacy (TSX)

- **Guides (TSX):** how-to-choose, dependency-rule, cases, architecture-comparison, implementation-roadmap, staff (hub).
- **All architectures, patterns, techniques, best-practices:** TSX only (e.g. `src/content/patterns/clean-architecture.tsx`, `src/content/guides/dependency-rule.tsx`). Rendered by `DocPage` when `getDocContent()` is null.

### ContentRenderer block types (content-schema.ts + ContentRenderer.tsx)

- **Structure:** `hero` (title, subtitle, icon), `section` (title, icon, children), `title`, `text`, `stack`.
- **Lists & tables:** `list` (items string or {title, description}, ordered, icon), `table` (headers, rows; cell `code:...` for inline code), `badges`.
- **Code:** `code`, `codeExample` (title, description, code, defaultExpanded — uses `CodeExample` component).
- **Alerts & callouts:** `alert` (message, color, icon), `callout` (title, content, dimmed).
- **Cards:** `linkCards` (to, title, description, icon), `iconCards` (icon, title, description or items), `richCardGrid` (richCard: icon, title, subtitle, bodyText, links, nextLevel).
- **Links:** `linkList`, `anchor` (to or href).
- **Pattern in JSON guides:** hero → sections with text/alert/list/iconCards/code/codeExample/linkList/linkCards; study-guide and staff JSON rely on richCardGrid + linkList for level/segment links.

### DocPage behavior

- If `getDocContent(collection, slug)` returns a page: render `ContentRenderer`, optional `GuideNavigation` (from `layout.showGuideNav`), `ReadingTime`, `RelatedContent` (unless `showRelated === false`).
- Else: render legacy `doc.component` with `CodeHighlight` for `pre`, plus `RelatedContent`.

---

## 3. Value to the Developer

### What / When / How

- **What:** Concepts are in copy (e.g. dependency rule = "camada de fora pode usar a de dentro; de dentro nunca usa a de dentro"; ADR = "documento curto que captura decisão + contexto + alternativas + consequências"). JSON guides often have a "O que é" section (e.g. adr.json). Legacy TSX (e.g. dependency-rule.tsx) uses Title + Text + Alert + Cards.
- **When:** ADR JSON has explicit "Quando usar" / "Quando NÃO usar" in iconCards. Study guide and staff JSON imply "when" by level/role. Legacy pages (e.g. architecture-comparison, how-to-choose) embed "when" in narrative and wizards.
- **How:** Code examples in TSX (CodeHighlight/CodeExample) and in JSON (`code` / `codeExample`). Migration strategies, ADR template, MCP setup, etc. in JSON. Implementation roadmap and cases in TSX.

### How the dev finds content

- **Menu (journey):** Desktop header and mobile drawer from `NAV_JOURNEY` — section labels and direct links. Primary way to move between sections.
- **Study guide by level:** `/guides/study-guide` — single page with level cards (Júnior → Staff) and ordered links; "Próximo nível" hints.
- **Search:** Mantine Spotlight (Cmd/Ctrl+K), `useNavigationActions` — lists all docs from guides, architectures, patterns, techniques, best-practices (title + collection label). No full-text in content; search is by doc title only.
- **MCP:** `mcp-server` reads from `mcp-server/data/content/guides/` (and playbook.json, cases); exposes resources/tools so Cursor can use playbook content.
- **Related content:** `RelatedContent` at bottom of doc: for guides next/prev in list; for architectures/patterns a few from same collection. No semantic "conceitos relacionados" or glossary yet.
- **GuideNavigation:** On JSON guides with `showGuideNav`, shows "Guia X de N", prev/next buttons, and "Todos os Guias" (GUIDE_NAV_SLUGS). Staff sub-guides are not in GUIDE_NAV_SLUGS.

---

## 4. Gaps or Friction

- **Inconsistent patterns:** Large legacy TSX guides vs short, structured JSON guides. Same route shape but different authoring (TSX vs JSON) and no shared "conceitos" block.
- **GuideNavigation vs journey:** "Todos os Guias" is a fixed subset; staff-_ guides are not in it. So on a staff-_ page the sidebar can show a different guide list than the journey section.
- **Missing cross-links:** Legacy pages rarely link to "next step" or "conceitos usados". RelatedContent is generic (next/prev or same collection). No in-content "Ver Glossário" or "Ver ADR" links.
- **Unclear next steps:** After reading e.g. dependency-rule, the only next step is journey arrows or manual menu. Study guide gives level-based paths; other guides don't suggest a clear "faça isso em seguida".
- **Glossary / conceitos:** Proposed in `docs/PROPOSTA-GLOSSARIO-CONCEITOS.md`; not implemented (no glossary route, no conceitos block, no nav link).
- **Search:** Spotlight only matches doc titles; no search over body text or concepts.
- **Mobile:** Search is global Spotlight (mod+K); burger drawer has full nav.

---

## 5. File and Route Examples

| Item                       | Path or route                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Home                       | `/` — `src/pages/Home.tsx`                                                                                       |
| Any doc                    | `/:collection/:slug` — `src/pages/DocPage.tsx`                                                                   |
| Journey config             | `src/lib/navigation.ts` (NAV_JOURNEY, getPrevNext, getBreadcrumbsForPath)                                        |
| Content registry           | `src/lib/content.tsx` (guides, architectures, patterns, techniques, best-practices, getDoc, GUIDE_NAV_SLUGS)     |
| JSON content loader        | `src/lib/content-data.ts` (getDocContent, getContentDrivenSlugs)                                                 |
| Content schema             | `src/lib/content-schema.ts`                                                                                      |
| Content-driven UI          | `src/components/ContentDrivenPage.tsx`, `src/components/ContentRenderer.tsx`                                     |
| JSON guides                | `src/data/content/guides/*.json`                                                                                 |
| Legacy guide examples      | `src/content/guides/dependency-rule.tsx`, `src/content/guides/how-to-choose.tsx`, `src/content/guides/cases.tsx` |
| Search                     | `src/hooks/useNavigationActions.ts`; `DocsShell` uses Spotlight                                                  |
| Glossary proposal          | `docs/PROPOSTA-GLOSSARIO-CONCEITOS.md`                                                                           |
| Glossary data (Leva 1)     | `src/data/glossary/terms.json` — termos SSR/hidratação; página do glossário ainda não implementada               |
| Glossary plan (baby steps) | `docs/GLOSSARIO-BABY-STEPS-PLAN.md`                                                                              |
| Playbook UX / valor ao dev | `docs/PLAYBOOK-UX-VALOR-DEV.md`                                                                                  |
