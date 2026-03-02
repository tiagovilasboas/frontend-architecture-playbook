# ADRs — Architecture Decision Records

Decisões arquiteturais que a gente tomou (ou está propondo). Quando alguém perguntar "por que a gente fez assim?", a resposta começa aqui.

## O que é um ADR?

Um ADR documenta uma decisão importante com:

- **Contexto** — o que tava na mesa
- **Problema** — o que a gente queria resolver
- **Alternativas** — o que foi considerado e descartado
- **Decisão** — o que a gente escolheu e por quê
- **Consequências** — o que ganhamos (e o que perdemos)

Sem enrolação. Objetivo: daqui a 6 meses qualquer um entende por que a decisão foi tomada.

## Índice

| ID                                             | Status   | Título                                         | Data       | Owner         |
| ---------------------------------------------- | -------- | ---------------------------------------------- | ---------- | ------------- |
| [001](./001-visualizations-and-comparisons.md) | Proposto | Visualizações e Comparações no Decision Wizard | 2024-12-19 | Frontend Team |

## Status

- **Proposto** — em discussão / planejamento
- **Aceito** — aprovado, em implementação
- **Implementado** — feito e em produção
- **Rejeitado** — decidimos não fazer
- **Superseded** — substituído por outra decisão

## Processo (resumido)

1. **Criar:** copiar o template, preencher contexto + decisão + consequências.
2. **Review:** PR, feedback do time, validação técnica.
3. **Aprovar:** merge, atualizar status, avisar quem precisa saber.
4. **Implementar:** issues/PRs atrelados; depois, lessons learned se fizer sentido.

## Quando criar um ADR?

**Criar** quando for:

- Escolha de tech relevante (React vs Vue, lib de gráficos, etc.)
- Padrão arquitetural (Clean Architecture, micro-frontends, estrutura de pastas)
- Estratégia de teste ou trade-off grande de performance/UX

**Não criar** para:

- Bug fix, refactor pequeno, decisão fácil de reverter, preferência pessoal de código

## Template e links

- Novo ADR: use o [template](./template.md) (se existir) ou espelhe o 001.
- [Roadmap](../ROADMAP.md) — planejamento do projeto
- [Docs](../README.md) — índice da documentação
