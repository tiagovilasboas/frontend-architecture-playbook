# Conteúdo como dados (content-driven pages)

As páginas do playbook podem ser **componentes React** (legado) ou **conteúdo em JSON** renderizado por um único componente (`ContentRenderer`). O mesmo JSON serve a aplicação e pode ser consumido pelo MCP.

## Análise: páginas e tipos de componentes

**Nem tudo é JSON.** Há páginas 100% conteúdo (JSON), páginas que são código (TSX) e blocos dentro do JSON que renderizam componentes React (wizard, comparador, código expansível).

### Como a rota decide o que renderizar

- **Rota:** `/:collection/:slug` (ex.: `/guides/staff`, `/patterns/clean-architecture`). Um único componente, `DocPage` (`src/pages/DocPage.tsx`), responde.
- **Decisão:**
  1. Se `getDocContent(collection, slug)` devolver um `ContentPage` (JSON em `src/data/content/{collection}/{slug}.json`) → usa **ContentRenderer** com esse JSON.
  2. Senão → usa o **componente React** registrado em `content.tsx` para essa coleção/slug (lazy do `src/content/...`).

Ou seja: **JSON tem prioridade**. Só cai no TSX se não existir JSON para essa rota.

### Três tipos de página

| Tipo                 | Descrição                                                                                                                                                   | Exemplo                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Conteúdo (JSON)**  | Página definida por um único JSON; `ContentRenderer` desenha hero, sections, listas, alerts, código, etc.                                                   | Guias (dependency-rule, staff, cases, …), best-practices dry e kiss                                                                       |
| **Componente (TSX)** | Página é um componente React em `src/content/` (patterns, architectures, techniques ou best-practices). Pode ter muito código, MDX-like, ou layout próprio. | Architectures (spa, ssr-ssg, …), patterns (clean-architecture, …), techniques (performance), best-practices (yagni, clean-code, srp, soc) |
| **Híbrido**          | Componente TSX que lê dados em JSON; não usa ContentRenderer.                                                                                               | **Glossário:** `GlossaryPage` lê `src/data/glossary/terms.json` (filtro, categorias, links)                                               |

### Blocos no JSON que são componentes (código)

Dentro de uma página “content-driven”, o `body` é só dados; quem desenha é o `ContentRenderer`. Mas vários blocos delegam em **componentes React** com lógica ou interatividade:

| Bloco no JSON            | Componente real                | Dados externos                          |
| ------------------------ | ------------------------------ | --------------------------------------- |
| `decisionWizard`         | `DecisionWizard` (lazy)        | Nenhum; estado interno                  |
| `architectureComparison` | `ArchitectureComparisonWidget` | `src/data/architecture-comparison.json` |
| `casesGrid`              | `CaseCard` por caso            | `src/data/cases.json`                   |
| `timeline`               | Mantine `Timeline`             | Items no próprio bloco                  |
| `codeExample`            | `CodeExample` (expansível)     | Código no próprio bloco                 |

Ou seja: **o conteúdo é JSON, mas layout e interação (wizard, comparador, cards, timeline, código) são componentes.** Ao migrar páginas para JSON, páginas com muito “código” ou UI específica podem continuar TSX ou ganhar blocos como `codeExample` / `code` no JSON.

### Onde está cada tipo (resumo)

- **JSON (ContentRenderer):** `src/data/content/guides/*.json` (16), `src/data/content/best-practices/*.json` (6), `src/data/content/architectures/*.json` (7: layered, bff, headless, pwa, jamstack, monorepo, spa). Registro em `content.tsx` com `ContentDrivenPage`.
- **TSX (componente de página):** `src/content/guides/glossary.tsx`; `src/content/patterns/*.tsx` (architectures + patterns + techniques restantes). Registro em `content.tsx` com `toMeta(LazyComponent, slug, collection, true)`. Layered, BFF, Headless, PWA, JAMstack, Monorepo e SPA migrados para JSON.
- **Órfãos:** Nenhum. dry.tsx e kiss.tsx foram removidos (conteúdo em JSON).

Esta análise deve ser tida em conta na marcha de migração: nem tudo precisa virar JSON; páginas muito orientadas a código ou com UI muito específica podem permanecer TSX ou usar blocos como `code` / `codeExample` no JSON.

---

## Status atual (conteúdo e páginas)

Ordem = jornada do menu (`src/lib/navigation.ts`). **Fonte única de verdade** para “quem é JSON vs TSX”.

### Guias (guides), por seção da jornada

| Seção                    | Slug                    | Fonte             | Observação                                                      |
| ------------------------ | ----------------------- | ----------------- | --------------------------------------------------------------- |
| **Por onde começar**     | study-guide             | JSON              | Roteiro por senioridade                                         |
| **Fundamentos**          | dependency-rule         | JSON              | Regra da cebola (content-driven)                                |
|                          | how-to-choose           | JSON              | Intro + Decision Wizard (bloco decisionWizard)                  |
|                          | staff-fundamentals      | JSON              | Staff · Fundamentos                                             |
| **Construindo UI**       | staff-ui                | JSON              | Staff · UI                                                      |
| **Entrega**              | staff-entrega           | JSON              | Staff · Entrega                                                 |
| **Estrutura**            | staff-estrutura         | JSON              | Staff · Estrutura                                               |
| **Escala**               | staff-escala            | JSON              | Staff · Escala                                                  |
| **Decisão & Referência** | staff                   | JSON              | Hub Para Staff                                                  |
|                          | architecture-comparison | JSON              | Comparador interativo (dados em `architecture-comparison.json`) |
|                          | implementation-roadmap  | JSON              | 4 fases + timeline + tabela (content-driven)                    |
|                          | migration-strategies    | JSON              | Estratégias de Migração                                         |
|                          | adr                     | JSON              | ADR - Decision Records                                          |
|                          | cases                   | JSON              | 19 casos (casesGrid + data/cases.json)                          |
|                          | security-business       | JSON              | Segurança & Negócio                                             |
|                          | glossary                | Componente + JSON | GlossaryPage + `terms.json`                                     |
|                          | mcp                     | JSON              | MCP (Cursor)                                                    |

**Resumo:** Todos os 16 guias em JSON (content-driven). 1 glossário (componente + `glossary/terms.json`). Architectures, patterns, techniques e best-practices seguem em TSX.

---

## Próximos passos

| Prioridade   | O quê                                       | Onde / como                                                                                                                                             |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Conteúdo** | Best-practices em JSON                      | Concluído: dry, kiss, yagni, clean-code, srp, soc.                                                                                                      |
| **Conteúdo** | Migrar architectures ou patterns para JSON  | Criar `src/data/content/architectures/` ou `patterns/`; começar por páginas mais estáticas (ex.: SPA, layered).                                         |
| **MCP**      | Incluir best-practices no MCP               | Concluído: `prepare-data.js` copia `guides` e `best-practices`. Expor best-practices em recurso/tool (ex.: playbook://best-practice/{slug}) é opcional. |
| **MCP**      | Expor glossário (terms.json) no MCP         | Recurso ou tool para buscar termos por categoria/slug; útil para o assistente citar definições.                                                         |
| **Limpeza**  | TSX órfãos best-practices                   | Concluído: dry, kiss, yagni, clean-code, srp, soc TSX removidos.                                                                                        |
| **UX**       | GuideCTA na página how-to-choose            | Reativar CTA “próximo passo” no final da página (layout ou bloco no JSON).                                                                              |
| **Docs**     | Manter CONTENT-AS-DATA e README atualizados | Ao migrar nova coleção, atualizar a tabela de status e, se fizer sentido, o “Próximos passos”.                                                          |

Ordem sugerida: mais architectures ou patterns para JSON (layered já migrado; best-practices concluídos).

---

### Outras coleções (architectures, patterns, techniques, best-practices)

- **best-practices:** todas em JSON: `dry`, `kiss`, `yagni`, `clean-code`, `srp`, `soc`. Migração concluída.
- **architectures:** 7 em JSON: `layered`, `bff`, `headless`, `pwa`, `jamstack`, `monorepo`, `spa`. Demais TSX.
- **patterns, techniques:** todas TSX.

### Glossário

- **Dados:** `src/data/glossary/terms.json` (52 termos, 7 categorias).
- **Página:** `/guides/glossary` — componente `GlossaryPage` (filtro por categoria, lista, link para guia, referências). Não usa ContentRenderer; lê o JSON diretamente.

### MCP

- O servidor MCP usa `mcp-server/data/content/guides/` e `mcp-server/data/content/best-practices/` (cópia dos JSON). Rodar `npm run prepare-data` no mcp-server para sincronizar. O recurso `playbook://guide/{slug}` e a tool `playbook_get_guide` servem os guias em markdown.
- O glossário (terms.json) hoje não é exposto pelo MCP; pode ser adicionado depois (recurso ou tool por termo/categoria).

---

## Por que?

- **Uma fonte da verdade:** texto e estrutura em JSON; menos duplicação entre páginas.
- **Páginas autônomas:** a página é só dados + um componente genérico que sabe renderizar todos os blocos.
- **Reuso no MCP:** o servidor MCP pode ler os mesmos arquivos JSON e expor título, descrição e corpo (para busca ou exibição no chat).

## Onde está o quê

| Artefato       | Caminho                                     | Uso                                                                        |
| -------------- | ------------------------------------------- | -------------------------------------------------------------------------- |
| Schema (tipos) | `src/lib/content-schema.ts`                 | Tipos TypeScript dos blocos e da página                                    |
| Conteúdo JSON  | `src/data/content/{collection}/{slug}.json` | Ex.: `guides/staff-fundamentals.json`                                      |
| Renderer       | `src/components/ContentRenderer.tsx`        | Renderiza `ContentPage.body` em UI                                         |
| Loader         | `src/lib/content-data.ts`                   | `getDocContent(collection, slug)` via glob                                 |
| DocPage        | `src/pages/DocPage.tsx`                     | Se existir JSON para a rota, usa ContentRenderer; senão, componente legado |

**Links internos:** em blocos `anchor`, `linkCards`, `linkList` e `links` dentro de `richCardGrid`, use sempre caminhos absolutos da app: `/guides/slug`, `/architectures/slug`, `/patterns/slug`, `/techniques/slug`, `/best-practices/slug`. Assim os links funcionam em qualquer contexto (SPA e MCP).

## Schema de blocos

Cada página tem `meta` (title, description), `layout` opcional (showGuideNav, showRelated) e `body`: array de blocos.

Blocos suportados:

| Tipo                     | Uso                                                                          |
| ------------------------ | ---------------------------------------------------------------------------- |
| `hero`                   | Título + subtítulo; opcional ícone                                           |
| `section`                | Paper com título opcional e `children` (outros blocos)                       |
| `text`                   | Parágrafo (size, dimmed)                                                     |
| `title`                  | Título solto (order 2–4)                                                     |
| `list`                   | Lista (itens string ou `{ title, description }`); ícone opcional             |
| `code`                   | Bloco de código (block, language)                                            |
| `codeExample`            | CodeExample com título, descrição, código                                    |
| `alert`                  | Alert (message, color, icon)                                                 |
| `linkCards`              | Grid de cards que são links internos (to, title, description, icon)          |
| `iconCards`              | Grid de cards com ícone + título + descrição (sem link)                      |
| `anchor`                 | Link (to ou href); `back: true` para estilo “voltar”                         |
| `stack`                  | Agrupa blocos em Stack com gap                                               |
| `architectureComparison` | Comparador interativo (lê `src/data/architecture-comparison.json`)           |
| `decisionWizard`         | Wizard de 6 perguntas (componente interativo)                                |
| `casesGrid`              | Grid dos 19 casos (lê `src/data/cases.json`); opcional `title`               |
| `timeline`               | Timeline Mantine (items: title, description?, items[]); opcional resultAlert |

Ícones são chaves (`ContentIconKey`): `check`, `code`, `lock`, `file-text`, `chart-bar`, `rocket`, `shield`, `bulb`, `alert-triangle`, `info-circle`, `arrow-right`, `device-mobile`, `stack`, `scale`, `target`, `puzzle`, `palette`, `building`, `trending-up`, `route`. O renderer mapeia para Tabler Icons.

## Migração de guias (concluída)

Todos os 16 guias estão em JSON (ver tabela **Status atual** no topo). Os antigos TSX em `src/content/guides/` foram removidos; permanece só `glossary.tsx`. Blocos especiais: `casesGrid`, `timeline`, `architectureComparison`, `decisionWizard`.

## Como migrar uma página para JSON

1. Criar `src/data/content/{collection}/{slug}.json` (ex.: `guides/staff-fundamentals.json`).
2. Copiar a estrutura da página atual para o schema: hero, sections, listas, cards, etc.
3. Registrar em `content.tsx` com `ContentDrivenPage` e o slug. Remover o import do componente TSX antigo; o DocPage prioriza JSON quando existe.

## MCP

- O MCP usa `mcp-server/data/content/` (guides, best-practices, architectures). Rodar **`npm run prepare-data`** no `mcp-server` para sincronizar após alterações em `src/data/content/**/*.json`.
- O recurso `playbook://guide/{slug}` e a tool `playbook_get_guide` devolvem o conteúdo completo do guia em markdown.

## Adicionando novos blocos

1. Incluir o tipo em `ContentBlock` em `content-schema.ts`.
2. Tratar o caso em `ContentRenderer.tsx` em `renderBlock()`.
3. Se precisar de novo ícone, adicionar em `ContentIconKey` e em `ICON_MAP`.

## Exemplo mínimo de página JSON

```json
{
  "meta": {
    "title": "Meu Guia",
    "description": "Descrição para SEO e MCP."
  },
  "layout": { "showGuideNav": "staff", "showRelated": true },
  "body": [
    { "type": "hero", "title": "Meu Guia", "subtitle": "Subtítulo opcional." },
    {
      "type": "section",
      "title": "Seção 1",
      "children": [
        { "type": "text", "content": "Parágrafo aqui." },
        { "type": "list", "icon": "check", "items": ["Item A", "Item B"] }
      ]
    }
  ]
}
```
