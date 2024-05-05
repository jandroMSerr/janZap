describe('Register', () => {
  it('Should register correctly', () => {
    cy.visit('http://localhost:4200/login');
    cy.contains('Registrarse').click();
    cy.get('#email').type('exampleRegister1@gmail.com');
    cy.get('#password').type('hola1234');
    cy.contains('Registrarse').click();
    cy.contains('JanZap');
  });
});

describe('Try register when are registered', () => {
    it('Should not register', () => {
      cy.visit('http://localhost:4200/login');
      cy.contains('Registrarse').click();
      cy.get('#email').type('jandrosmartinez@gmail.com');
      cy.get('#password').type('hola1234');
      cy.contains('Registrarse').click();
      cy.contains('Volver')
      //No se puede completar la prueba porque cypress no registra loe mensajes
      // que vienen del alert
    });
  });

describe('Return from register', () => {
  it('Should return from register correctly', () => {
    cy.visit('http://localhost:4200/login');
    cy.contains('Registrarse').click();
    cy.contains('Volver').click();
    cy.contains('¿Contraseña olvidada?');
  });
});
