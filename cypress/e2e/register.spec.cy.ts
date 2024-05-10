describe('Register', () => {

  beforeEach(function () {
    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });

    cy.visit(this.data.loginURL);
  });

  it('Should register correctly', function () {
    cy.contains('Registrarse').click();
    cy.get('#email').type(this.data.email);
    cy.get('#password').type(this.data.password);
    cy.contains('Registrarse').click();
    cy.contains('JanZap');
  });
});

describe('Try register when are registered', () => {
    it('Should not register', function () {
      cy.contains('Registrarse').click();
      cy.get('#email').type(this.dat.email);
      cy.get('#password').type(this.data.password);
      cy.contains('Registrarse').click();
      cy.contains('Volver')
      //No se puede completar la prueba porque cypress no registra loe mensajes
      // que vienen del alert
    });
  });

describe('Return from register', () => {
  it('Should return from register correctly', () => {
    cy.contains('Registrarse').click();
    cy.contains('Volver').click();
    cy.contains('¿Contraseña olvidada?');
  });
});
