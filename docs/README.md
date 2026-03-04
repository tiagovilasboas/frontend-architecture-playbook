# Docs do Playbook

Onde tá cada coisa e pra que serve. Sem enrolação.

## O que tem aqui

| O quê                                                           | Onde                                       |
| --------------------------------------------------------------- | ------------------------------------------ |
| **Conteúdo em JSON vs TSX** — quem é o quê, como migrar, schema | [CONTENT-AS-DATA.md](CONTENT-AS-DATA.md)   |
| **Estrutura do playbook** — jornada, seções, links              | [ESTRUTURA-LOGICA.md](ESTRUTURA-LOGICA.md) |
| **Glossário** — termos e categorias                             | `src/data/glossary/terms.json`             |
| **Menu e navegação** — prev/next, breadcrumb                    | `src/lib/navigation.ts`                    |

---

## Preciso fazer X — qual doc abro?

| Quero…                                         | Abre isso                                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Entender o playbook (rotas, conteúdo, jornada) | [PLAYBOOK-FULL-ANALYSIS.md](PLAYBOOK-FULL-ANALYSIS.md)                                     |
| Validar seção/link/fluxo                       | [ESTRUTURA-LOGICA.md](ESTRUTURA-LOGICA.md)                                                 |
| Pensar em UX e valor pro dev                   | [PLAYBOOK-UX-VALOR-DEV.md](PLAYBOOK-UX-VALOR-DEV.md)                                       |
| **Análise completa vs referências + plano**    | [ANALISE-UI-UX-PLAYBOOK-COMPARATIVO.md](ANALISE-UI-UX-PLAYBOOK-COMPARATIVO.md)             |
| Mapear termo técnico (guia vs glossário)       | [PROPOSTA-GLOSSARIO-CONCEITOS.md](PROPOSTA-GLOSSARIO-CONCEITOS.md)                         |
| Preencher glossário em levas                   | [GLOSSARIO-BABY-STEPS-PLAN.md](GLOSSARIO-BABY-STEPS-PLAN.md)                               |
| Alinhar emoji/ícone (evitar duplicata)         | [ANALISE-EMOJI-SETA-ICONES.md](ANALISE-EMOJI-SETA-ICONES.md)                               |
| **Validar JSON + blocos**                      | `npm test -- content-validation` (teste em `src/lib/__tests__/content-validation.test.ts`) |
| Migrar página pra JSON                         | [CONTENT-AS-DATA.md](CONTENT-AS-DATA.md) — schema, blocos, ordem                           |
| Layout e decisões de UI                        | [LAYOUT-E-ANALISE.md](LAYOUT-E-ANALISE.md)                                                 |

Dados: guias em `src/data/content/guides/*.json`; glossário em `src/data/glossary/terms.json`.

---

## Estrutura dos docs

```
docs/
├── README.md                    ← você está aqui (índice)
├── CONTENT-AS-DATA.md           ← conteúdo como dados + migração
├── ESTRUTURA-LOGICA.md          ← jornada e seções
├── PLAYBOOK-FULL-ANALYSIS.md    ← análise geral
├── PLAYBOOK-UX-VALOR-DEV.md     ← UX e valor pro dev
├── ANALISE-UI-UX-PLAYBOOK-COMPARATIVO.md ← análise vs referências + plano de ação
├── PLAYBOOK_ANALISE_STAFF_PRINCIPAL.md
├── ANALISE-EMOJI-SETA-ICONES.md
├── ANALISE-IMPACTO-STAFF.md
├── ANALISE-NIVEL-STAFF.md
├── PROPOSTA-GLOSSARIO-CONCEITOS.md
├── GLOSSARIO-BABY-STEPS-PLAN.md
├── LAYOUT-E-ANALISE.md
├── ROADMAP.md                   ← roadmap do projeto
├── ux-mobile-menu.md
└── adr/                         ← decisões arquiteturais (ADRs)
    ├── README.md
    ├── 001-visualizations-and-comparisons.md
    └── 002-state-management.md
```

---

## Roadmap e decisões

- **ROADMAP.md** — o que tá planejado, por quando, prioridade.
- **adr/** — Architecture Decision Records: decisão + contexto + consequência. Quando alguém perguntar “por que a gente fez assim?”, a resposta tá aqui.
