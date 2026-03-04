# ADR-002: State Management: Zustand vs Context API

**Status:** Aceito  
**Data:** 2025-01-10  
**Decisores:** Frontend Team

---

## Contexto

O playbook precisa de uma solução de state management para UI state compartilhado (tema, preferências do usuário, estado de navegação) e para features interativas como o Decision Wizard e o Glossário. As opções principais avaliadas foram:

- **Context API** (nativo do React, zero dependência)
- **Zustand** (biblioteca leve, ~1 kB gzipped)
- **Redux Toolkit** (solução completa, ~10 kB gzipped)
- **Jotai** (atomic state, ~3 kB gzipped)

O projeto usa React 19, Vite, TypeScript e Mantine. O time é pequeno e o produto tem baixa complexidade de estado (sem transações otimistas pesadas, sem sincronização offline, sem estado de servidor gerenciado no cliente).

---

## Decisão

Vamos adotar **Zustand** para estado global de UI e **Context API** para estado local de componente/seção.

- **Zustand** gerencia estado que cruza árvores de componentes (tema selecionado pelo usuário, filtros de busca do glossário, progresso do wizard).
- **Context API** é suficiente para estado que pertence a um único sub-tree (ex.: estado do formulário de um step do wizard, configurações de um componente isolado).
- **Server state** (dados do glossário, guias) é carregado via JSON estático em build time — não há necessidade de React Query ou SWR neste momento.

---

## Consequências

### Positivas

- Bundle mínimo: Zustand adiciona < 1 kB gzipped ao bundle.
- API simples: stores são funções TypeScript puras, sem boilerplate de actions/reducers.
- Sem Provider hell: stores do Zustand são acessíveis fora da árvore React, facilitando uso em utilitários e testes.
- Devtools prontos: integração com Redux DevTools via middleware `devtools`.
- Escalável: se o estado crescer, basta criar novos stores sem refatorar os existentes.

### Negativas / Trade-offs

- Mais uma dependência externa (mesmo que pequena).
- Time precisa de disciplina para não criar stores para tudo — estado local deve continuar local (useState / useReducer).
- Context API pode causar re-renders desnecessários se não for usada com `useMemo`/`useCallback` — a regra de ouro: prefira Zustand para estado mutável e frequentemente atualizado.

### Neutras / Observações

- Redux Toolkit foi descartado por over-engineering para o tamanho atual do projeto.
- Jotai foi descartado pela menor adoção na comunidade e pela curva de aprendizado diferente sem ganho real para este contexto.
- A decisão é revisável: se o produto crescer para estado de servidor complexo, avaliar React Query + Zustand.
- ADR relacionado: [001 — Visualizações e Comparações](./001-visualizations-and-comparisons.md) (usa estado do wizard).

---

## Alternativas Consideradas

| Opção             | Prós                                | Contras                                          | Decisão      |
| ----------------- | ----------------------------------- | ------------------------------------------------ | ------------ |
| **Context API**   | Zero dependência, nativo React      | Re-renders, verboso para estado mutável global   | Parcial ✅   |
| **Zustand**       | Leve, simples, TypeScript first     | Dependência extra                                | Principal ✅ |
| **Redux Toolkit** | Devtools maduras, padrão de mercado | Boilerplate, bundle maior, over-engineering aqui | Rejeitado ❌ |
| **Jotai**         | Atômico, re-renders precisos        | Curva diferente, menor ecossistema para Mantine  | Rejeitado ❌ |

---

## Referências

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Zustand vs Context API — When to use which](https://blog.logrocket.com/zustand-vs-react-context/)
- [React Context API docs](https://react.dev/reference/react/createContext)
- [Guia State Management no Playbook](/guides/state-management)
