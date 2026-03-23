# ADR-002: Content-as-Data (JSON como fonte única)

**Status:** Implementado  
**Data:** 2025-03  
**Decisores:** Equipe Playbook

---

## Contexto

O playbook tem 46+ páginas de conteúdo (guias, arquiteturas, padrões). Precisávamos de uma forma de manter texto e estrutura sem duplicar entre app web e outras consumidores (ex.: MCP no Cursor).

## Problema

- Manter MDX/TSX por página = 46+ componentes, difícil de escalar
- Duplicar conteúdo para MCP = drift, dois lugares para editar
- Sem schema = inconsistência, bugs em blocos desconhecidos

## Decisão

**JSON como fonte única.** Cada página é um arquivo em `src/data/content/{collection}/{slug}.json` com:

- `meta`: title, description
- `layout`: opções de UI (nav, related)
- `body`: array de blocos tipados (hero, section, alert, code, etc.)

O `ContentRenderer` renderiza qualquer JSON que siga o schema. O mesmo JSON alimenta a app e o MCP (via `prepare-data`).

## Alternativas descartadas

- **MDX:** mais flexível, mas parsing complexo e MCP teria que interpretar outro formato
- **CMS headless:** overkill para docs estáticos, dependência externa
- **Um componente por página:** não escala, duplicação de layout

## Consequências

- ✅ Uma fonte: edita JSON, app e MCP atualizam
- ✅ Schema tipado: validação em teste, blocos conhecidos
- ✅ Extensível: novo bloco = novo case no ContentRenderer
- ❌ Blocos complexos (wizard, comparador) continuam como componentes React chamados pelo JSON

## Links

- [CONTENT-AS-DATA.md](../CONTENT-AS-DATA.md) — documentação completa
- [content-schema.ts](../../src/lib/content-schema.ts) — tipos dos blocos
