describe('Homepage', () => {
  it('displays the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Next.js!')
  });
});
