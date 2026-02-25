# Layout atual e como a análise foi feita

## 1. Como ficou o layout

### Hierarquia visual (de fora pra dentro)

```
App
└── DocsShell
    ├── NeuralNetworkCanvas (fundo, seed = pathname)
    ├── ReadingProgress (barra de progresso de leitura)
    ├── Spotlight (Cmd+K, busca)
    ├── Drawer (menu mobile, burger)
    ├── Box (conteúdo principal)
    │   ├── HeaderBar (logo, burger, busca)
    │   ├── PrevNextArrows (setas anterior/próximo)
    │   │   ├── AppBreadcrumbs
    │   │   └── children  ← aqui entra a página
    │   ├── Footer
    │   └── BackToTop
```

- **Rota** `/:collection/:slug` (ex.: `/guides/staff-fundamentals`) renderiza **DocPage** como `children` dentro de `PrevNextArrows` → `AppBreadcrumbs` + conteúdo.

### O que a DocPage renderiza (por tipo de página)

**Páginas content-driven (JSON):** existe `getDocContent(collection, slug)`.

```
DocPage
├── Group (ReadingTime, direita)
├── TypographyStylesProvider
│   └── ContentRenderer(page)
│       ├── body[0], body[1], ... (hero, section, list, linkCards, etc.)
│       └── after
│           └── GuideNavigation (se layout.showGuideNav)
└── RelatedContent (se layout.showRelated !== false)
```

**Páginas legado (componente React):** não existe JSON; usa `getDoc(collection, slug).component`.

```
DocPage
├── Group (ReadingTime)
├── TypographyStylesProvider
│   └── <Component />  (ex.: DependencyRule, Staff, PWA, …)
└── RelatedContent
```

Ou seja: o **layout de shell** (header, breadcrumb, setas, footer, progress) é o mesmo; só o **bloco central** muda: ou `ContentRenderer(page)` ou `<Component />`.

### Resumo do fluxo de dados

| Fonte                         | Onde vive                                        | Quem usa                                     |
| ----------------------------- | ------------------------------------------------ | -------------------------------------------- |
| Navegação                     | `src/lib/navigation.ts` (NAV_JOURNEY)            | Header, MobileNavMenu, PrevNext, Breadcrumbs |
| Conteúdo JSON                 | `src/data/content/{collection}/{slug}.json`      | DocPage → ContentRenderer, (futuro MCP)      |
| Metadados + componente legado | `src/lib/content.tsx` (guides, architectures, …) | DocPage, RelatedContent, busca (Spotlight)   |

---

## 2. Como a análise foi feita

Para entender o layout e o conteúdo, a análise seguiu estes passos (e você pode replicar no repo):

1. **Roteamento e shell**
   - Ler `App.tsx`: rotas e quem envolve (`DocsShell`, `DocPage`).
   - Ler `DocsShell.tsx`: ordem dos elementos (fundo, header, breadcrumb, children, footer).

2. **Quem renderiza o quê**
   - Em `DocPage.tsx`: ver a ordem das decisões (`getDocContent` → content-driven; senão `getDoc` → legado) e o que é renderizado em cada ramo (ContentRenderer + after vs Component).

3. **Conteúdo content-driven**
   - `src/lib/content-schema.ts`: tipos dos blocos (hero, section, list, linkCards, …).
   - `src/lib/content-data.ts`: como o JSON é carregado (glob) e como se obtém uma página por `(collection, slug)`.
   - `src/components/ContentRenderer.tsx`: mapeamento tipo de bloco → componente Mantine (Paper, Card, List, etc.).

4. **Registro de páginas**
   - `src/lib/content.tsx`: listas `guides`, `architectures`, `patterns`, etc.; quais slugs usam `ContentDrivenPage` (content-driven) e quais usam componente lazy (legado).

5. **Navegação e metadados**
   - `navigation.ts`: seções e itens (href, label) para menu e prev/next.
   - `content.tsx` (STATIC_METADATA, getDoc): títulos e descrições para SEO, RelatedContent e busca.

Com isso dá para:

- **Explicar o layout:** hierarquia App → DocsShell → DocPage e o que cada tipo de página (JSON vs componente) renderiza.
- **Analisar impacto:** mudar shell em DocsShell; mudar “tudo que é documento” em DocPage + ContentRenderer; mudar uma página só em JSON ou no componente correspondente.

---

## 3. Diagrama rápido (layout de uma doc)

```
┌─────────────────────────────────────────────────────────┐
│ HeaderBar (logo, burger, busca)                          │
├─────────────────────────────────────────────────────────┤
│  ← Prev  │  Breadcrumb (Início > Seção > Página)  │ Next → │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [ReadingTime]                                    (topo) │
│                                                         │
│  ┌─ ContentRenderer (se JSON) ou <Component /> ──────┐ │
│  │  hero (título + subtítulo)                         │ │
│  │  section (Paper > list / linkCards / …)             │ │
│  │  anchor (Voltar ao hub…)                           │ │
│  │  GuideNavigation (se layout.showGuideNav)           │ │
│  └────────────────────────────────────────────────────┘ │
│                                                         │
│  RelatedContent                                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ Footer                                                  │
└─────────────────────────────────────────────────────────┘
```

O layout ficou: **shell fixo** (header, breadcrumb, setas, footer) e **área central** única, que ou é o resultado do **ContentRenderer** (páginas em JSON) ou o **componente React** da página (legado). Título da aba vem de `page.meta.title` (content-driven) ou dos metadados do componente (legado).
