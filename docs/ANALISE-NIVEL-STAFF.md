# Análise: o que falta no Playbook para nível Staff

Análise feita a partir da estrutura atual do conteúdo, navegação e guias. Foco em **roteiro por senioridade** e **arquitetura e segurança**.

---

## 1. O que já existe

### Estrutura atual

- **Jornada por tema** (6 blocos): Fundamentos → Construindo UI → Arquitetura de Entrega → Estrutura de Código → Escala & Times → Decisão & Referência.
- **Roadmap de Implementação**: 4 fases (Fundação, Otimização, Arquitetura, Escala) com checklists e métricas. Foco em **evolução do produto**, não em **nível da pessoa**.
- **Security Patterns**: uma página em "Estrutura de Código" (XSS, validação, storage, CSRF, CSP, rate limiting, OWASP). Conteúdo de **padrões de implementação**, não de decisão arquitetural de segurança.
- **Decisão & Referência**: Comparação, Roadmap, Migração, ADR, 19 Casos. Conteúdo típico de staff, mas sem um “caminho” explícito por senioridade.

### O que já é nível staff

- Decisão arquitetural (comparação, migração, ADR).
- Casos reais com fonte.
- Decision Wizard.
- Falta apenas **Frontend + IA** (já identificado antes).

---

## 2. Lacuna 1: Roteiro de estudo por senioridade

### Problema

Não existe um **roteiro segmentado por nível** (Júnior, Pleno, Sênior, Staff). Quem entra no playbook vê a jornada por **tema**, não por “o que eu devo dominar no meu nível”.

### Sugestão de conteúdo

Criar um guia **“Roteiro por senioridade”** (ou “Como estudar por nível”) que mapeie o conteúdo existente para cada nível. Exemplo de segmentação:

| Nível      | Foco do roteiro                           | Conteúdo sugerido (links para o que já existe)                                                                                                                                                 |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Júnior** | Fundamentos e entrega de valor em feature | Dependency Rule, DRY, KISS, YAGNI, Clean Code, Como Escolher (visão geral). SPA, Component-Driven. Security Patterns (noções de XSS/validação).                                                |
| **Pleno**  | Dono de fluxo e qualidade                 | Tudo do Júnior + Atomic Design, State Machines, SSR/SSG, PWA, Performance. Clean/Layered/Hexagonal, Repository. Security Patterns completo.                                                    |
| **Sênior** | Escala e decisão técnica                  | Tudo do Pleno + Monorepo, Micro-frontends, BFF, Feature Flags. Comparação de Arquiteturas, Roadmap de Implementação, Estratégias de Migração. 19 Casos (uso em decisão).                       |
| **Staff**  | Decisão, alinhamento e referência         | Tudo do Sênior + ADR, Casos como evidência, Decision Wizard para recomendações. (Futuro: Frontend + IA.) Foco em “como justificar e documentar” e em linguagem comum com negócio/stakeholders. |

### Onde colocar

- **Opção A:** Novo guia em **Decisão & Referência**, ex.: `/guides/study-roadmap` (“Roteiro por senioridade”).
- **Opção B:** Seção na **home** ou em **Comece aqui** com 4 cards (Júnior / Pleno / Sênior / Staff) linkando para esse guia ou para listas curtas de links por nível.

### Formato sugerido do guia

- Uma página por nível (ou seções na mesma página) com:
  - Objetivo do nível em uma frase.
  - Lista de guias/páginas do playbook na ordem sugerida.
  - “Próximo nível”: o que estudar quando estiver confortável.
- Manter tudo como **links para o conteúdo existente**, sem duplicar texto.

---

## 3. Lacuna 2: Arquitetura e segurança

### Problema

- **Security Patterns** cobre **como** implementar (XSS, CSP, validação, etc.), não **como** escolher e desenhar arquitetura com segurança em mente.
- Falta um eixo “arquitetura e segurança”: onde auth/tokens vivem, como BFF/edge mudam o desenho de segurança, trade-offs por estilo de arquitetura (SPA vs SSR vs BFF), e visão de ameaças no front.

### O que existe hoje

- `/patterns/security` – Security Patterns (implementação).
- Menções pontuais a segurança em JAMstack, PWA, SPA (ex.: “segurança de sobra”, “credenciais em localStorage”).
- Nenhum guia dedicado a **decisão arquitetural** em segurança.

### Sugestão de conteúdo

Criar um guia **“Arquitetura e segurança”** (ex.: `/guides/architecture-and-security`) com foco em **decisões** e **trade-offs**, não em código. Sugestão de tópicos:

1. **Onde a segurança vive por arquitetura**
   - SPA: token, storage, chamadas ao backend.
   - SSR/SSG: cookies httpOnly, CSRF, dados no server.
   - BFF: BFF como única superfície de API, redução de superfície de ataque no front.
   - Edge: auth no edge, limites e riscos.

2. **Trade-offs comuns**
   - Token no front (localStorage vs sessionStorage vs cookie).
   - Quando usar BFF “por segurança”.
   - CSP e arquitetura (inline scripts, frameworks, terceiros).

3. **Checklist de decisão**
   - Perguntas ao escolher arquitetura (onde ficam dados sensíveis, quem valida, quem autentica).
   - Referência ao OWASP Top 10 e ao que cada estilo de arquitetura ajuda a mitigar.

4. **Links**
   - Para Security Patterns (implementação).
   - Para BFF, SSR/SSG, SPA onde fizer sentido.

### Onde colocar na navegação

- **Decisão & Referência** (junto com ADR, migração, casos), ou
- **Estrutura de Código** (perto de Security Patterns), como “Arquitetura e segurança” (decisão) e Security Patterns (implementação).

---

## 4. Resumo: o que falta para nível staff

| Item                        | Situação atual                       | Ação sugerida                                                                                                   |
| --------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Roteiro por senioridade** | Não existe                           | Novo guia “Roteiro por senioridade” mapeando conteúdo existente para Júnior / Pleno / Sênior / Staff.           |
| **Arquitetura e segurança** | Só Security Patterns (implementação) | Novo guia “Arquitetura e segurança” com foco em decisões, trade-offs e “onde a segurança vive” por arquitetura. |
| **Frontend + IA**           | Não existe                           | Guia “Frontend + IA” (já planejado).                                                                            |

Com esses três blocos (roteiro por senioridade, arquitetura e segurança, Frontend + IA), o playbook cobre de forma explícita o que falta para **nível staff** e ainda oferece um caminho claro por senioridade.
