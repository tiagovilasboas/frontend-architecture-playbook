---
title: 'Single Page Application (SPA)'
description: 'Uma análise profunda sobre a arquitetura SPA (Single Page Application), o padrão que revolucionou a web ao criar experiências ricas e fluidas, similares a de um aplicativo nativo, diretamente no navegador.'
icon: 'layout-template'
layout: '../../layouts/ContentLayout.astro'
category: 'Arquitetura'
featured: false
---

A **SPA** carrega a aplicação apenas uma vez; depois, navegação e atualizações ocorrem no cliente, sem recarregar a página inteira.

### Quando Usar
* Dashboards ricos, ferramentas de produtividade, apps que mantêm estado contínuo

### Trade-offs
* **TTI inicial alto** — bundle JS grande
* SEO mais complexo (SSR/SSG pode mitigar)
* Gerenciamento de estado pode complicar-se

> Brilha quando a interatividade contínua é mais valiosa que o TTI inicial. 