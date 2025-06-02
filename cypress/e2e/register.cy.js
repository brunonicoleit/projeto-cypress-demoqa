describe('Página de Registro - DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/register');
    });
  
    it('Verifica se os campos do formulário estão visíveis', () => {
      cy.get('#userName').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('#firstName').should('be.visible');
      cy.get('#lastName').should('be.visible');
    });
  
    it('Testa envio de cadastro sem passar o CAPTCHA', () => {
      cy.get('#register').click();
      cy.contains('Please verify').should('exist');
    });
  });