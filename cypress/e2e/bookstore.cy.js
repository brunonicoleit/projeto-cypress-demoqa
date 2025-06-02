describe('Página Book Store - DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/books');
    });
  
    it('Verifica se a lista de livros é exibida', () => {
      cy.get('.rt-table').should('exist');
    });
  
    it('Acessa os detalhes de um livro', () => {
      cy.contains('Git Pocket Guide').click();
      cy.get('#ISBN-wrapper').should('contain', 'ISBN');
      cy.get('#title-wrapper').should('contain', 'Git Pocket Guide');
    });
  });