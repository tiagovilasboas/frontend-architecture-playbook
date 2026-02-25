# Conteúdo como dados (content-driven pages)

As páginas do playbook podem ser **componentes React** (legado) ou **conteúdo em JSON** renderizado por um único componente (`ContentRenderer`). O mesmo JSON serve a aplicação e pode ser consumido pelo MCP.

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

## Schema de blocos

Cada página tem `meta` (title, description), `layout` opcional (showGuideNav, showRelated) e `body`: array de blocos.

Blocos suportados:

| Tipo          | Uso                                                                 |
| ------------- | ------------------------------------------------------------------- |
| `hero`        | Título + subtítulo; opcional ícone                                  |
| `section`     | Paper com título opcional e `children` (outros blocos)              |
| `text`        | Parágrafo (size, dimmed)                                            |
| `title`       | Título solto (order 2–4)                                            |
| `list`        | Lista (itens string ou `{ title, description }`); ícone opcional    |
| `code`        | Bloco de código (block, language)                                   |
| `codeExample` | CodeExample com título, descrição, código                           |
| `alert`       | Alert (message, color, icon)                                        |
| `linkCards`   | Grid de cards que são links internos (to, title, description, icon) |
| `iconCards`   | Grid de cards com ícone + título + descrição (sem link)             |
| `anchor`      | Link (to ou href); `back: true` para estilo “voltar”                |
| `stack`       | Agrupa blocos em Stack com gap                                      |

Ícones são chaves (`ContentIconKey`): `check`, `code`, `lock`, `file-text`, `chart-bar`, `rocket`, `shield`, `bulb`, `alert-triangle`, `info-circle`, `arrow-right`, `device-mobile`, `stack`, `scale`, `target`, `puzzle`, `palette`, `building`, `trending-up`, `route`. O renderer mapeia para Tabler Icons.

## Primeiros conteúdos a migrar

Ordem sugerida: **esforço baixo e alto valor** (hub/entrada) primeiro; depois páginas que exigem blocos novos.

| Ordem | Página                                              | Coleção | Esforço  | O que falta (se algo)                                                                                                                                                                                                                  |
| ----- | --------------------------------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅    | Staff · Fundamentos, UI, Entrega, Estrutura, Escala | guides  | —        | Já migradas.                                                                                                                                                                                                                           |
| **1** | **Segurança & Negócio**                             | guides  | Baixo    | Só blocos atuais: hero, section, text, list, alert, iconCards. Em “Impacto financeiro” os cards têm lista dentro: ou estender `iconCards` para aceitar `items: string[]` por card, ou usar dois blocos `section` + `list` lado a lado. |
| **2** | **Por onde começar (study-guide)**                  | guides  | Médio    | Novo bloco **linkList** (`links: { to, label }[]`) para as listas de links por nível. Opcional: bloco **callout** (caixa “Próximo nível”) para não usar só `alert`. Ícones: school, map, users (já temos trending-up, target).         |
| 3     | MCP                                                 | guides  | Médio    | Vários `code` e listas; um bloco **table** opcional (hoje dá para simular com list).                                                                                                                                                   |
| 4     | ADR                                                 | guides  | Médio    | Code examples + listas; estrutura similar a outros guias.                                                                                                                                                                              |
| 5     | Roadmap de Implementação                            | guides  | Alto     | Timeline (Mantine) e tabelas; vale um bloco **timeline** ou deixar em React por enquanto.                                                                                                                                              |
| 6     | Estratégias de Migração                             | guides  | Médio    | Code + listas + linkCards; possível com blocos atuais.                                                                                                                                                                                 |
| 7     | Comparação de Arquiteturas                          | guides  | Alto     | Selector, tabelas, dados dinâmicos; manter como componente ou criar blocos “comparisonTable” / “metricCards”.                                                                                                                          |
| 8     | Como Escolher (how-to-choose)                       | guides  | Especial | Decision Wizard é interativo; manter em React; só migrar texto introdutório se quiser (hero + text em JSON).                                                                                                                           |

**Resumo:** Migrar primeiro **Segurança & Negócio** (e, se precisar, estender `iconCards` com `items`). Em seguida **Por onde começar**, adicionando **linkList** (e opcionalmente **callout**). O resto conforme a tabela; páginas com Wizard, Timeline ou tabelas complexas podem ficar em React até haver blocos específicos.

## Como migrar uma página para JSON

1. Criar `src/data/content/{collection}/{slug}.json` (ex.: `guides/staff-fundamentals.json`).
2. Copiar a estrutura da página atual para o schema: hero, sections, listas, cards, etc.
3. Não é necessário remover o componente React: o DocPage prioriza JSON quando existe. Opcionalmente, remover o import e o registro do componente em `content.tsx` para evitar código morto.

## MCP

- **Hoje:** O MCP lê `mcp-server/data/playbook.json` (nav + metadados) e `cases.json`. O recurso `playbook://guide/{slug}` devolve só título, descrição e URL.
- **Para usar o conteúdo completo:** Copiar ou linkar a pasta de conteúdo para o MCP, por exemplo:
  - `cp -r src/data/content mcp-server/data/` (ou script no build), ou
  - symlink: `ln -s ../../src/data/content mcp-server/data/content`
- Assim o MCP pode, por exemplo, abrir `data/content/guides/staff-fundamentals.json` e devolver o corpo em markdown ou texto para o assistente.

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
