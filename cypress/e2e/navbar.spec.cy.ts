describe('Navbar', () => {

  beforeEach(function () {
    cy.visit('http://localhost:4200');

    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });
  });



    it('It should navigate correctly', function () {

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(1) > .nav-link').click();
        cy.url().then((homeUrl: string) => {
          expect(homeUrl).to.equal(this.data.homeURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(2) > .nav-link').click();
        cy.url().then((catalogUrl: string) => {
          expect(catalogUrl).to.equal(this.data.catalogURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
        cy.url().then((shippingUrl: string) => {
          expect(shippingUrl).to.equal(this.data.shippingURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(4) > .nav-link').click();
        cy.url().then((returnsUrl: string) => {
          expect(returnsUrl).to.equal(this.data.returnsURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(4) > .nav-link').click();
        cy.url().then((returnsUrl: string) => {
          expect(returnsUrl).to.equal(this.data.returnsURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(5) > .nav-link').click();
        cy.url().then((questionsUrl: string) => {
          expect(questionsUrl).to.equal(this.data.questionsURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(6) > .nav-link').click();
        cy.url().then((contactUrl: string) => {
          expect(contactUrl).to.equal(this.data.contactURL);
        });

        cy.get('.container > #menu > .navbar-nav > .nav-item:nth-child(7) > .nav-link').click();
        cy.url().then((loginUrl: string) => {
          expect(loginUrl).to.equal(this.data.loginURL);
        });

    
  });
  
});

   