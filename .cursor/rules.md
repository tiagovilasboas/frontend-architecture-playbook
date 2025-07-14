
## 📦 Regras para Exemplos de Código

- **Todos os exemplos de código devem ser extraídos para um arquivo JSON central** (ex: `src/utils/code-examples.json`).
- **Renderize exemplos dinamicamente usando o componente `<CodeExample />`**.
- **Não é permitido deixar blocos de código estáticos** nos arquivos de padrão (ex: `src/content/patterns/*.tsx`).
- Sempre importar e mapear os exemplos do JSON.
- O JSON deve conter: `file`, `title`, `description` (opcional) e `code` (string).
- O objetivo é facilitar manutenção, tradução e reuso dos exemplos. 