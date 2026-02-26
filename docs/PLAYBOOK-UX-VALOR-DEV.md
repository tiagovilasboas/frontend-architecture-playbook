# Playbook: UI/UX para máximo valor ao dev

Documento de referência para decisões de conteúdo e interface do playbook, com base na análise do playbook e em boas práticas de documentação técnica e DX (Developer Experience).

---

## 1. Princípios de valor ao desenvolvedor

### 1.1 O que o dev precisa (What / When / How)

| Necessidade           | No playbook hoje                                                         | Boas práticas (ref. pesquisa)                                             |
| --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **O quê** (conceito)  | Texto em hero/seções, "O que é" em JSON.                                 | Definição curta e escaneável; evitar blocos densos.                       |
| **Quando** (contexto) | ADR "Quando usar/Não usar"; study guide por nível; implícito em wizards. | Tornar explícito: "Use quando…", "Evite quando…", "Melhor para…".         |
| **Como** (prática)    | CodeExample, templates (ADR, MCP), exemplos em guias.                    | Exemplos interativos ou copy-paste; múltiplos níveis (básico → avançado). |

Documentação que separa claramente **o quê / quando / como** reduz tempo de busca e aumenta adoção (referência: APIs bem documentadas têm ~3x mais adoção; devs abandonam por doc ruim).

### 1.2 Escaneabilidade e hierarquia

- **Headings claros** — o dev encontra a seção sem ler tudo. No playbook: `section` com `title` e opcional `icon` já ajudam.
- **Bullets e listas** — preferir a listas longas de parágrafo. ContentRenderer: `list`, `iconCards`, `linkCards`.
- **Progressive disclosure** — mostrar o essencial primeiro; detalhe sob demanda (expandir código, "Ver mais"). CodeExample colapsável e seções bem nomeadas seguem isso.
- **Uma ideia por bloco** — evita parede de texto. JSON com blocos pequenos (text, alert, list, codeExample) favorece isso.

### 1.3 Conexão entre conceitos

- **Glossário** — termos técnicos com definição curta + **link para o guia** que aprofunda (ex.: "Hydration" → SSR & SSG). Padrão usado em MDN Glossary, UX Patterns Glossary (termo + tags/conceitos relacionados).
- **Cross-links no conteúdo** — "Ver Security Patterns para CSP" em vez de só "CSP". No playbook hoje: RelatedContent genérico; falta "Conceitos usados" ou "Leia também" contextual.
- **Next step explícito** — após ler um guia, sugerir "Próximo: ADR" ou "Aplicar: Decision Wizard". Study guide faz por nível; outros guias não.

### 1.4 Encontrar o conteúdo

- **Jornada clara** — menu por seção (Fundamentos → UI → Entrega → …) já existe; manter e reforçar.
- **Entrada por objetivo** — "Por onde começar" (study guide) por nível; "Como escolher arquitetura" (wizard). Glossário será entrada por **termo** ("o que é Hydration?").
- **Busca** — hoje só por título (Spotlight). Glossário pode ser índice pesquisável de conceitos; no futuro, full-text no corpo.
- **MCP** — uso no Cursor como referência; glossário em JSON permite servir termos via MCP ("o que o playbook diz sobre LCP?").

---

## 2. Como o glossário entrega valor

- **Reduz fricção** — dev ouve "hydration" ou "CLS" e quer uma definição rápida + onde aprofundar. Uma página única (Conceitos / Glossário) com definição + link para o guia atende.
- **Não duplica** — definição curta no glossário; detalhe, "quando" e "como" ficam nos guias. Glossário é **portal**, não substituto.
- **Agrupar por tema** — além de A–Z, agrupar por categoria (SSR/Hidratação, Performance, Segurança, Estado, etc.) ajuda quem explora por domínio (igual à proposta em PROPOSTA-GLOSSARIO-CONCEITOS.md).
- **Referências externas** — cada termo pode ter 1–2 links (MDN, web.dev, spec) para quem quer fonte canônica. Valor: confiança e aprofundamento.

---

## 3. Recomendações de UI para o glossário (quando implementado)

- **Lista escaneável** — cards ou linhas com: **Termo** | **Definição (1–2 frases)** | **Guia relacionado** (link) | **Referências** (opcional).
- **Filtro por categoria** — tabs ou select: "Todos" | "SSR & Entrega" | "Performance" | "Segurança" | "Estado" | etc., alinhado ao mapeamento do PROPOSTA-GLOSSARIO-CONCEITOS.
- **Link para guia** — botão ou link "Ver em SSR & SSG" ao lado do termo; mantém contexto e next step.
- **Progressive disclosure** — definição sempre visível; "Referências" e "Ver trecho no guia" podem ser expandíveis para não poluir.
- **Mobile** — mesma lista; filtro vira dropdown ou chips. Manter hierarquia (termo > definição > links).

---

## 4. Resumo: entregar melhor valor

| Ação                                                   | Impacto no valor ao dev                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| **Glossário com definição + link para guia**           | Encontra o conceito rápido e sabe onde aprofundar.                                   |
| **Referências externas (MDN, web.dev, spec)**          | Confiança e aprofundamento sem o playbook precisar ser enciclopédia.                 |
| **Tradução consistente (PT-BR)**                       | Acesso em português; termos técnicos em inglês quando forem jargão (Hydration, CLS). |
| **Conceitos no glossário em baby steps**               | Conteúdo de qualidade sem sobrecarregar; priorizar termos que já têm guia.           |
| **Cross-links nos guias** ("Ver glossário: Hydration") | Liga guia ↔ glossário; reforça jornada.                                             |
| **Next step / "Próximo" contextual**                   | Reduz "e agora?" após ler um guia.                                                   |

A análise completa do playbook está em **PLAYBOOK-FULL-ANALYSIS.md**. A proposta de termos e onde encaixam está em **PROPOSTA-GLOSSARIO-CONCEITOS.md**.
