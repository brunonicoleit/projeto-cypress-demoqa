describe('Página de Login - DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/login');
    });
  
    it('Tenta login com credenciais inválidas', () => {
      cy.get('#userName').type('usuarioinvalido');
      cy.get('#password').type('senhaerrada');
      cy.get('#login').click();
      cy.contains('Invalid username or password!').should('be.visible');
    });
  });