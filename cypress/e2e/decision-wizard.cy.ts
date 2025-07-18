/// <reference types="cypress" />

describe('Decision Wizard E2E', () => {
  const url = '/guides/how-to-choose';

  beforeEach(() => {
    cy.visit(url);
  });

  describe('Desktop - Fluxos Completos', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('MVP + Não cresce + Sem integrações', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('E-commerce + Cresce + Com integrações', () => {
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Sim')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Dashboard + Cresce + Sem integrações', () => {
      cy.contains('Dashboard').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('SaaS + Não cresce + Com integrações', () => {
      cy.contains('SaaS').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?', {
        timeout: 5000,
      })
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Sim')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Enterprise + Cresce + Sem integrações', () => {
      cy.contains('Enterprise').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Startup + Cresce + Com integrações', () => {
      cy.contains('Startup').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Sim')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Mobile - Fluxos Completos', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('MVP + Não cresce + Sem integrações', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('E-commerce + Cresce + Com integrações', () => {
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Sim')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Dashboard + Cresce + Sem integrações', () => {
      cy.contains('Dashboard').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Sim')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

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
      cy.contains('Seu projeto vai crescer muito ou terá time grande?');

      // Volta para pergunta 1
      cy.contains('Voltar').click();
      cy.contains('Qual o tipo do seu projeto?');

      // Muda resposta da pergunta 1
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?');
    });

    it('deve reiniciar o wizard corretamente', () => {
      // Completa o wizard
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

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

  describe('Responsividade', () => {
    it('deve funcionar em tablet', () => {
      cy.viewport(768, 1024);
      cy.visit(url);

      cy.contains('Qual o tipo do seu projeto?');
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('deve funcionar em desktop grande', () => {
      cy.viewport(1920, 1080);
      cy.visit(url);

      cy.contains('Qual o tipo do seu projeto?');
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Validação de Conteúdo', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('deve mostrar todas as opções da primeira pergunta', () => {
      cy.contains('MVP/Protótipo');
      cy.contains('E-commerce');
      cy.contains('Dashboard');
      cy.contains('SaaS');
      cy.contains('Enterprise');
      cy.contains('Startup');
    });

    it('deve mostrar opções da segunda pergunta após seleção', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?');
      cy.contains('Sim');
      cy.contains('Não');
    });

    it('deve mostrar opções da terceira pergunta após seleção', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?');
      cy.contains('Sim');
      cy.contains('Não');
    });

    it('deve mostrar sugestões com títulos e descrições', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
      cy.get('.wizard-recommendation-card').first().should('contain.text');
    });
  });

  describe('Performance e UX', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it('deve carregar rapidamente', () => {
      cy.visit(url);
      cy.contains('Qual o tipo do seu projeto?', { timeout: 5000 });
    });

    it('deve responder rapidamente aos cliques', () => {
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?', {
        timeout: 2000,
      });

      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?', { timeout: 2000 });
    });

    it('deve manter estado durante navegação', () => {
      // Completa wizard
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?')
        .parent()
        .contains('Não')
        .click();
      cy.contains('Vai integrar com muitos sistemas?')
        .parent()
        .contains('Não')
        .click();

      // Navega para outra página
      cy.visit('/');
      cy.visit(url);

      // Deve estar na primeira pergunta
      cy.contains('Qual o tipo do seu projeto?');
    });
  });
});
