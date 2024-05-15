describe('Login', () => {

  beforeEach(function () {
    cy.visit('http://localhost:4200/login');

    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });

  });
  it('Should login correctly with admin',function () {

    cy.get('#email').type(this.data.emaiAdmin);
    cy.get('#password').type(this.data.passwordAdmin);
    cy.contains('Entrar').click();
    cy.wait(3000);

    //Capturar la url de una web
    cy.url().then((url: string) => {
      expect(url).to.equal(this.data.homeURL);
    });
    cy.contains("Panel de control");
    
  });

  it('Should login correctly with no admin user',function () {

    cy.get('#email').type(this.data.emailUser);
    cy.get('#password').type(this.data.passwordUser);
    cy.contains('Entrar').click();
    cy.wait(3000);

    //Capturar la url de una web
    cy.url().then((url: string) => {
      expect(url).to.equal(this.data.homeURL);
    });

  });

});
