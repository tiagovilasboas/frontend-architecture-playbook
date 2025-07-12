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

A **Clean Architecture**, proposta por Robert C. Martin (Uncle Bob), é um grito de guerra contra essa prática. A regra principal é simples: **a sua lógica de negócio não deve saber nada sobre a UI ou o framework que a exibe.**

#### O Diagrama das Camadas (A "Cebola")

A ideia é organizar o código em camadas concêntricas, como uma cebola:

1. **Entidades (Entities):** Regras de negócio puras e de mais alto nível.
2. **Casos de Uso (Use Cases):** Orquestram o fluxo de dados para/ das entidades.
3. **Adaptadores de Interface (Interface Adapters):** Traduzem dados entre mundo externo e casos de uso.
4. **Frameworks e Drivers:** Camada mais externa (framework, DOM, fetch …).

**Regra da Dependência:** O código fonte só pode apontar para dentro. Camadas internas nunca devem depender das externas.

> Frameworks são detalhes; proteja seu núcleo de domínio. 