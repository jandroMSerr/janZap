describe('Contact Page', () => {
  //beforEach para realizarlo antes de todos los test
  //Inicio - Importar datos del data.json
  beforeEach(function () {
    cy.visit('http://localhost:4200/contact');

    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });
  });
  //Fin - Importar datos del data.json

  it('Happy path contact', function () {
    cy.get('.row > .col-md-6 > .ng-untouched > .mb-3 > #nombre').type(
      this.data.name
    );
    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #email').type(
      this.data.emailUser
    );
    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #mensaje').type(
      this.data.testText
    );
    cy.contains('Enviar').click();
  });

  it('Wrong inputs in formulary', function () {
    cy.get('.row > .col-md-6 > .ng-untouched > .mb-3 > #nombre').type('1');
    //Seleccionar un indicador y sacar un texto
    cy.get('.col-md-6 > .ng-invalid > .mb-3 > .error-message > small')
      .invoke('text')
      .then((textoName) => {
        expect(textoName).to.equal(this.data.nameError);
      });
    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #email').type(
      this.data.emailUser
    );
    //Borrar texto de un campo
    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #email').clear();


    //Comprara un texto con otro
    cy.get(
      '.col-md-6 > .ng-invalid > .mb-3:nth-child(2) > .error-message > small'
    )
      .invoke('text')
      .then((textoEmail1) => {
        expect(textoEmail1).to.equal(this.data.emailNeeded);
      });

    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #email').type(
      this.data.testText
    );

    cy.get(
      '.col-md-6 > .ng-invalid > .mb-3:nth-child(2) > .error-message > small'
    )
      .invoke('text')
      .then((textoEmail2) => {
        expect(textoEmail2).to.equal(this.data.validEmail);
      });
    cy.get('.row > .col-md-6 > .ng-invalid > .mb-3 > #mensaje').type(
      "aa"
    );
    cy.get(
        '.col-md-6 > .ng-invalid > .mb-3:nth-child(3) > .error-message > small'
      )
        .invoke('text')
        .then((textoMessage) => {
          expect(textoMessage).to.equal(this.data.validMessage);
        });
  });
});
