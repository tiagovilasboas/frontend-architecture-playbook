# Estrutura lógica do playbook

Avaliação da organização da navegação, agrupamento de conteúdo e fluxo do usuário.

---

## Visão geral

- **Navegação (jornada):** 7 seções em ordem fixa, usada no menu e no prev/next.
- **URLs:** `/{collection}/{slug}` — collection = guides | architectures | patterns | techniques | best-practices.
- **Agrupamento no menu:** por **tema** (Fundamentos, Construindo UI, Entrega, etc.); dentro de cada tema aparecem itens de **várias collections** (guides, architectures, patterns, techniques, best-practices). Ou seja: a jornada é temática; a URL reflete o tipo do conteúdo.

---

## O que está coerente

### 1. Ordem da jornada

**Por onde começar → Fundamentos → Construindo UI → Entrega → Estrutura → Escala → Decisão**

- Faz sentido como progressão: entrada (study guide) → princípios → como construir UI → como entregar → como estruturar código → escala e times → decisão e referência.
- Quem segue a ordem passa de “por onde começar” até “decisão” sem saltos estranhos.

### 2. Fundamentos

- Dependency Rule como primeiro item (base de dependências).
- Depois princípios (DRY, KISS, YAGNI, SRP, SoC, Clean Code).
- Depois “Como Escolher Arquitetura” (aplicar os fundamentos).
- Por último “Staff · Fundamentos” (visão staff dos mesmos temas).
- Princípios vivem na collection `best-practices` mas são mostrados sob o tema “Fundamentos”. Coerente.

### 3. Construindo UI

- SPA, Component-Driven, Atomic Design, State Machines, Event-Driven, Staff · UI.
- Mistura `architectures` (SPA), `patterns` (component-driven, atomic, event-driven), `techniques` (state-machines). O agrupamento por tema “Construindo UI” é claro; as URLs diferentes (architectures vs patterns vs techniques) não quebram a lógica.

### 4. Entrega, Estrutura, Escala

- **Entrega:** SSR/SSG, JAMstack, PWA, Islands, Performance, Staff · Entrega.
- **Estrutura:** Clean/Layered/Hexagonal, Repository, Security, Staff · Estrutura.
- **Escala:** Monorepo, Micro-frontends, BFF, Headless, Feature Flags, CQRS, Event Sourcing, Staff · Escala.

Em cada seção: temas principais + um guia “Staff · X”. Padrão consistente.

### 5. Decisão & Referência

- **Para Staff** (hub) primeiro — ponto de entrada para nível staff.
- Depois: **Comparação** → **Roadmap** → **Migração** → **ADR** → **Casos** → **Segurança & Negócio** → **Glossário** → **MCP**.
- Fluxo: hub → comparar → planejar → migrar → documentar (ADR) → validar (casos) → segurança → referência (glossário) → ferramenta (MCP). Ordem lógica para quem toma decisão.

### 6. Staff em cada seção

- Cada bloco tem um item “Staff · X” (Fundamentos, UI, Entrega, Estrutura, Escala) apontando para o guia staff daquele tema.
- O hub “Para Staff” está em Decisão e concentra o restante (comparação, roadmap, migração, ADR, casos, segurança, glossário, MCP). Consistente.

### 7. Glossário

- Está em **Decisão & Referência** como “referência”. Faz sentido: é conteúdo de consulta, não passo da jornada de decisão em si.
- Rota `/guides/glossary` e dados em `glossary/terms.json` — a escolha de ser um “guide” na navegação e um componente próprio na implementação é aceitável e não quebra a lógica.

---

## Pontos de atenção (não são erros)

### 1. GUIDE_NAV_SLUGS vs jornada

- O sidebar “Todos os Guias” usa `GUIDE_NAV_SLUGS`: dependency-rule, how-to-choose, architecture-comparison, cases, study-guide, staff, security-business, glossary, mcp, adr, migration-strategies.
- **Não** inclui staff-fundamentals, staff-ui, staff-entrega, staff-estrutura, staff-escala.
- Ou seja: na jornada temos “Staff · X” em cada seção; no sidebar de guias temos só o hub “Para Staff” e os guias de decisão/referência. É uma escolha: “Todos os Guias” como lista de guias “transversais” (como começar, como escolher, comparação, casos, staff hub, segurança, glossário, MCP, ADR, migração), e os Staff · X acessados pela jornada. Se a intenção for que “Todos os Guias” seja a lista completa de tudo que é “guide”, aí faltariam os staff-\*; caso contrário, está coerente.

### 2. Ordem em `guides[]` vs ordem no menu

- O array `guides` em `content.tsx` tem uma ordem (dependency-rule, how-to-choose, … staff-escala, glossary).
- A ordem **na navegação** é a de `NAV_JOURNEY`, que espalha os guias por seção. Prev/next e breadcrumb seguem a lista plana de `getAllJourneyItems()` (NAV_JOURNEY). Ou seja: a ordem que importa para o usuário é a da jornada; a ordem em `guides[]` importa para RelatedContent (próximo/anterior na lista de guides). Estar ciente disso evita confusão ao reordenar itens.

### 3. Collections e pastas no código

- Alguns conteúdos de “architectures” estão em `content/patterns/` (ex.: ssr-ssg, pwa). A **URL** é definida pela collection (`/architectures/ssr-ssg`); a **pasta** é de organização do código. Não afeta a estrutura lógica para o usuário.

---

## Conclusão

- **Sim, a estrutura lógica está ok:** a jornada tem ordem clara (entrada → fundamentos → UI → entrega → estrutura → escala → decisão), cada seção agrupa por tema, Staff está presente por bloco + hub em Decisão, e Decisão & Referência reúne comparação, roadmap, migração, ADR, casos, segurança, glossário e MCP de forma coerente.
- Os pontos acima são refinamentos (sidebar “Todos os Guias”, relação entre ordem em `guides` e jornada, e organização de pastas) e não indicam falha na estrutura lógica.

Para alterar a estrutura (ex.: novo bloco, reordenar seções, incluir staff-\* no sidebar), use como referência: **`src/lib/navigation.ts`** (NAV_JOURNEY) e **`src/lib/content.tsx`** (guides, GUIDE_NAV_SLUGS, collections).
