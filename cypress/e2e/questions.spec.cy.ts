describe('questions', () => {

    beforeEach(function () {

      cy.fixture('dataApp').then((data) => {
        this.data = data;
      });

      cy.visit('http://localhost:4200/questions');

    });

    it('Should work correctly',function () {
        
      cy.contains("SOBRE NOSOTROS");
      cy.contains("ENVÍOS");
      cy.contains("PRODUCTOS");
      cy.contains("OTRAS PREGUNTAS");
      cy.contains(this.data.accordionText1);
      cy.contains(this.data.accordionText2);

      cy.get('body > #accordionPanelsStayOpenExample > .accordion-item > #panelsStayOpen-headingEleven > .accordion-button').click();
      cy.contains(this.data.accordionText3);
      
    });

  });
  