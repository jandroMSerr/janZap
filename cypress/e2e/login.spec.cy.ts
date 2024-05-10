describe('Login', () => {

  beforeEach(function () {
    cy.visit('http://localhost:4200/login');

    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });

  });
  it('Should login correctly',function () {

    cy.get('#email').type(this.data.email);
    cy.get('#password').type(this.data.password);
    cy.contains('Entrar').click();
    cy.wait(3000);

    //Capturar la url de una web
    cy.url().then((url: string) => {
      expect(url).to.equal(this.data.homeURL);
    });
    
  });
});
