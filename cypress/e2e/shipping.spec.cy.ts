describe('Shipping', () => {
  beforeEach(function () {
    cy.fixture('dataApp').then((data) => {
      this.data = data;
    });
  });

  it('Should test the texts are correct', () => {
    cy.visit('http://localhost:4200/shipping');
    cy.contains('ENVÍOS Y ENTREGAS');
    cy.contains('1. Plazos de entrega y gastos de envío.');
    cy.contains('2. Plazos de envío y entrega en campañas puntuales.');
    cy.contains('3. Dónde puedes recibir tu pedido.');
    cy.contains('4. Empresa encargada de entregar tu pedido');
    cy.contains('5. Estado de mi envío.');
    cy.contains('6. Ausencia del destinatario en el momento de la entrega');
    cy.contains('7. Aduanas.');
    cy.contains('8. Responsabilidad de JanZap sobre los envíos.');
  });
});
