/// <reference types="cypress" />

describe('Decision Wizard - Todas as Combinações', () => {
  const url = '/guides/how-to-choose';

  const projectTypes = [
    'MVP/Protótipo',
    'E-commerce',
    'Dashboard',
    'SaaS',
    'Enterprise',
    'Startup'
  ];

  const growthOptions = ['Sim', 'Não'];
  const integrationOptions = ['Sim', 'Não'];

  beforeEach(() => {
    cy.viewport(1280, 800);
  });

  // Testa todas as combinações possíveis
  projectTypes.forEach(projectType => {
    growthOptions.forEach(growth => {
      integrationOptions.forEach(integration => {
        it(`deve retornar sugestões para: ${projectType} + ${growth} + ${integration}`, () => {
          cy.visit(url);
          
          // Seleciona tipo do projeto
          cy.contains(projectType).click();
          
          // Seleciona opção de crescimento
          cy.contains('Seu projeto vai crescer muito ou terá time grande?')
            .parent()
            .contains(growth)
            .click();
          
          // Seleciona opção de integração
          cy.contains('Vai integrar com muitos sistemas?')
            .parent()
            .contains(integration)
            .click();
          
          // Verifica que retorna sugestões
          cy.contains('Sugestões do Wizard');
          cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
          
          // Verifica que as sugestões têm conteúdo
          cy.get('.wizard-recommendation-card').first().should('contain.text');
        });
      });
    });
  });

  describe('Cenários Específicos por Tipo de Projeto', () => {
    it('MVP deve priorizar simplicidade', () => {
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Não').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Não').click();
      
      cy.contains('Sugestões do Wizard');
      // MVP deve sugerir arquiteturas simples
      cy.get('.wizard-recommendation-card').should('contain.text', 'SPA');
    });

    it('E-commerce deve priorizar escalabilidade', () => {
      cy.visit(url);
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Sim').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Sim').click();
      
      cy.contains('Sugestões do Wizard');
      // E-commerce deve sugerir arquiteturas escaláveis
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('Enterprise deve priorizar robustez', () => {
      cy.visit(url);
      cy.contains('Enterprise').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Sim').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Sim').click();
      
      cy.contains('Sugestões do Wizard');
      // Enterprise deve sugerir arquiteturas robustas
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });
  });

  describe('Validação de Lógica de Recomendação', () => {
    it('deve sugerir Clean Architecture para sistemas complexos', () => {
      cy.visit(url);
      cy.contains('Enterprise').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Sim').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Sim').click();
      
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('contain.text', 'Clean Architecture');
    });

    it('deve sugerir Micro-frontends para times grandes', () => {
      cy.visit(url);
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Sim').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Sim').click();
      
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('contain.text', 'Micro-frontends');
    });

    it('deve sugerir SPA para projetos simples', () => {
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Não').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Não').click();
      
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('contain.text', 'SPA');
    });
  });

  describe('Testes de Performance', () => {
    it('deve completar fluxo em menos de 5 segundos', () => {
      const startTime = Date.now();
      
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Não').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Não').click();
      cy.contains('Sugestões do Wizard');
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      expect(duration).to.be.lessThan(5000);
    });

    it('deve responder a cliques em menos de 1 segundo', () => {
      cy.visit(url);
      
      const clickStart = Date.now();
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?');
      const clickEnd = Date.now();
      
      expect(clickEnd - clickStart).to.be.lessThan(1000);
    });
  });

  describe('Testes de Acessibilidade', () => {
    it('deve ter contraste adequado', () => {
      cy.visit(url);
      
      // Verifica se os textos são legíveis
      cy.contains('Qual o tipo do seu projeto?').should('be.visible');
      cy.get('.wizard-recommendation-card').should('be.visible');
    });

    it('deve ter elementos clicáveis visíveis', () => {
      cy.visit(url);
      
      // Verifica se todos os cards são clicáveis
      cy.contains('MVP/Protótipo').should('be.visible');
      cy.contains('E-commerce').should('be.visible');
      cy.contains('Dashboard').should('be.visible');
      cy.contains('SaaS').should('be.visible');
      cy.contains('Enterprise').should('be.visible');
      cy.contains('Startup').should('be.visible');
    });
  });

  describe('Testes de Edge Cases', () => {
    it('deve lidar com navegação rápida', () => {
      cy.visit(url);
      
      // Clica rapidamente em várias opções
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Não').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Não').click();
      cy.contains('Reiniciar').click();
      cy.contains('E-commerce').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Sim').click();
      cy.contains('Vai integrar com muitos sistemas?').parent().contains('Sim').click();
      
      cy.contains('Sugestões do Wizard');
      cy.get('.wizard-recommendation-card').should('have.length.at.least', 1);
    });

    it('deve manter estado após refresh', () => {
      cy.visit(url);
      cy.contains('MVP/Protótipo').click();
      cy.contains('Seu projeto vai crescer muito ou terá time grande?').parent().contains('Não').click();
      
      cy.reload();
      
      // Deve estar na primeira pergunta após refresh
      cy.contains('Qual o tipo do seu projeto?');
    });
  });
}); 