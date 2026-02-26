# Documentação do Projeto

Documentação do Frontend Architecture Playbook.

## Status rápido

| O quê                                                                                                     | Onde                                       |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Conteúdo e páginas** (quem é JSON, quem é TSX) + **análise de páginas e componentes** + próximos passos | [CONTENT-AS-DATA.md](CONTENT-AS-DATA.md)   |
| **Estrutura lógica** (jornada, seções, links)                                                             | [ESTRUTURA-LOGICA.md](ESTRUTURA-LOGICA.md) |
| **Glossário** (termos e categorias)                                                                       | `src/data/glossary/terms.json`             |
| **Navegação** (menu, prev/next, breadcrumb)                                                               | `src/lib/navigation.ts`                    |

---

## Referências para atividades

Use estes docs ao fazer **conteúdo**, **glossário**, **UI** ou **estrutura**:

| Atividade                                       | Doc                                                                | Uso                                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entender o playbook (rotas, conteúdo, jornada)  | [PLAYBOOK-FULL-ANALYSIS.md](PLAYBOOK-FULL-ANALYSIS.md)             | Estrutura, navegação, content-driven vs legacy, gaps.                                                                                                                             |
| Validar estrutura lógica (seções, links, fluxo) | [ESTRUTURA-LOGICA.md](ESTRUTURA-LOGICA.md)                         | Jornada, agrupamento, coerência.                                                                                                                                                  |
| Decidir valor ao dev (UX, escaneabilidade)      | [PLAYBOOK-UX-VALOR-DEV.md](PLAYBOOK-UX-VALOR-DEV.md)               | Progressive disclosure, glossário.                                                                                                                                                |
| Mapear termos técnicos                          | [PROPOSTA-GLOSSARIO-CONCEITOS.md](PROPOSTA-GLOSSARIO-CONCEITOS.md) | Onde cada termo encaixa (guia vs glossário).                                                                                                                                      |
| Preencher glossário em levas                    | [GLOSSARIO-BABY-STEPS-PLAN.md](GLOSSARIO-BABY-STEPS-PLAN.md)       | Ordem das levas, formato do verbete.                                                                                                                                              |
| Evitar emoji/seta duplicada, alinhar ícones     | [ANALISE-EMOJI-SETA-ICONES.md](ANALISE-EMOJI-SETA-ICONES.md)       | Duplicatas, alinhamento.                                                                                                                                                          |
| **Validar conteúdo (JSON + emojis)**            | `npm test -- content-validation`                                   | Teste em `src/lib/__tests__/content-validation.test.ts`: estrutura ContentPage, blocos com type conhecido, glossário, e bloqueio de emoji em título quando o bloco já tem `icon`. |
| Migrar conteúdo para JSON                       | [CONTENT-AS-DATA.md](CONTENT-AS-DATA.md)                           | Schema, blocos, links, ordem de migração.                                                                                                                                         |
| Layout e análise                                | [LAYOUT-E-ANALISE.md](LAYOUT-E-ANALISE.md)                         | Como o layout foi pensado.                                                                                                                                                        |

Dados fora dos docs: guias em `src/data/content/guides/*.json`; glossário em `src/data/glossary/terms.json`.

---

## Estrutura dos docs

```
docs/
├── README.md                           # Este arquivo (índice e status)
├── CONTENT-AS-DATA.md                  # Status conteúdo + schema + migração
├── ESTRUTURA-LOGICA.md                 # Avaliação da estrutura (jornada, seções)
├── PLAYBOOK-FULL-ANALYSIS.md           # Análise completa do playbook
├── PLAYBOOK-UX-VALOR-DEV.md            # UX e valor ao dev
├── PLAYBOOK_ANALISE_STAFF_PRINCIPAL.md # Análise nível Staff/Principal
├── ANALISE-EMOJI-SETA-ICONES.md        # Emoji/seta e ícones
├── ANALISE-IMPACTO-STAFF.md            # Impacto conteúdo Staff
├── ANALISE-NIVEL-STAFF.md              # Análise nível Staff
├── PROPOSTA-GLOSSARIO-CONCEITOS.md     # Mapeamento termo → guia/glossário
├── GLOSSARIO-BABY-STEPS-PLAN.md        # Plano em levas do glossário
├── LAYOUT-E-ANALISE.md                 # Layout e análise
├── ROADMAP.md                          # Roadmap do projeto
├── ux-mobile-menu.md                   # UX do menu mobile
└── adr/                                # Architecture Decision Records
    ├── README.md
    └── 001-visualizations-and-comparisons.md
```

---

## Planejamento e ADR

- **ROADMAP.md**: Roadmap e planejamento futuro.
- **adr/**: Architecture Decision Records – decisões arquiteturais e escolhas de tecnologia.
