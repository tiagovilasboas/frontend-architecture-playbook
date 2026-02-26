# Análise: emoji/seta duplicada e alinhamento de ícones

## 1. Emoji e seta duplicada

### 1.1 Onde há duplicata (ícone + emoji ou ícone + seta)

| Local                          | Problema                                                                                                                                                                                                                               | Ação                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **GuideNavigation.tsx**        | Botão "Anterior" tem `leftSection={<IconArrowLeft />}` e texto `"← {prevGuide.title}"`. Botão "Próximo" tem `rightSection={IconArrowLeft (rotacionado)}` e texto `"{nextGuide.title} →"`. Seta aparece duas vezes (ícone + caractere). | Remover `← ` e ` →` do texto dos botões.                                   |
| **CaseCard.tsx**               | Alert "Impacto Real" já usa `icon={<IconTrendingUp />}` e o título do bloco é "📈 Impacto Real". Emoji duplica o conceito.                                                                                                             | Remover "📈 " do título.                                                   |
| **CaseCard.tsx**               | Bloco "Referência" tem título "📚 Referência:" e o link já usa `IconExternalLink`.                                                                                                                                                     | Remover "📚 " do título.                                                   |
| **CaseCard.tsx**               | Disclaimer usa "ℹ️ Nota:" e o Alert pode usar ícone de info.                                                                                                                                                                           | Remover "ℹ️ " e usar ícone de info no Alert (opcional).                    |
| **PerformanceMetrics.tsx**     | Badge "✅ Validado" — emoji como único indicador; pode usar ícone no Badge.                                                                                                                                                            | Substituir por Badge com `leftSection={<IconCheck />}` e texto "Validado". |
| **ArchitectureComparison.tsx** | "✅ Métricas Validadas" e "✅ Validado" — texto com emoji sem ícone Mantine.                                                                                                                                                           | Substituir por ícone (IconCheck) + texto sem emoji.                        |

### 1.2 Onde emoji/seta é o único indicador (sem ícone Mantine)

- **DependencyRuleDiagram.tsx**: texto no canvas "✅ Dependências para dentro" / "❌ Dependências invertidas". Não usa componente com ícone; emoji é intencional no desenho.
- **kiss.tsx / yagni.tsx**: Badge com ❌ (RUIM) e ✅ (BOM) nos exemplos. Podem ser trocados por `ThemeIcon` com `IconX`/`IconCheck` para consistência com o resto do playbook.
- **microservices-frontend.tsx**: List.Item com "✅ Type safety" / "❌ Deploy coupling" etc. — conteúdo de lista, não há ícone no item.
- **code-examples (JSON)**: comentários em código "// ❌ RUIM" e "// ✅ BOM" — faz parte do exemplo de código, não da UI; manter.
- **Anchor "← Voltar ao hub"** nos JSONs: o bloco `anchor` não recebe ícone no ContentRenderer; o "←" é o único indicador visual. Opcional: adicionar ícone de voltar no renderer para anchors que tenham "Voltar" no label e aí remover "←" do texto.

### 1.3 Setas em conteúdo (não duplicadas)

- **GuideNavigation**: corrigir duplicata (ícone + ←/→) como acima.
- **PerformanceMetrics.tsx** linha 200: `<Text>→</Text>` entre "before" e "after" — seta única como separador; OK.
- Uso de "→" em textos (ex.: "CRA → Next.js", "Proposto → discussão") — parte do conteúdo, não da UI de ícones; OK.

---

## 2. Alinhamento dos ícones (esquerda e topo)

### 2.1 ContentRenderer (content-driven)

| Bloco            | Alinhamento                                                           | Observação                             |
| ---------------- | --------------------------------------------------------------------- | -------------------------------------- |
| **hero**         | `Group` com ThemeIcon à esquerda, depois título/subtítulo.            | Ícone à esquerda e no topo da linha. ✓ |
| **section**      | `Group` com ThemeIcon à esquerda, depois título.                      | Ícone à esquerda e no topo. ✓          |
| **list**         | Ícone no `List` (ThemeIcon) à esquerda de cada item.                  | ✓                                      |
| **alert**        | Ícone do Alert (Mantine) à esquerda.                                  | ✓                                      |
| **linkCards**    | Cada card: `Group` com ThemeIcon à esquerda, depois título/descrição. | Ícone à esquerda e no topo do card. ✓  |
| **iconCards**    | Idem: `Group` com ThemeIcon à esquerda, depois título/descrição.      | ✓                                      |
| **richCardGrid** | `Group` com ThemeIcon à esquerda, depois título/subtítulo.            | ✓                                      |

Conclusão: nos blocos do ContentRenderer que têm ícone, ele está sempre à **esquerda** e no **topo** da linha/card.

### 2.2 CodeExample

- **Layout**: `Group` com [Chevron (expandir), IconCode, Título]. Tudo na mesma linha, no topo do Paper.
- Chevron e ícone de código estão à **esquerda** e no **topo**. ✓

### 2.3 Outros componentes

| Componente                 | Alinhamento                                            | Observação                                      |
| -------------------------- | ------------------------------------------------------ | ----------------------------------------------- |
| **StatsCard** (horizontal) | `Group` com ThemeIcon à esquerda, depois valor/label.  | ✓ Esquerda e topo.                              |
| **StatsCard** (vertical)   | ThemeIcon com `margin: 0 auto` e `ta="center"`.        | Ícone **centralizado** no topo, não à esquerda. |
| **FeatureCard**            | Depende do layout; verificar se ícone é topo-esquerda. | -                                               |
| **CaseCard**               | Alert usa ícone padrão do Mantine (esquerda).          | ✓                                               |

Resumo: a única exceção ao “esquerda + topo” é o **StatsCard em layout vertical**, onde o ícone fica centralizado no topo. Se a regra for “sempre esquerda e topo”, vale ajustar o StatsCard vertical para alinhar o ícone à esquerda (por exemplo, usando `Group` com ícone + Stack em vez de centralizar).

---

## 3. Ações recomendadas (resumo)

1. **Corrigir duplicatas** (feito)
   - GuideNavigation: remover "← " e " →" do texto dos botões. ✓
   - CaseCard: remover "📈 ", "📚 ", "ℹ️ " dos títulos. ✓
   - PerformanceMetrics: Badge "Validado" com IconCheck; getImpactIcon com ícones (IconTrendingUp, etc.) em vez de emoji. ✓
   - ArchitectureComparison (component): "Métricas Validadas" e Badge "Validado" com ícone. ✓
   - **architecture-comparison.tsx** (guia): botões "Vantagens/Desvantagens/Melhor para/Evite quando" com leftSection em emoji → trocados por IconCheck, IconX, IconTarget, IconAlertTriangle; getComparisonIcon() passa a retornar componentes em vez de emoji; "🎯 Foco Front-End" removido (Alert já tem IconBulb). ✓
   - **cases.tsx**: "📚 Fonte Principal" removido (Alert já tem IconCode). ✓

2. **Opcional**
   - kiss.tsx / yagni.tsx: trocar emoji ❌/✅ no Badge por ThemeIcon (IconX / IconCheck).
   - StatsCard vertical: alinhar ícone à esquerda em vez de centralizar.
   - Anchors "← Voltar": adicionar ícone de voltar no ContentRenderer e remover "←" dos labels nos JSONs.
