# Análise: impacto e valor para o dev · lacunas Staff

## O que o playbook já gera de valor

- **Roteiro por nível (Por onde começar):** o dev sabe em que ordem estudar (Júnior → Pleno → Sênior → Staff) e o que entra no radar de cada nível.
- **Decisão com evidência:** 19 casos com link do artigo, Comparação de Arquiteturas e Decision Wizard — o dev (e o Staff) podem levar recomendação e fonte pra reunião em vez de opinião.
- **Documentação de decisão:** ADR em 2 páginas; quando exigir e como documentar.
- **Linguagem não técnica:** glossário e guia Segurança & Negócio para falar com negócio e priorizar investimento.
- **Staff por seção:** conteúdo avançado segmentado (Fundamentos, UI, Entrega, Estrutura, Escala) com guardrails, métricas e práticas por área.
- **Ferramentas e MCP:** uso no Cursor via MCP para consultar playbook e casos no fluxo de trabalho.

## Lacunas identificadas e o que foi feito

| Lacuna                                     | Ação                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Impacto prático pouco explícito**        | Adicionada seção "O valor que você leva daqui (impacto prático)" no hub Staff: usar wizard antes de propor arquitetura, levar caso com link na reunião, exigir ADR ao mudar padrão, usar Dependency Rule e segurança em code review.                         |
| **Checklist sem back-end e a11y**          | Incluídos no checklist: alinhar com back-end (contrato, versionamento) quando a decisão impacta API; acessibilidade e segurança como critério de revisão.                                                                                                    |
| **Influência, mentoring e débito técnico** | Incluído em "O que mais um Staff precisa dominar": influência sem autoridade, mentoring, priorizar e comunicar débito técnico pro negócio.                                                                                                                   |
| **Roteiro Staff desatualizado**            | STAFF_LINKS no study-guide passou a incluir os 5 Staff por seção (staff-fundamentals, staff-ui, staff-entrega, staff-estrutura, staff-escala) e texto do card Staff atualizado (hub, back-end, ferramentas, guardrails).                                     |
| **MCP desatualizado**                      | playbook.json do MCP atualizado: um item "Staff · …" em cada seção (Fundamentos, UI, Entrega, Estrutura, Escala) e descrição do hub "Para Staff" alinhada ao conteúdo atual (evidência, OKRs, back-end, segurança, ferramentas, impacto prático, checklist). |

## O que ainda fica fora do playbook (complementar por fora)

- **Soft skills em profundidade:** influência sem autoridade, facilitação, mentoring — livros e cursos de liderança técnica.
- **Lista de ferramentas “top N”:** o playbook não lista ferramentas do ano; cobre como decidir (Comparação, Wizard, ADR). Manter hábito de release notes e comunidades.
- **Observabilidade/SRE no front:** métricas em produção, alertas, logs — mencionado em ferramentas; aprofundar conforme stack da empresa.

## Resumo

O playbook gera valor quando o dev (e o Staff) **usam** no dia a dia: wizard antes de propor arquitetura, caso com link na reunião, ADR quando mudar padrão, guardrails como critério de revisão. As lacunas de “impacto prático”, checklist (back-end, a11y), influência/débito técnico e roteiro Staff foram preenchidas; o MCP foi atualizado para refletir toda a navegação e descrições atuais.

---

## Estado dos links (como ficou)

### Menu principal (Header + Mobile) — `src/lib/navigation.ts`

| Seção                  | Staff da seção (último item)                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Fundamentos            | **Staff · Fundamentos** → `/guides/staff-fundamentals`                                                       |
| Construindo UI         | **Staff · UI** → `/guides/staff-ui`                                                                          |
| Arquitetura de Entrega | **Staff · Entrega** → `/guides/staff-entrega`                                                                |
| Estrutura de Código    | **Staff · Estrutura** → `/guides/staff-estrutura`                                                            |
| Escala & Times         | **Staff · Escala** → `/guides/staff-escala`                                                                  |
| Decisão & Referência   | **Para Staff** (hub) → `/guides/staff` + Comparação, Roadmap, Migração, ADR, Casos, Segurança & Negócio, MCP |

### Por onde começar — roteiro Staff (STAFF_LINKS)

Ordem: Para Staff (hub) → Staff · Fundamentos → Staff · UI → Staff · Entrega → Staff · Estrutura → Staff · Escala → ADR → 19 Casos → Decision Wizard → Segurança & Negócio.

### Hub Para Staff

- 5 cards “Staff por seção” → cada um leva à página Staff daquela seção.
- Links para Casos, Comparação, Wizard, ADR, Migração, Segurança & Negócio, Performance, Dependency Rule, Security, BFF.

### Cada página Staff por seção

- “← Voltar ao hub Para Staff” → `/guides/staff`.
- Cards para conteúdo da seção (ex.: Staff · Fundamentos → Dependency Rule, Clean Code, Security, ADR).

### MCP (playbook.json)

- **navigation** igual ao menu: 7 seções com os itens Staff · … no fim de Fundamentos, UI, Entrega, Estrutura, Escala.
- Cada item tem href, label, slug, title, description.
- Descrição do hub Para Staff atualizada.

### Rotas

- `/guides/staff`, `staff-fundamentals`, `staff-ui`, `staff-entrega`, `staff-estrutura`, `staff-escala` registrados em `content.tsx` (guides + STATIC_METADATA). Rotas `/:collection/:slug` funcionam.

---

## O que ainda falta (opcional)

- **Implementation Roadmap** e **Migration Strategies** não estão em STAFF_LINKS; estão no menu Decisão e em SENIOR_LINKS. Podem ser acrescentados em STAFF_LINKS se quiser reforçar.
- Nenhum link quebrado; menu, study-guide e MCP alinhados.
