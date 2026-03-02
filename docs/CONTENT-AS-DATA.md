# Conteúdo como dados (content-driven pages)

As páginas do playbook hoje são duas coisas: **JSON** (a maioria) ou **componente React** (legado). O JSON é desenhado por um componente só, o `ContentRenderer`. O mesmo JSON alimenta a app e o MCP — uma fonte, dois consumidores.

## Quem manda na tela

**Nem tudo é JSON.** Tem página que é 100% JSON, tem página que ainda é TSX, e tem bloco dentro do JSON que chama componente React (wizard, comparador, código expansível).

### Como a rota escolhe o que mostrar

- **Rota:** `/:collection/:slug` (ex.: `/guides/staff`, `/patterns/clean-architecture`). Quem responde é sempre o `DocPage` (`src/pages/DocPage.tsx`).
- **Lógica:**
  1. Se existir JSON em `src/data/content/{collection}/{slug}.json` → `getDocContent` devolve esse conteúdo e o **ContentRenderer** desenha.
  2. Se não existir → usa o **componente React** registrado em `content.tsx` pra essa coleção/slug (lazy do `src/content/...`).

Resumo: **JSON ganha**. Só cai no TSX quando não tem JSON pra aquela rota.

### Três tipos de página

| Tipo                 | O que é                                                                 | Exemplo                                                                             |
| -------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Conteúdo (JSON)**  | Um JSON; o ContentRenderer monta hero, sections, listas, alerts, código | Guias, best-practices, architectures, patterns, techniques (quase tudo)             |
| **Componente (TSX)** | Página = componente React em `src/content/` (layout ou lógica própria)  | Hoje só o **glossário** ainda é TSX de página                                       |
| **Híbrido**          | TSX que lê JSON e desenha à mão                                         | **Glossário:** `GlossaryPage` + `src/data/glossary/terms.json` (filtro, categorias) |

### Blocos que viram componente

O `body` do JSON é dado puro; o ContentRenderer transforma em UI. Mas alguns blocos **chamam** componente React (lógica ou interação):

| Bloco no JSON            | Quem desenha                      | Dados                                   |
| ------------------------ | --------------------------------- | --------------------------------------- |
| `decisionWizard`         | `DecisionWizard` (lazy)           | Estado interno                          |
| `architectureComparison` | `ArchitectureComparisonWidget`    | `src/data/architecture-comparison.json` |
| `casesGrid`              | `CaseCard` por caso               | `src/data/cases.json`                   |
| `timeline`               | Mantine `Timeline`                | Items no bloco                          |
| `codeExample`            | `CodeExample` (expansível)        | Código no bloco                         |
| `glossary`               | `GlossaryBlock` (filtro + termos) | `src/data/glossary/terms.json`          |

Ou seja: **texto e estrutura vêm do JSON; wizard, comparador e código expansível são componentes.** Na migração, página com muita UI específica pode ficar em TSX ou usar `codeExample` / `code` no JSON.

### Onde está cada tipo (resumo)

- **JSON (ContentRenderer):** `src/data/content/guides/*.json` (17), `src/data/content/best-practices/*.json` (6), `src/data/content/architectures/*.json` (15: layered, bff, headless, pwa, jamstack, monorepo, spa, ssr-ssg, islands-architecture, hexagonal, event-sourcing, cqrs, micro-frontends, microservices-frontend, clean-architecture), `src/data/content/patterns/*.json` (5: repository-pattern, security, event-driven, component-driven, atomic-design), `src/data/content/techniques/*.json` (3: performance, state-machines, feature-flags). Registro em `content.tsx` com `ContentDrivenPage`.
- **TSX (componente de página):** Nenhum. Todos os guias (incl. glossário), architectures, patterns, techniques e best-practices estão em JSON.
- **Órfãos:** Nenhum. dry.tsx e kiss.tsx foram removidos (conteúdo em JSON).

Na hora de migrar: nem tudo precisa virar JSON. Página cheia de código ou UI muito específica pode continuar TSX ou ganhar blocos `code` / `codeExample` no JSON.

---

## Status atual (conteúdo e páginas)

Ordem = jornada do menu (`src/lib/navigation.ts`). **Fonte única de verdade** para “quem é JSON vs TSX”.

### Guias (guides), por seção da jornada

| Seção                    | Slug                    | Fonte | Observação                                                      |
| ------------------------ | ----------------------- | ----- | --------------------------------------------------------------- |
| **Por onde começar**     | study-guide             | JSON  | Roteiro por senioridade                                         |
| **Fundamentos**          | dependency-rule         | JSON  | Regra da cebola (content-driven)                                |
|                          | how-to-choose           | JSON  | Intro + Decision Wizard (bloco decisionWizard)                  |
|                          | staff-fundamentals      | JSON  | Staff · Fundamentos                                             |
| **Construindo UI**       | staff-ui                | JSON  | Staff · UI                                                      |
| **Entrega**              | staff-entrega           | JSON  | Staff · Entrega                                                 |
| **Estrutura**            | staff-estrutura         | JSON  | Staff · Estrutura                                               |
| **Escala**               | staff-escala            | JSON  | Staff · Escala                                                  |
| **Decisão & Referência** | staff                   | JSON  | Hub Para Staff                                                  |
|                          | architecture-comparison | JSON  | Comparador interativo (dados em `architecture-comparison.json`) |
|                          | implementation-roadmap  | JSON  | 4 fases + timeline + tabela (content-driven)                    |
|                          | migration-strategies    | JSON  | Estratégias de Migração                                         |
|                          | adr                     | JSON  | ADR - Decision Records                                          |
|                          | cases                   | JSON  | 19 casos (casesGrid + data/cases.json)                          |
|                          | security-business       | JSON  | Segurança & Negócio                                             |
|                          | glossary                | JSON  | Hero + bloco `glossary` (lê `src/data/glossary/terms.json`)     |
|                          | mcp                     | JSON  | MCP (Cursor)                                                    |

**Resumo:** 17 guias em JSON (incl. glossário). Architectures, patterns, techniques e best-practices — tudo em JSON. Nenhuma página de conteúdo em TSX.

---

## Próximos passos

| Prioridade   | O quê                                                 | Onde / como                                                                                     |
| ------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Conteúdo** | Best-practices em JSON                                | Concluído: dry, kiss, yagni, clean-code, srp, soc.                                              |
| **Conteúdo** | Migrar architectures, patterns, techniques, glossário | Concluído: tudo em JSON; glossário = hero + bloco `glossary`.                                   |
| **MCP**      | Sincronizar conteúdo no MCP                           | Concluído: `prepare-data.js` copia guides, best-practices, architectures, patterns, techniques. |
| **MCP**      | Expor glossário (terms.json) no MCP                   | Recurso ou tool para buscar termos por categoria/slug; útil para o assistente citar definições. |
| **Limpeza**  | TSX órfãos best-practices                             | Concluído: dry, kiss, yagni, clean-code, srp, soc TSX removidos.                                |
| **UX**       | GuideCTA na página how-to-choose                      | Reativar CTA “próximo passo” no final da página (layout ou bloco no JSON).                      |
| **Docs**     | Manter CONTENT-AS-DATA e README atualizados           | Ao migrar nova coleção, atualizar a tabela de status e, se fizer sentido, o “Próximos passos”.  |

Próximas prioridades opcionais: GuideCTA em how-to-choose; expor glossário (terms.json) no MCP como recurso/tool.

---

### Outras coleções (architectures, patterns, techniques, best-practices)

- **best-practices:** todas em JSON: `dry`, `kiss`, `yagni`, `clean-code`, `srp`, `soc`. Migração concluída.
- **architectures:** 15 em JSON: `layered`, `bff`, `headless`, `pwa`, `jamstack`, `monorepo`, `spa`, `ssr-ssg`, `islands-architecture`, `hexagonal`, `event-sourcing`, `cqrs`, `micro-frontends`, `microservices-frontend`, `clean-architecture`. Migração de architectures concluída.
- **patterns:** todas em JSON: `repository-pattern`, `security`, `event-driven`, `component-driven`, `atomic-design`. Migração concluída.
- **techniques:** todas em JSON: `performance`, `state-machines`, `feature-flags`. Migração concluída.

### Glossário

- **Dados:** `src/data/glossary/terms.json` (52 termos, 7 categorias).
- **Página:** `/guides/glossary` — JSON com hero + bloco `glossary`. O ContentRenderer chama o componente `GlossaryBlock`, que lê `terms.json` e renderiza filtro por categoria + lista de termos.

### MCP

- O servidor MCP usa `mcp-server/data/content/` (guides, best-practices, architectures, patterns, techniques). Rodar `npm run prepare-data` no mcp-server para sincronizar. O recurso `playbook://guide/{slug}` e a tool `playbook_get_guide` servem os guias em markdown.
- O glossário (terms.json) hoje não é exposto pelo MCP; pode ser adicionado depois (recurso ou tool por termo/categoria).

---

## Por que fazer assim?

- **Uma fonte só:** texto e estrutura no JSON; sem duplicar entre app e MCP.
- **Página = dados + um renderizador:** um componente genérico desenha todos os blocos; não precisa um TSX por página.
- **MCP consome o mesmo JSON:** o servidor MCP lê os mesmos arquivos e expõe título, descrição e corpo (busca, chat, etc.).

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
| `glossary`               | Glossário com filtro por categoria (lê `src/data/glossary/terms.json`)       |

Ícones são chaves (`ContentIconKey`): `check`, `code`, `lock`, `file-text`, `chart-bar`, `rocket`, `shield`, `bulb`, `alert-triangle`, `info-circle`, `arrow-right`, `device-mobile`, `stack`, `scale`, `target`, `puzzle`, `palette`, `building`, `trending-up`, `route`. O renderer mapeia para Tabler Icons.

## Migração de guias (concluída)

Todos os 17 guias estão em JSON (ver tabela **Status atual** no topo). Os antigos TSX em `src/content/guides/` foram removidos; o glossário é hero + bloco `glossary`. Blocos especiais: `casesGrid`, `timeline`, `architectureComparison`, `decisionWizard`, `glossary`.

## Como migrar uma página para JSON

1. Criar o JSON em `src/data/content/{collection}/{slug}.json`.
2. Montar a página no schema: hero, sections, listas, cards, código — o que a página tiver.
3. Em `content.tsx`: registrar com `ContentDrivenPage` e o slug; **remover** o import (e o lazy) do TSX antigo. DocPage sempre prefere JSON quando existe.

## MCP

- O MCP usa `mcp-server/data/content/` (guides, best-practices, architectures, patterns, techniques). Rodar **`npm run prepare-data`** no `mcp-server` para sincronizar após alterações em `src/data/content/**/*.json`.
- O recurso `playbook://guide/{slug}` e a tool `playbook_get_guide` devolvem o conteúdo completo do guia em markdown.

## Adicionando novos blocos

1. Declarar o tipo em `ContentBlock` em `content-schema.ts`.
2. Implementar o caso em `ContentRenderer.tsx` dentro de `renderBlock()`.
3. Ícone novo: adicionar em `ContentIconKey` e no `ICON_MAP`.

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
