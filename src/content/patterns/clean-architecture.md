---
title: 'Clean Architecture no Front-End'
description: 'Uma adaptação dos princípios da Clean Architecture de Robert C. Martin para o desenvolvimento front-end, focada em criar aplicações mais testáveis, independentes e fáceis de manter.'
icon: 'layers'
layout: '../../layouts/ContentLayout.astro'
category: 'Arquitetura'
featured: false
---

### O que é?

Imagine construir uma casa e começar pelas cortinas. Ninguém faz isso. Primeiro você constrói a fundação, as paredes, a estrutura. Só depois vêm a pintura, os móveis e, por fim, as cortinas.

No desenvolvimento de software, muitas vezes fazemos o equivalente a começar pelas cortinas. Escolhemos um framework (React, Angular, Vue) e misturamos toda a nossa lógica de negócio — as regras que realmente definem o que nossa aplicação faz — diretamente nos componentes de UI.

A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), é um grito de guerra contra essa prática. A regra principal é simples: **a sua lógica de negócio não deve saber nada sobre a UI ou o framework que a exibe.**

**O Diagrama das Camadas (As "Cebolas"):**

A ideia é organizar o código em camadas concêntricas, como uma cebola:

1.  **Entidades (Entities):** No centro da cebola. São as regras de negócio mais puras e de mais alto nível. No front-end, poderiam ser os tipos e validações de um `User` ou `Order`. Elas não sabem nada sobre o resto do mundo.
2.  **Casos de Uso (Use Cases):** Orquestram o fluxo de dados para e das entidades. É aqui que mora a lógica da aplicação, como `fazerLogin` ou `adicionarProdutoAoCarrinho`. Eles manipulam as entidades, mas não sabem como a UI vai exibir o resultado.
3.  **Adaptadores de Interface (Interface Adapters):** Onde a mágica da tradução acontece. Esta camada pega os dados do mundo exterior (ex: um clique em um botão no React) e os converte para um formato que os Casos de Uso entendem. E vice-versa. Presenters, Controllers e Gateways vivem aqui.
4.  **Frameworks e Drivers (Frameworks & Drivers):** A camada mais externa. Aqui estão o framework (React, Vue), o DOM, as chamadas `fetch` a uma API externa, etc. Esta camada é volátil, um detalhe de implementação.

**A Regra da Dependência:** O código fonte só pode apontar para dentro. As camadas internas nunca devem depender das camadas externas.

**Por que isso é revolucionário no Front-end?**

Porque seu "coração" — as regras de negócio e a lógica da aplicação — se torna independente. Você poderia trocar o React pelo Vue sem tocar em uma linha dos seus Casos de Uso. Você pode testar toda a lógica de `adicionarProdutoAoCarrinho` sem precisar renderizar um único componente.

**Em Resumo:**

*   **Proteja seu núcleo:** Sua lógica de negócio é o ativo mais valioso. Isole-a.
*   **Frameworks são detalhes:** Trate a UI e as bibliotecas como plug-ins que podem ser trocados.
*   **Código Testável por Natureza:** Testar a lógica sem a UI é ordens de magnitude mais simples e rápido.
*   **Independência:** Seu código dura mais, porque não está acoplado à tecnologia da moda.