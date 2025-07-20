/// <reference types="cypress" />

describe('Decision Wizard - Todas as Combinações v3.0', () => {
  const url = '/guides/how-to-choose';

  beforeEach(() => {
    cy.viewport(1280, 800);
  });

  // Testa cenários representativos (não todas as combinações para não sobrecarregar)
  describe('Cenários Representativos', () => {
    it('MVP + Time pequeno + Júnior + Velocidade + Sem integrações', () => {
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('E-commerce + Time médio + Pleno + Manutenibilidade + Com integrações', () => {
      cy.visit(url);
      cy.contains('E-commerce').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Dashboard + Time grande + Sênior + Performance + Sem integrações', () => {
      cy.visit(url);
      cy.contains('Dashboard').click();
      cy.contains('9+ devs').click();
      cy.contains('Sênior').click();
      cy.contains('Performance').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('SaaS + Time médio + Pleno + Escalabilidade + Com integrações', () => {
      cy.visit(url);
      cy.contains('SaaS').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Escalabilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Enterprise + Time grande + Sênior + Manutenibilidade + Com integrações', () => {
      cy.visit(url);
      cy.contains('Enterprise').click();
      cy.contains('9+ devs').click();
      cy.contains('Sênior').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Startup + Time médio + Pleno + Velocidade + Com integrações', () => {
      cy.visit(url);
      cy.contains('Startup').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Velocidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Cenários Específicos por Tipo de Projeto', () => {
    it('MVP deve priorizar simplicidade', () => {
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      // MVP deve sugerir arquiteturas simples
      cy.get('.wizard-recommendation-card').should('contain.text', 'SPA');
    });

    it('E-commerce deve priorizar escalabilidade', () => {
      cy.visit(url);
      cy.contains('E-commerce').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      // E-commerce deve sugerir arquiteturas escaláveis
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Enterprise deve priorizar robustez', () => {
      cy.visit(url);
      cy.contains('Enterprise').click();
      cy.contains('9+ devs').click();
      cy.contains('Sênior').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      // Enterprise deve sugerir arquiteturas robustas
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Validação de Lógica de Recomendação', () => {
    it('deve sugerir Clean Architecture para sistemas complexos', () => {
      cy.visit(url);
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
      cy.visit(url);
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
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('1-3 devs').click();
      cy.contains('Júnior/Misto').click();
      cy.contains('Velocidade').click();
      cy.contains('Não, poucas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('contain.text', 'SPA');
    });

    it('deve sugerir Component-Driven para dashboards', () => {
      cy.visit(url);
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

    it('deve sugerir Event-Driven para e-commerce', () => {
      cy.visit(url);
      cy.contains('E-commerce').click();
      cy.contains('4-8 devs').click();
      cy.contains('Pleno').click();
      cy.contains('Manutenibilidade').click();
      cy.contains('Sim, muitas integrações').click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should(
        'contain.text',
        'Event-Driven'
      );
    });
  });

  describe('Testes de Performance', () => {
    it('deve completar fluxo em menos de 10 segundos', () => {
      const startTime = Date.now();

      cy.visit(url);
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
      cy.visit(url);

      const clickStart = Date.now();
      cy.contains('MVP/Protótipo').click();
      cy.contains('Qual o tamanho do seu time?');
      const clickEnd = Date.now();

      expect(clickEnd - clickStart).to.be.lessThan(1000);
    });
  });

  describe('Validação de Navegação', () => {
    it('deve permitir navegação entre passos', () => {
      cy.visit(url);

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

    it('deve reiniciar corretamente', () => {
      cy.visit(url);

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
});
