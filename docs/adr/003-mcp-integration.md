# ADR-003: Integração MCP (Cursor / Context7)

**Status:** Implementado  
**Data:** 2025-03  
**Decisores:** Equipe Playbook

---

## Contexto

O playbook é documentação técnica. Desenvolvedores usam Cursor (e outros clientes MCP) para consultar docs durante o desenvolvimento. Queremos que o modelo tenha acesso ao conteúdo do playbook via chat.

## Problema

- O modelo não tem o playbook na memória
- Copiar/colar trechos manualmente é lento
- Busca em docs via chat precisa de uma interface estruturada

## Decisão

**Servidor MCP** (`mcp-server/`) que expõe:

- **Tools:** `playbook_search`, `playbook_get_guide`, etc.
- **Resources:** `playbook://guide/{slug}` — conteúdo em markdown
- **Dados:** mesmo JSON de `src/data/content/` copiado via `prepare-data`

Fluxo: `npm run prepare-data` (ou `postinstall`) copia `src/data/content/*` → `mcp-server/data/content/`. O servidor lê esses JSONs e serve como markdown para o cliente MCP.

## Alternativas descartadas

- **API REST do playbook:** MCP usa stdio, não HTTP; cliente já sabe falar MCP
- **Embeddings/search externo:** complexidade, custo; conteúdo estático = index simples basta
- **Symlink em vez de copy:** funciona em dev, mas build/deploy pode não ter permissão

## Consequências

- ✅ Modelo pode buscar e citar o playbook no Cursor
- ✅ Mesma fonte: app e MCP usam os mesmos JSON
- ❌ Sync manual ou via script (prepare-data); `postinstall` automatiza no clone
- ❌ Glossário (terms.json) não está exposto ainda; pode ser adicionado

## Links

- [mcp-server/README.md](../../mcp-server/README.md) — configuração
- [prepare-data.js](../../mcp-server/scripts/prepare-data.js) — script de sync
