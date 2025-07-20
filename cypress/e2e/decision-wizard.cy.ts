/// <reference types="cypress" />

describe('Decision Wizard E2E - v3.0', () => {
  const url = '/guides/how-to-choose';

  beforeEach(() => {
    cy.visit(url);
  });

  describe('Desktop - Fluxos Completos', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('MVP + Time pequeno + Júnior + Velocidade + Sem integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('MVP/Protótipo').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('1-3 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Júnior/Misto').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Velocidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Não, poucas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('E-commerce + Time médio + Pleno + Manutenibilidade + Com integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('E-commerce').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('4-8 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Pleno').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Manutenibilidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Sim, muitas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Dashboard + Time grande + Sênior + Performance + Sem integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('Dashboard').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('9+ devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Sênior').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Performance').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Não, poucas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('SaaS + Time médio + Pleno + Escalabilidade + Com integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('SaaS').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('4-8 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Pleno').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Escalabilidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Sim, muitas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Enterprise + Time grande + Sênior + Manutenibilidade + Com integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('Enterprise').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('9+ devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Sênior').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Manutenibilidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Sim, muitas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Startup + Time médio + Pleno + Velocidade + Com integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('Startup').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('4-8 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Pleno').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Velocidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Sim, muitas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Mobile - Fluxos Completos', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('MVP + Time pequeno + Júnior + Velocidade + Sem integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('MVP/Protótipo').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('1-3 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Júnior/Misto').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Velocidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Não, poucas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('E-commerce + Time médio + Pleno + Manutenibilidade + Com integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('E-commerce').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('4-8 devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Pleno').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Manutenibilidade').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Sim, muitas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Dashboard + Time grande + Sênior + Performance + Sem integrações', () => {
      // Passo 1: Tipo do projeto
      cy.contains('Dashboard').click();

      // Passo 2: Tamanho do time
      cy.contains('Qual o tamanho do seu time?');
      cy.contains('9+ devs').click();

      // Passo 3: Nível técnico
      cy.contains('Qual o nível técnico do time?');
      cy.contains('Sênior').click();

      // Passo 4: Prioridade
      cy.contains('Qual a prioridade principal?');
      cy.contains('Performance').click();

      // Passo 5: Integrações
      cy.contains('Vai integrar com muitos sistemas externos?');
      cy.contains('Não, poucas integrações').click();

      // Passo 6: Resultados
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Navegação e Interação', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('deve permitir voltar para perguntas anteriores', () => {
      // Vai para pergunta 2
      cy.contains('MVP/Protótipo').click();
      cy.contains('Qual o tamanho do seu time?');

      // Volta para pergunta 1
      cy.contains('Voltar').click();
      cy.contains('Qual o tipo do seu projeto?');

      // Muda resposta da pergunta 1
      cy.contains('E-commerce').click();
      cy.contains('Qual o tamanho do seu time?');
    });

    it('deve permitir navegação completa entre passos', () => {
      // Passo 1
      cy.contains('MVP/Protótipo').click();

      // Passo 2
      cy.contains('1-3 devs').click();

      // Volta para passo 1
      cy.contains('Voltar').click();
      cy.contains('Qual o tipo do seu projeto?');

      // Vai para passo 2 novamente
      cy.contains('MVP/Protótipo').click();
      cy.contains('Qual o tamanho do seu time?');

      // Passo 3
      cy.contains('Júnior/Misto').click();

      // Volta para passo 2
      cy.contains('Voltar').click();
      cy.contains('Qual o tamanho do seu time?');
    });

    it('deve reiniciar o wizard corretamente', () => {
      // Completa o wizard
      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');

      // Reinicia
      cy.contains('Reiniciar').click();
      cy.contains('Qual o tipo do seu projeto?');

      // Verifica que está na primeira pergunta
      cy.contains('MVP/Protótipo').should('be.visible');
      cy.contains('E-commerce').should('be.visible');
      cy.contains('Dashboard').should('be.visible');
    });
  });

  describe('Validação de Lógica de Recomendação', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('deve sugerir Clean Architecture para sistemas complexos', () => {
      cy.contains('Enterprise').click();
      cy.contains('9+ devs').click();
      cy.contains('Sênior').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should(
        'contain.text',
        'Clean Architecture'
      );
    });

    it('deve sugerir Micro-frontends para times grandes', () => {
      cy.contains('Enterprise').click();
      cy.contains('9+ devs').click();
      cy.contains('Sênior').click();
      cy.contains('Escalabilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should(
        'contain.text',
        'Micro-frontends'
      );
    });

    it('deve sugerir SPA para projetos simples', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('contain.text', 'SPA');
    });

    it('deve sugerir Component-Driven para dashboards', () => {
      cy.contains('Dashboard').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should(
        'contain.text',
        'Component-Driven'
      );
    });
  });

  describe('Testes de Performance', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('deve completar fluxo em menos de 10 segundos', () => {
      const startTime = Date.now();

      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();
      cy.contains('Sugestões do Wizard');

      const endTime = Date.now();
      const duration = endTime - startTime;

      expect(duration).to.be.lessThan(10000);
    });

    it('deve responder a cliques em menos de 1 segundo', () => {
      const clickStart = Date.now();
      cy.contains('MVP/Protótipo').click();
      cy.contains('Qual o tamanho do seu time?');
      const clickEnd = Date.now();

      expect(clickEnd - clickStart).to.be.lessThan(1000);
    });
  });
});
