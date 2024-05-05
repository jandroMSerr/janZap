describe('Navbar', () => {

    it('It should navigate correctly', () => {
        cy.visit('http://localhost:4200/home');
        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
        cy.contains('Envíos');
        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(4) > .nav-link').click();
        cy.contains('Devoluciones');
        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(5) > .nav-link').click();
        cy.contains('Preguntas frecuentes');
        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(6) > .nav-link').click();
        cy.contains('Nombre');


    
  });
  
});

   