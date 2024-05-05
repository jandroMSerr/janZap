describe('Login', () => {
  it('Should login correctly', () => {

    cy.visit('http://localhost:4200/login');
    cy.get('#email').type('jandrosmartinez@gmail.com');
    cy.get('#password').type('hola1234');
    cy.contains('Entrar').click();
    cy.contains('JanZap');
    
  });
});

describe('Login error data', () => {
    it('Should not login', () => {
  
      cy.visit('http://localhost:4200');
      cy.get('#email').type('example@gmail.com');
      cy.get('#password').type('fail');
      cy.contains('Entrar').click();
      cy.wait(3000);
      cy.contains('Usuario')

      //No se puede terminar de probar que no accede porque 
      // no muestra los mensajes del Alert
      // se comprueba que se queda en la misma pantalla
      
    });
  });