# 🎨 Análise de Harmonia de Cores - Front-End Architecture Playbook

## 📊 Situação Atual

### ✅ Cores do Tema (theme.ts)

- **Brand**: Tons de cinza neutro (slate) - `#f8fafc` até `#0f172a`
- **Accent**: Tons de amarelo/laranja (amber) - `#fef3c7` até `#451a03`
- **Primary Color**: `brand` (cinza)

### ⚠️ Inconsistências Identificadas

#### 1. **NeuralNetworkCanvas** (Alta Prioridade)

- **Problema**: Usa azul `rgba(34, 139, 230)` que não está no tema
- **Background**: Azul escuro/claro (`rgb(12, 18, 28)` / `rgb(240, 245, 252)`) não alinhado com brand
- **Impacto**: Elemento visual principal não segue a paleta do tema

#### 2. **NavMenu / MobileNavMenu** (Média Prioridade)

- **Problema**: Usa cores Mantine padrão (blue-6, teal-6, green-6, violet-6, cyan-6, orange-6, red-6, purple-6)
- **Impacto**: Ícones de navegação não seguem brand/accent

#### 3. **Alerts e Badges nos Guias** (Média Prioridade)

- **Problema**: Mistura brand, blue, green, red, yellow, orange, purple sem padrão claro
- **Exemplos**:
  - `Alert color="brand"` ✅
  - `Alert color="blue"` ⚠️
  - `Alert color="green"` ✅ (semântico - sucesso)
  - `Alert color="red"` ✅ (semântico - erro)
  - `Alert color="yellow"` ⚠️
  - `Alert color="orange"` ⚠️
  - `Alert color="purple"` ⚠️

#### 4. **Diagramas Canvas** (Baixa Prioridade)

- **Status**: Verde/vermelho hardcoded para correto/incorreto - **OK** (semântico)
- **Sugestão**: Usar brand para elementos neutros (fill, borders secundários)

---

## 🎯 Proposta de Harmonização

### 1. **Neural Network Canvas**

**Mudança**: Usar brand (slate) em vez de azul

```tsx
// Antes
const nodeColor = isDark
  ? 'rgba(34, 139, 230, 0.7)'
  : 'rgba(34, 139, 230, 0.5)';
const bgColor = isDark ? 'rgb(12, 18, 28)' : 'rgb(240, 245, 252)';

// Depois - usar brand do tema
const nodeColor = isDark
  ? 'rgba(71, 85, 105, 0.6)' // brand-6 com opacidade
  : 'rgba(148, 163, 184, 0.5)'; // brand-4 com opacidade
const bgColor = isDark
  ? 'rgb(15, 23, 42)' // brand-9
  : 'rgb(248, 250, 252)'; // brand-0
```

**Benefício**: Neural network alinhada com a paleta do tema

---

### 2. **NavMenu / MobileNavMenu**

**Mudança**: Usar brand/accent com variações de saturação

```tsx
// Estratégia: usar brand como base, accent para destaques
- Guides: brand-6 (cinza neutro)
- Architectures: accent-6 (amarelo/laranja) para destaques
- Patterns: brand-5 (cinza médio)
- Techniques: accent-5 (amarelo médio)
- Best Practices: brand-7 (cinza escuro)
```

**Alternativa**: Manter cores semânticas mas com menor saturação, ou usar brand com diferentes opacidades

---

### 3. **Alerts e Badges - Padrão Semântico**

**Proposta**: Sistema consistente baseado em semântica

```tsx
// Info / Dica / Explicação
<Alert color="brand" /> ou <Alert color="blue" /> (se brand muito neutro)

// Sucesso / Correto
<Alert color="green" /> ✅ (manter - semântico)

// Erro / Aviso crítico
<Alert color="red" /> ✅ (manter - semântico)

// Aviso / Atenção
<Alert color="accent" /> ou <Alert color="yellow" /> (usar accent do tema)

// Destaque / Importante
<Alert color="accent" /> (amarelo/laranja do tema)
```

**Regra**:

- **Brand** para info neutra
- **Accent** para warnings/destaques
- **Green/Red** para sucesso/erro (semântico - manter)
- **Evitar** blue, purple, orange, yellow hardcoded quando não semântico

---

### 4. **Diagramas Canvas**

**Status**: Verde/vermelho para correto/incorreto está OK (semântico)

**Sugestão opcional**:

- Usar brand para fill neutro (já está usando `rgba(30, 41, 59, 0.5)` que é próximo de brand-7)
- Manter verde/vermelho para borders/setas (semântico)

---

## 📋 Checklist de Implementação

- [ ] Atualizar NeuralNetworkCanvas para usar brand em vez de azul
- [ ] Revisar NavMenu/MobileNavMenu - usar brand/accent
- [ ] Padronizar Alerts: brand para info, accent para warnings, green/red para sucesso/erro
- [ ] Revisar Badges nos guias - seguir padrão semântico
- [ ] Testar dark/light mode após mudanças
- [ ] Verificar contraste e acessibilidade

---

## 🎨 Paleta Final Proposta

### Cores Principais

- **Brand (Slate)**: Cinza neutro - cor principal
- **Accent (Amber)**: Amarelo/laranja - destaques, warnings

### Cores Semânticas (manter)

- **Green**: Sucesso, correto
- **Red**: Erro, incorreto, crítico

### Uso

- **Backgrounds**: Brand (slate)
- **Destaques**: Accent (amber)
- **Neural Network**: Brand com variações
- **Navegação**: Brand com accent para destaques
- **Alerts**: Brand (info), Accent (warning), Green (sucesso), Red (erro)

---

## 💡 Notas

- **Semântica > Decoração**: Verde/vermelho em diagramas (correto/incorreto) é semântico e deve ser mantido
- **Consistência**: Priorizar brand/accent do tema em vez de cores Mantine padrão
- **Dark Mode**: Garantir que todas as mudanças funcionem bem em dark/light mode
