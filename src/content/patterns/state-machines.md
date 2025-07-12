---
title: 'State Machines (Máquinas de Estado)'
description: 'Aprenda a usar Máquinas de Estado Finitas para gerenciar estados complexos na UI, eliminando bugs de estados impossíveis e tornando a lógica de componentes mais previsível e robusta.'
icon: 'workflow'
layout: '../../layouts/ContentLayout.astro'
category: 'Arquitetura'
featured: false
---

### O que é?

Uma Máquina de Estado Finito (ou FSM, do inglês *Finite State Machine*) é um modelo de computação que força um sistema a estar em **apenas um estado por vez**. Pense em um semáforo: ele pode estar `verde`, `amarelo` ou `vermelho`, mas nunca em dois desses estados ao mesmo tempo.

No front-end, isso resolve um problema comum: gerenciar a complexidade da UI. Em vez de uma coleção de `booleanos` como `isLoading`, `isError`, `isSuccess` que podem levar a "estados impossíveis" (ex: `isLoading` e `isError` serem `true` ao mesmo tempo), uma máquina de estado garante que a UI esteja sempre em um estado único e válido.

### Qual problema resolve?

Ela doma a complexidade do estado da UI. Conforme as aplicações crescem, a lógica dentro dos componentes se torna uma teia de `if/else`, `useState` e `useEffect`, difícil de entender, testar e depurar.

Máquinas de Estado tornam essa lógica **explícita e previsível**. Você define todos os estados possíveis da sua UI e os eventos que causam transições entre eles. O resultado é um código mais robusto, mais fácil de visualizar (literalmente, com diagramas) e menos propenso a bugs.

### Como funciona na prática?

Os conceitos chave são:
- **Estados:** Um conjunto finito de estados possíveis (`idle`, `loading`, `success`, `failure`).
- **Eventos:** Ações que disparam transições (`FETCH`, `RESOLVE`, `REJECT`).
- **Transições:** Regras que definem para qual estado ir, dado o estado atual e um evento. (Ex: "no estado `loading`, se o evento `RESOLVE` ocorrer, vá para o estado `success`").
- **Contexto:** Um armazenamento de dados qualitativos (ex: os dados do usuário, a mensagem de erro).

Bibliotecas como a **XState** são a forma mais popular de implementar isso no front-end. Elas fornecem um motor para executar a máquina, integrações com frameworks (React, Vue, etc.) e ferramentas de visualização.

### Trade-offs

**Vantagens:**
- **Elimina estados impossíveis:** A principal vantagem. Torna a UI mais robusta.
- **Lógica declarativa e previsível:** O código descreve os fluxos, não a implementação imperativa.
- **Visualização:** Máquinas podem ser convertidas em diagramas, facilitando a comunicação e o debug.
- **Testabilidade:** Cada estado e transição pode ser testado de forma isolada.

**Desvantagens:**
- **Verboso para casos simples:** Para um componente de toggle (`on`/`off`), é um exagero.
- **Curva de aprendizado:** Requer uma mudança de mentalidade em relação a flags booleanas.
- **Abstração extra:** Adiciona uma nova biblioteca e um novo conceito para a equipe gerenciar.

### Conclusão

Máquinas de Estado são uma ferramenta poderosa para gerenciar a complexidade em componentes de UI. Elas brilham em fluxos com múltiplos passos e estados, como formulários, uploads de arquivos ou players de vídeo. Se você se encontra lutando com múltiplos `useState` para controlar a renderização de um componente, provavelmente é hora de considerar uma máquina de estado.
