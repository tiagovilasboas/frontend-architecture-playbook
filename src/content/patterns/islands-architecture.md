---
title: 'Arquitetura de Ilhas (Islands Architecture)'
description: 'Uma análise da Arquitetura de Ilhas, o padrão que busca o melhor dos dois mundos: a performance de sites estáticos com a interatividade de aplicações client-side.'
icon: 'island'
layout: '../../layouts/ContentLayout.astro'
category: 'Arquitetura'
featured: false
---

Por anos, o desenvolvimento front-end viveu um cabo de guerra entre performance e interatividade.

A **Arquitetura de Ilhas** (popularizada por frameworks como Astro) propõe paz: **entregue HTML puro e rápido por padrão, adicionando JavaScript apenas em "ilhas" de interatividade**.

Pense em um blog. 95 % é texto e imagens; não faz sentido enviar um framework inteiro para isso. Porém, o botão de like é uma ilha e carrega JS específico quando fica visível (`client:visible`).

**Benefícios:**
* Velocidade de carregamento comparável a sites estáticos
* JavaScript carregado sob demanda
* UX nativa onde necessário

> HTML primeiro. Hidrate partes interativas somente quando o usuário precisar. 