# Modern Front-End Architecture Patterns

Este repositório é uma coleção curada de padrões e práticas de arquitetura testados em batalha para a construção de aplicações front-end modernas, sustentáveis e escaláveis. O objetivo é servir como um recurso educacional e um ponto de partida para discussões sobre como estruturar projetos complexos.

## ✨ Filosofia

A abordagem deste projeto é guiada por princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**, adaptados para o front-end:

- **Separação de Responsabilidades (SoC):** Cada parte da aplicação tem uma única e bem definida responsabilidade.
- **Baixo Acoplamento, Alta Coesão:** Os módulos são independentes e focados, facilitando a manutenção e a substituição de tecnologias.
- **Independência de Frameworks:** A lógica de domínio e de apresentação é mantida o mais agnóstica possível de frameworks de UI específicos.

## 🏛️ Arquitetura do Projeto

A estrutura de pastas foi projetada para ser escalável e refletir os princípios acima:

```
src/
├── components/       # Componentes Astro (UI)
│   ├── layouts/      # Layouts de página globais (BaseLayout)
│   ├── sections/     # Seções de página (Hero, PatternsGrid)
│   └── ui/           # Componentes de UI puros (Card, Button, etc.)
│
├── content/          # Conteúdo gerenciado pelo Astro
│   ├── config.ts     # Definição dos esquemas de tipo para as coleções
│   └── patterns/     # Coleção de conteúdo para os padrões de arquitetura
│
├── lib/              # Código de suporte e lógica de negócios
│   ├── services/     # Funções que interagem com APIs externas (ex: GitHub)
│   └── utils/        # Funções utilitárias puras
│
├── pages/            # Sistema de roteamento baseado em arquivos do Astro
│   ├── index.astro
│   └── patterns/
│       └── [slug].astro # Rota dinâmica para renderizar os padrões
│
├── styles/           # Estilos globais
│
└── config.ts         # Configurações globais do site (nome, autor, etc.)
```

## 🚀 Tecnologias Utilizadas

- **[Astro](https://astro.build/)**: O framework web para construir o site. Usado por sua arquitetura de "ilhas" que gera um site estático por padrão, enviando zero JavaScript para o cliente, a menos que explicitamente necessário.
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)**: Para gerenciar o conteúdo do site de forma organizada e com type-safety.
- **CSS Puro com Variáveis**: Para estilização, mantendo o projeto leve e sem dependências de frameworks CSS complexos.
- **TypeScript**: Para garantir a segurança de tipos em toda a aplicação.
- **Lucide Icons**: Para ícones leves e consistentes.

## 🏁 Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/tiagovilasboas/front-end-architecture.git
    cd front-end-architecture
    ```

2.  **Instale as dependências:**
    (Requer [pnpm](https://pnpm.io/))
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```
    O site estará disponível em [http://localhost:4321](http://localhost:4321).

4.  **Para gerar a versão de produção:**
    ```bash
    pnpm build
    ```
    Os arquivos estáticos serão gerados no diretório `dist/`.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tem um padrão que gostaria de adicionar ou uma melhoria a sugerir, por favor, abra uma issue ou um pull request.
