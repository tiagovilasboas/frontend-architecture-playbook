---
slug: layered-architecture
title: "Arquitetura em Camadas (Layered Architecture)"
description: "Resumo detalhado do boilerplate React Layered Architecture com princípios SRP, Clean Architecture e organização em módulos, pages e shared."
---

# React Layered Boilerplate

Um boilerplate moderno, minimalista e escalável para aplicações **React + TypeScript**, seguindo princípios de **Clean Architecture** e **Single-Responsibility (SRP)**.  
Esta página replica o conteúdo principal do repositório [`tiagovilasboas/react-layered-boilerplate`](https://github.com/tiagovilasboas/react-layered-boilerplate) de onde extraímos nossas ideias de organização.

## Índice

1. [Começando Rápido](#começando-rápido)  
2. [Tecnologias](#tecnologias)  
3. [Arquitetura em Camadas](#arquitetura-em-camadas)  
4. [Scripts](#scripts)  
5. [Estrutura de Pastas](#estrutura-de-pastas)  
6. [Testes](#testes)  
7. [Contribuindo](#contribuindo)

## Começando Rápido

```bash
# clone o repositório
git clone https://github.com/tiagovilasboas/react-layered-boilerplate.git

# entre na pasta
cd react-layered-boilerplate

# instale as dependências
pnpm install   # ou npm / yarn

# rode em modo desenvolvimento
pnpm dev
```

## Tecnologias

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 19 | Biblioteca para interfaces |
| TypeScript | 5 | Tipagem estática |
| Webpack | 5 | Bundler e dev-server |
| Styled-components | 6 | CSS-in-JS |
| Vitest | 3 | Testes unitários |
| ESLint | 9 | Linter |
| Prettier | 3 | Formatação |

## Arquitetura em Camadas

O código é organizado em **três grandes camadas horizontais** que se comunicam de fora para dentro:

```text
PAGES   ->   MODULES   ->   SHARED
```

1. **Pages** — raiz de composição e roteamento. **Sem lógica de negócio.**  
2. **Modules (Features)** — pastas autocontidas que agrupam:
   * `components/` widgets específicos da feature  
   * `hooks/` regras de UI / estado da feature  
   * `service/` (Repository) integra APIs/IndexedDB convertendo DTO ⇄ model  
   * `utils/` helpers puros
3. **Shared/Core** — utilitários, temas, tipos globais.

### Regra de Dependência

```
Components  -->  Hooks  -->  Services  -->  API
(UI Layer)      (Logic)    (Data)
```

* Components não importam Services.  
* Hooks podem importar Services, nunca Pages.  
* Services não importam nada de UI.

### Benefícios

* **Inversão de dependência**: UI não conhece detalhes de dados.  
* **Testabilidade**: cada camada testada isoladamente.  
* **Flexibilidade**: Repository pode trocar fetch ↔ GraphQL sem tocar em UI.  
* **Manutenibilidade**: mudanças em uma camada não propagam globalmente.

## Scripts

| Script | O que faz |
|--------|-----------|
| `pnpm dev` | Inicia o server de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm test` | Executa testes com cobertura |
| `pnpm lint` | Roda o ESLint |
| `pnpm format` | Formata código com Prettier |
| `pnpm type-check` | Checagem de tipos TS |

## Estrutura de Pastas

```text
src/
├── components/          # Componentes globais
├── hooks/               # Hooks globais
├── modules/             # Features
│   └── example-module/
│       ├── components/
│       ├── hooks/
│       ├── service/
│       ├── utils/
│       └── index.ts
├── pages/               # Composition root / Rotas
├── assets/              # Imagens, ícones
├── types/               # Tipos TypeScript
└── setupTests.ts        # Setup Vitest
```

## Alias de Importação

Graças à configuração de **`tsconfig.json`** e **Webpack aliases**, você importa módulos usando caminhos encurtados:

```ts
import { Button } from '@/components/Button';
```

Isso evita caminhos relativos longos (`../../../../`) e facilita a refatoração.

## Observações

* O boilerplate é **enxuto de propósito**. Ferramentas como Docker, CI/CD, análise de bundle e estratégia de deploy podem ser adicionadas conforme a necessidade.  
* Sinta-se à vontade para **adaptar a estrutura** de pastas à medida que a aplicação cresce.  
* O foco é demonstrar **princípios de arquitetura**, não impor dependências — substitua Webpack por Vite, Styled-components por Tailwind, etc., conservando a separação de responsabilidades.

## Testes

Os testes utilizam **Vitest + Testing Library**.  
Setup global em `src/setupTests.ts`.

## Contribuindo

1. Fork → `git checkout -b minha-feature`  
2. Commit → `git commit -m 'feat: Minha feature'`  
3. Push → `git push origin minha-feature`  
4. Abra um Pull Request ✨

---

> Conteúdo originalmente criado por **Tiago Vilas Boas**. Adaptado e incluído aqui para referência rápida no _Frontend Architecture Playbook_. 