# Modern Front-End Architecture Playbook

Este repositório é uma coleção curada de padrões e práticas de arquitetura testados em batalha para a construção de aplicações front-end modernas, sustentáveis e escaláveis. O objetivo é servir como um recurso educacional e um ponto de partida para discussões sobre como estruturar projetos complexos.

## ✨ Filosofia

A abordagem deste projeto é guiada por princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**, adaptados para o front-end:

- **Separação de Responsabilidades (SoC):** Cada parte da aplicação tem uma única e bem definida responsabilidade.
- **Baixo Acoplamento, Alta Coesão:** Os módulos são independentes e focados, facilitando a manutenção e a substituição de tecnologias.
- **Independência de Frameworks:** A lógica de domínio e de apresentação é mantida o mais agnóstica possível de frameworks de UI específicos.

## 🏛️ Arquitetura do Projeto

Estrutura de pastas atual (React + Vite + Mantine):

```text
src/
├── components/          # Componentes de layout e navegação (HeaderBar, DocsShell)
├── content/             # Artigos MDX convertidos para TSX (guides, patterns)
├── lib/                 # Funções auxiliares (ex.: getDoc, arrays de metadata)
├── pages/               # Rotas React Router (Home, DocPage)
├── theme.ts             # Definição do tema Mantine
└── index.css            # CSS mínimo (tokens globais se necessário)
```

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: bundler e servidor de desenvolvimento rápido.
- **[Mantine](https://mantine.dev/)**: biblioteca de UI e design system adotada para *todos* os componentes.
- **TypeScript**: segurança de tipos.
- **@mdx-js + gray-matter**: conversão de artigos MDX para componentes React.
- **Tabler Icons**: ícones leves usados via `@tabler/icons-react`.

## 🏁 Como Rodar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/tiagovilasboas/frontend-architecture-playbook.git
   cd frontend-architecture-playbook
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará em [http://localhost:5173](http://localhost:5173) por padrão.

4. **Build de produção:**

   ```bash
   npm run build && npm run preview
   ```

   O bundle otimizado é gerado em `dist/` e pode ser servido por qualquer servidor estático.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tem um padrão que gostaria de adicionar ou uma melhoria a sugerir, por favor, abra uma issue ou um pull request.
