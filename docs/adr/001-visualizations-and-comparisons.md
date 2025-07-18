# ADR-001: Visualizações e Comparações no Decision Wizard

**Status:** Proposto  
**Data:** 2024-12-19  
**Decisores:** Equipe Frontend Architecture Playbook

---

## 🎯 **Contexto**

O Decision Wizard atual (v2.0) oferece recomendações contextuais de arquitetura com scoring sofisticado, mas apresenta as informações apenas em formato textual. Para atingir o nível 10/10 de utilidade, precisamos adicionar visualizações que ajudem os usuários a:

1. **Comparar trade-offs** entre diferentes arquiteturas
2. **Entender o "porquê"** de forma visual
3. **Tomar decisões mais informadas** baseadas em dados visuais

---

## 🔍 **Problema**

### **Limitações Atuais:**

- ✅ Lógica de recomendação excelente
- ✅ Contexto rico e scoring inteligente
- ❌ **Falta de comparação visual** entre opções
- ❌ **Trade-offs não são claros** visualmente
- ❌ **Usuário não vê "por que não"** outras opções
- ❌ **Decisão baseada apenas em texto**

### **Feedback Implícito:**

- "Por que Clean Architecture e não Micro-frontends?"
- "Quais são os trade-offs exatos?"
- "Como essas arquiteturas se comparam em diferentes dimensões?"

---

## 🎯 **Decisão**

Implementar **4 visualizações principais** no Decision Wizard:

### **1. 📊 Radar Chart de Comparação**

```typescript
interface RadarData {
  pattern: string;
  dimensions: {
    complexity: number; // 1-10
    maintainability: number; // 1-10
    scalability: number; // 1-10
    performance: number; // 1-10
    learning_curve: number; // 1-10 (invertido)
    team_size_fit: number; // 1-10
  };
}
```

### **2. 🔄 Trade-offs Matrix**

```typescript
interface TradeOff {
  pattern: string;
  pros: string[];
  cons: string[];
  sweet_spot: string;
  avoid_when: string[];
}
```

### **3. ⏱️ Implementation Timeline**

```typescript
interface Timeline {
  pattern: string;
  phases: {
    setup: { duration: string; complexity: 'low' | 'medium' | 'high' };
    mvp: { duration: string; complexity: 'low' | 'medium' | 'high' };
    scale: { duration: string; complexity: 'low' | 'medium' | 'high' };
  };
}
```

### **4. 💰 ROI Estimation**

```typescript
interface ROIData {
  pattern: string;
  initial_cost: 'low' | 'medium' | 'high';
  long_term_benefits: 'low' | 'medium' | 'high';
  break_even: string; // "3-6 months"
  scenarios: {
    best_case: string;
    worst_case: string;
  };
}
```

---

## 🏗️ **Arquitetura da Solução**

### **Componentes Novos:**

```
src/components/interactive/visualizations/
├── RadarChart.tsx              → Recharts radar
├── TradeOffsMatrix.tsx         → Grid de pros/cons
├── ImplementationTimeline.tsx  → Gantt simples
├── ROIEstimation.tsx          → Cards com métricas
└── ComparisonView.tsx         → Container principal
```

### **Dados Estáticos:**

```
src/data/visualizations/
├── radar-data.ts      → Scores por dimensão
├── trade-offs.ts      → Pros/cons estruturados
├── timelines.ts       → Fases de implementação
└── roi-estimates.ts   → ROI por padrão
```

### **Integration Point:**

```typescript
// DecisionWizard.tsx - Step 6 (Results)
<Stack>
  {/* Recomendações atuais */}
  <RecommendationCards />

  {/* NOVO: Visualizações */}
  <ComparisonView
    patterns={recommendationResults}
    context={userAnswers}
  />
</Stack>
```

---

## 🎨 **Design System**

### **Cores por Dimensão:**

- **Complexity:** `red` (alto = ruim)
- **Maintainability:** `green` (alto = bom)
- **Scalability:** `blue` (alto = bom)
- **Performance:** `yellow` (alto = bom)
- **Learning Curve:** `orange` (alto = ruim)
- **Team Fit:** `purple` (contextual)

### **Componentes Mantine:**

- `Paper withBorder` para containers
- `Tabs` para alternar entre visualizações
- `Grid` para trade-offs matrix
- `Progress` para timelines
- `Badge` para métricas ROI

---

## 📱 **Responsividade**

### **Desktop (>768px):**

- Radar chart full size
- Trade-offs em grid 2x2
- Timeline horizontal

### **Mobile (<768px):**

- Radar chart compacto
- Trade-offs em accordion
- Timeline vertical
- Tabs para alternar visualizações

---

## 🧪 **Estratégia de Testes**

### **Unit Tests:**

```typescript
// RadarChart.test.tsx
- Renderiza corretamente com dados válidos
- Lida com dados ausentes gracefully
- Respeita tema dark/light

// TradeOffsMatrix.test.tsx
- Mostra pros/cons corretos por padrão
- Filtra baseado no contexto do usuário
- Responsivo em mobile

// ComparisonView.test.tsx
- Integra com recomendações do wizard
- Alterna entre visualizações
- Performance adequada
```

### **Integration Tests:**

```typescript
// DecisionWizard.integration.test.tsx
- Fluxo completo com visualizações
- Dados consistentes entre texto e charts
- Responsive behavior
```

---

## 📊 **Métricas de Sucesso**

### **Técnicas:**

- ⚡ **Performance:** Render < 100ms
- 📱 **Mobile:** Funcional em 320px+
- 🎨 **Accessibility:** AA compliance
- 🧪 **Coverage:** >95% dos componentes

### **UX:**

- 👀 **Engagement:** Tempo na página +30%
- 🎯 **Clareza:** "Entendi melhor" em feedback
- 🔄 **Reuso:** Usuários voltam ao wizard
- ⭐ **Satisfação:** Rating 9+ em pesquisas

---

## 🚫 **Alternativas Consideradas**

### **1. Apenas Texto Melhorado**

- ❌ Não resolve problema visual
- ❌ Continua difícil comparar
- ✅ Menor esforço de implementação

### **2. Visualizações Externas (D3.js)**

- ❌ Bundle size maior
- ❌ Complexity aumenta
- ✅ Flexibilidade máxima

### **3. Charts Simples (Chart.js)**

- ❌ Não integra bem com Mantine
- ❌ Customização limitada
- ✅ Menor learning curve

### **4. Recharts (ESCOLHIDA)**

- ✅ Integra bem com React/Mantine
- ✅ Bundle size razoável
- ✅ Customizável e responsivo
- ❌ Learning curve moderada

---

## 🔮 **Consequências**

### **Positivas:**

- ✅ **UX significativamente melhor**
- ✅ **Decisões mais informadas**
- ✅ **Ferramenta realmente 10/10**
- ✅ **Diferencial competitivo**

### **Negativas:**

- ❌ **Bundle size +~50kb** (Recharts)
- ❌ **Complexity de manutenção** (dados visuais)
- ❌ **Tempo de desenvolvimento** (~2-3 semanas)

### **Riscos:**

- 🔻 **Performance mobile** se mal otimizado
- 🔻 **Maintenance overhead** dos dados
- 🔻 **Over-engineering** se não adicionar valor real

---

## 📅 **Timeline**

### **Fase 1: Foundation (1 semana)**

- Setup Recharts
- RadarChart básico
- Dados estáticos iniciais

### **Fase 2: Core Features (1 semana)**

- Trade-offs Matrix
- Implementation Timeline
- Integration com wizard

### **Fase 3: Polish (1 semana)**

- ROI Estimation
- Mobile optimization
- Testes completos

---

## 🔗 **Links Relacionados**

- [Recharts Documentation](https://recharts.org/)
- [Mantine Charts](https://mantine.dev/charts/getting-started/)
- [Decision Wizard Current Implementation](../src/components/interactive/DecisionWizard.tsx)
- [Roadmap 2025](./ROADMAP.md)
