# Análise completa: Front-End Architecture Playbook vs referências

Análise comparativa com playbooks e documentação de excelência, identificando gaps e plano de ação para UI/UX.

---

## 1. Estado atual do playbook

### O que já está bom

| Aspecto                  | Estado                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Jornada clara**        | 7 seções em ordem lógica (Por onde começar → Fundamentos → UI → Entrega → Estrutura → Escala → Decisão)               |
| **Estrutura Diátaxis**   | Tutorials (study-guide), How-to (how-to-choose, wizard), Reference (cases, comparison), Explanation (dependency-rule) |
| **Busca rápida**         | Spotlight Cmd+K com todos os docs (títulos)                                                                           |
| **Prev/Next na jornada** | Setas fixas levam ao item anterior/próximo no fluxo                                                                   |
| **Design system**        | Mantine, dark/light, ícones Tabler, componentes consistentes                                                          |
| **Conteúdo estruturado** | JSON para parte dos guias (ContentRenderer), blocos reutilizáveis                                                     |
| **MCP**                  | Conteúdo servido via Cursor                                                                                           |
| **Casos com link**       | 19 casos com link do artigo original                                                                                  |

### Pontos fracos identificados

| Aspecto            | Problema                                                                           |
| ------------------ | ---------------------------------------------------------------------------------- |
| **Busca**          | Só título; não busca no corpo do texto ou conceitos                                |
| **Glossário**      | Proposta existe; página não implementada; sem entrada por termo                    |
| **Cross-links**    | RelatedContent genérico; falta "Conceitos usados", "Próximo passo" contextual      |
| **Mobile**         | Bottom nav leva para 1ª página de cada seção (arbitrário); drawer é o principal    |
| **Onboarding**     | Home densa; "Bora começar" repete Destaques; muita redundância                     |
| **Código**         | CodeExample colapsável existe; sem "Try it", sem copy one-click em todos os blocos |
| **Acessibilidade** | Breadcrumb simples; sem skip links; sem TOC em páginas longas                      |
| **Consistência**   | TSX vs JSON; GuideNavigation vs journey; GUIDE_NAV_SLUGS ≠ staff-\*                |

---

## 2. Comparativo com referências

### 2.1 Stripe Docs

| Padrão Stripe                         | Playbook hoje                | Gap                          |
| ------------------------------------- | ---------------------------- | ---------------------------- |
| Organização por produto + quickstarts | Por jornada temática         | Alinhado ao nosso caso       |
| Exemplos interativos "Try it"         | CodeExample estático         | Falta interatividade         |
| Copy one-click em blocos de código    | CodeHighlight sem botão copy | Baixo custo de implementar   |
| Busca + "Ask AI"                      | Só busca por título          | Full-text e AI como evolução |
| Markdoc (docs-as-code)                | JSON + ContentRenderer       | Equivalente em flexibilidade |
| Auth para API keys de teste           | N/A (conteúdo educativo)     | Não se aplica                |

**Prioridade Stripe:** Copy em blocos de código, exemplos copy-paste prontos.

---

### 2.2 Linear / Twilio Docs

| Padrão                                    | Playbook hoje                     | Gap                                     |
| ----------------------------------------- | --------------------------------- | --------------------------------------- |
| Organização por fluxo (workflow)          | Jornada linear por seção          | Ok; poderia ter entradas por "objetivo" |
| Getting Started curto (2–3 min)           | Study guide por nível; Home longa | Home poderia ser mais focada            |
| TOC automático em páginas longas          | Não existe                        | Falta TOC em docs longos                |
| Navegação consistente em todas as páginas | Sim, via DocsShell                | Ok                                      |

**Prioridade Linear/Twilio:** TOC em páginas longas, Getting Started mais enxuto na Home.

---

### 2.3 Notion / Backstage

| Padrão                             | Playbook hoje                        | Gap         |
| ---------------------------------- | ------------------------------------ | ----------- |
| Colaboração em tempo real          | Não se aplica                        | N/A         |
| Sidebar + TOC + ícones             | Breadcrumb + prev/next; sem TOC      | TOC falta   |
| Múltiplos caminhos para o conteúdo | Menu, Spotlight, study-guide, wizard | Ok          |
| Skip links para acessibilidade     | Não                                  | Recomendado |

**Prioridade:** TOC, skip links.

---

### 2.4 AWS Well-Architected / Playbooks operacionais

| Padrão                                               | Playbook hoje                                           | Gap                       |
| ---------------------------------------------------- | ------------------------------------------------------- | ------------------------- |
| Requirements, Constraints, Process Steps, Escalation | Guias com "O que é", "Quando", "Como"; ADR com template | Estrutura similar; ADR ok |
| Playbooks em código, triggers por cenário            | Wizard como "playbook" de decisão                       | Alinhado                  |
| Priorizar problemas frequentes                       | Cases com link; comparação visual                       | Ok                        |

**Prioridade:** Manter padrão; talvez "Playbook rápido" por cenário (ex.: "Migrando de monólito").

---

### 2.5 Framework Diátaxis (referência)

| Tipo            | O que é                        | Exemplos no playbook                        |
| --------------- | ------------------------------ | ------------------------------------------- |
| **Tutorial**    | Ensino prático para iniciantes | study-guide, dependency-rule                |
| **How-to**      | Tarefa para usuário competente | how-to-choose, wizard, migration-strategies |
| **Reference**   | Especificação técnica          | architecture-comparison, cases              |
| **Explanation** | Conceito e contexto            | ADR, glossário (proposto)                   |

O playbook cobre os 4 tipos; o que falta é **consistência** na estrutura de cada página (hero, O que é, Quando, Como, Referências).

---

## 3. Métricas de sucesso (referência pesquisa)

- ~93% dos devs citam documentação de qualidade como fator mais importante na adoção
- Exemplos em múltiplas linguagens: 5x mais adoção (não se aplica diretamente; nosso foco é conceitual)
- Exemplos desatualizados prejudicam mais que docs incompletas → manter exemplos vivos

---

## 4. Plano de ação priorizado

### Fase 1: Quick wins (1–2 sprints)

| #   | Ação                                  | Impacto                     | Esforço |
| --- | ------------------------------------- | --------------------------- | ------- |
| 1   | **Copy button em blocos de código**   | Alto (padrão Stripe)        | Baixo   |
| 2   | **Simplificar Mobile Bottom Nav**     | Médio (Início + Busca só)   | Baixo   |
| 3   | **TOC em páginas longas**             | Alto (navegação em doc)     | Médio   |
| 4   | **Skip link** ("Pular para conteúdo") | Médio (a11y)                | Baixo   |
| 5   | **Home mais enxuta**                  | Médio (reduzir redundância) | Médio   |

### Fase 2: Conteúdo e descoberta (2–3 sprints)

| #   | Ação                                        | Impacto                  | Esforço |
| --- | ------------------------------------------- | ------------------------ | ------- |
| 6   | **Glossário** (página + termos iniciais)    | Alto (entrada por termo) | Alto    |
| 7   | **Busca full-text** (body + títulos)        | Alto                     | Alto    |
| 8   | **"Próximo passo" contextual** em cada guia | Alto                     | Médio   |
| 9   | **Cross-links "Conceitos usados"**          | Médio                    | Médio   |

### Fase 3: Experiência avançada (3+ sprints)

| #   | Ação                                                           | Impacto            | Esforço |
| --- | -------------------------------------------------------------- | ------------------ | ------- |
| 10  | **Exemplos interativos** (Try it)                              | Médio              | Alto    |
| 11  | **Ask AI na busca**                                            | Alto (diferencial) | Alto    |
| 12  | **Landing pages por seção** (/guides, /architectures)          | Médio              | Médio   |
| 13  | **Padronizar estrutura** (O que/Quando/Como) em todos os guias | Alto               | Alto    |

---

## 5. Detalhamento das ações prioritárias

### 5.1 Copy button em blocos de código

- **Onde:** `CodeHighlight` e blocos `code` / `codeExample` no ContentRenderer
- **Como:** Botão no canto do bloco; ao clicar, copia para clipboard; feedback breve ("Copiado!")
- **Referência:** Stripe Docs, MDN

### 5.2 Simplificar Mobile Bottom Nav

- **Hoje:** Início, Guias, Arq., Padrões, Busca (Guias/Arq./Padrões levam à 1ª página)
- **Proposta:** Início + Busca (ou Início + Menu + Busca — 3 itens)
- **Rationale:** Evitar expectativa quebrada; menu drawer já tem navegação completa

### 5.3 TOC em páginas longas

- **Condição:** Doc com 3+ headings (h2/h3)
- **Posição:** Sidebar em desktop; drawer/collapsible em mobile
- **Comportamento:** Scroll spy (highlight do item atual)
- **Referência:** Linear Docs, Notion

### 5.4 Glossário

- **Dados:** `src/data/glossary/terms.json` (já existe parcialmente)
- **Rota:** `/guides/glossary` (ou `/conceitos`)
- **UI:** Lista escaneável; filtro por categoria; termo → definição curta + link para guia
- **Integração:** Link "Ver glossário" em guias; busca pode incluir termos

### 5.5 Busca full-text

- **Hoje:** Spotlight com `useNavigationActions` (títulos only)
- **Evolução:** Indexar body de JSON + extrair texto de TSX; pesquisar em ambos
- **Stack sugerida:** Pagefind, FlexSearch ou similar (client-side); ou Algolia se scale

### 5.6 Home mais enxuta

- **Problema:** "Bora começar", "O que tem pra você", "Destaques", "Por que isso te ajuda" têm overlap
- **Proposta:** Consolidar em 3 blocos: Hero + CTA / Jornada (3 cards) / Casos + CTA final
- **Manter:** Study guide, wizard, comparação como principais entradas

---

## 6. Resumo executivo

| Prioridade                | Ações                                                  |
| ------------------------- | ------------------------------------------------------ |
| **P0 (agora)**            | Copy em código, simplificar bottom nav, skip link      |
| **P1 (próximos sprints)** | TOC, glossário, home enxuta                            |
| **P2 (médio prazo)**      | Busca full-text, próximo passo contextual, cross-links |
| **P3 (longo prazo)**      | Try it, Ask AI, landing pages por seção                |

O playbook já está alinhado ao Diátaxis e a jornadas temáticas de referência. Os maiores gaps são **descoberta** (busca full-text, glossário), **navegação em doc** (TOC), **consistência** (copy, estrutura O que/Quando/Como) e **mobile** (bottom nav honesto). O plano acima prioriza impacto vs esforço e segue padrões de Stripe, Linear e AWS.

---

## 7. Referências

- [Diátaxis](https://diataxis.fr/) — framework de documentação
- [Stripe Docs](https://stripe.com/docs) — UI, exemplos, busca
- [Linear Docs](https://linear.app/docs) — fluxos, TOC
- [Backstage](https://backstage.io/) — portal de devs
- [AWS Well-Architected](https://wa.aws.amazon.com/wellarchitected/) — playbooks
- [GitHub – Documentation done right](https://github.blog/developer-skills/documentation-done-right-a-developers-guide/)
- **Internos:** `PLAYBOOK-FULL-ANALYSIS.md`, `PLAYBOOK-UX-VALOR-DEV.md`, `ESTRUTURA-LOGICA.md`
