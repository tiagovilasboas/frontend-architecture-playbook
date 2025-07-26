# 📋 Architecture Decision Records (ADRs)

Este diretório contém todas as decisões arquiteturais importantes do projeto Frontend Architecture Playbook.

## 🎯 **O que são ADRs?**

Architecture Decision Records (ADRs) documentam decisões arquiteturais importantes, incluindo:

- **Contexto** da decisão
- **Problema** que estava sendo resolvido
- **Alternativas** consideradas
- **Decisão** tomada e justificativa
- **Consequências** esperadas

## 📚 **Índice de ADRs**

| ID                                             | Status      | Título                                         | Data       | Owner         |
| ---------------------------------------------- | ----------- | ---------------------------------------------- | ---------- | ------------- |
| [001](./001-visualizations-and-comparisons.md) | 🎯 Proposto | Visualizações e Comparações no Decision Wizard | 2024-12-19 | Frontend Team |

## 📊 **Status Legend**

- 🎯 **Proposto:** Em discussão/planejamento
- ✅ **Aceito:** Aprovado e em implementação
- 🚀 **Implementado:** Concluído e em produção
- ❌ **Rejeitado:** Decidido não implementar
- 📄 **Superseded:** Substituído por outra decisão

## 🔄 **Processo de ADR**

### **1. Criação**

```bash
# Criar nova ADR
cp docs/adr/template.md docs/adr/XXX-titulo-da-decisao.md
```

### **2. Review**

- Discussão em PRs
- Feedback da equipe
- Validação técnica

### **3. Aprovação**

- Merge do PR
- Update do status
- Comunicação para a equipe

### **4. Implementação**

- Tracking via issues/PRs
- Update de progresso
- Lessons learned

## 🎯 **Quando criar uma ADR?**

### **Criar ADR para:**

- ✅ Escolhas de tecnologia major (React vs Vue)
- ✅ Padrões arquiteturais (Clean Architecture, Micro-frontends)
- ✅ Estrutura de pastas/organização
- ✅ Estratégias de teste
- ✅ Performance/UX trade-offs significativos

### **Não criar ADR para:**

- ❌ Bugs fixes rotineiros
- ❌ Pequenos refactors
- ❌ Decisões facilmente reversíveis
- ❌ Preferências pessoais de código

## 📝 **Template**

Para criar uma nova ADR, use o [template padrão](./template.md).

## 🔗 **Links Relacionados**

- [Roadmap do Projeto](../ROADMAP.md)
- [Documentação Técnica](../README.md)
- [Contributing Guidelines](../../.github/CONTRIBUTING.md)
