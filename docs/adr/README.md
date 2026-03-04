# ADRs — Architecture Decision Records

Decisões arquiteturais que a gente tomou (ou está propondo). Quando alguém perguntar "por que a gente fez assim?", a resposta começa aqui.

## O que é um ADR?

Usamos o formato **Michael Nygard** — cada ADR documenta uma decisão com quatro seções obrigatórias:

| Seção             | O que vai aqui                                                                 |
| ----------------- | ------------------------------------------------------------------------------ |
| **Status**        | `Proposto` / `Aceito` / `Implementado` / `Rejeitado` / `Superseded by ADR-XXX` |
| **Contexto**      | O que motivou a decisão: problema, restrições, forças em jogo                  |
| **Decisão**       | A resposta ativa na voz afirmativa: "Vamos usar X porque Y."                   |
| **Consequências** | O que muda depois — positivo, negativo, trade-offs, dívida técnica aceita      |

Sem enrolação. Objetivo: daqui a 6 meses qualquer um entende por que a decisão foi tomada.

## Template

```markdown
# ADR-NNN: Título Curto e Descritivo

**Status:** Proposto | Aceito | Implementado | Rejeitado | Superseded by ADR-NNN
**Data:** YYYY-MM-DD
**Decisores:** Time / pessoa responsável

## Contexto

Descreva o problema, as forças em jogo, restrições técnicas ou de negócio.
Seja factual. Não inclua a solução aqui.

## Decisão

"Vamos adotar X."
Explique o raciocínio central em 2-5 frases.

## Consequências

### Positivas

- ...

### Negativas / Trade-offs

- ...

### Neutras / Observações

- ...
```

## Índice

| ID                                             | Status   | Título                                         | Data       | Owner         |
| ---------------------------------------------- | -------- | ---------------------------------------------- | ---------- | ------------- |
| [001](./001-visualizations-and-comparisons.md) | Proposto | Visualizações e Comparações no Decision Wizard | 2024-12-19 | Frontend Team |
| [002](./002-state-management.md)               | Aceito   | State Management: Zustand vs Context API       | 2025-01-10 | Frontend Team |

## Status

- **Proposto** — em discussão / planejamento
- **Aceito** — aprovado, em implementação
- **Implementado** — feito e em produção
- **Rejeitado** — decidimos não fazer
- **Superseded** — substituído por outra decisão (referenciar o ADR novo)

## Processo (resumido)

1. **Criar:** copiar o template acima, preencher todas as seções, abrir PR.
2. **Review:** PR, feedback do time, validação técnica.
3. **Aprovar:** merge, atualizar status para `Aceito`.
4. **Implementar:** issues/PRs atrelados; depois, atualizar status para `Implementado`.

## Quando criar um ADR?

**Criar** quando for:

- Escolha de tech relevante (React vs Vue, lib de gráficos, etc.)
- Padrão arquitetural (Clean Architecture, micro-frontends, estrutura de pastas)
- Estratégia de state management ou trade-off grande de performance/UX
- Qualquer decisão cujas consequências durem mais de 3 meses

**Não criar** para:

- Bug fix, refactor pequeno, decisão fácil de reverter, preferência pessoal de código

## Links

- [Roadmap](../ROADMAP.md) — planejamento do projeto
- [Docs](../README.md) — índice da documentação
