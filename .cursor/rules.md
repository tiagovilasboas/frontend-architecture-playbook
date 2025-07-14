
## 📦 Regras para Exemplos de Código

### **Componente CodeExample**
- Use `<CodeExample title="..." code="..." />` para renderizar exemplos de código
- O componente aceita dois formatos:
  1. **Referência do JSON**: `code="Título do Exemplo"` (busca no JSON central)
  2. **Código inline**: `code={{ content: "código aqui" }}`

### **JSON Centralizado (`src/utils/code-examples.json`)**
- Estrutura: `{ file, title, description, code }`
- Use para exemplos reutilizáveis e complexos
- Mantenha exemplos simples inline nos arquivos `.tsx`

### **Quando usar cada abordagem:**
- **JSON**: Exemplos longos, reutilizáveis, com syntax highlighting
- **Inline**: Exemplos curtos, específicos do contexto, snippets simples

### **Padrões de Nomenclatura**
- Títulos únicos e descritivos
- Use o mesmo título no JSON e no componente
- Mantenha consistência entre arquivos

### **Manutenção**
- Adicione novos exemplos ao JSON quando necessário
- Mantenha o JSON organizado por arquivo de origem
- Teste sempre se os exemplos aparecem corretamente 