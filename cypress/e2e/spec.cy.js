describe("Calculator E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Addition: 5 + 3 = 8", () => {
    cy.get('[data-testid="btn-5"]').click();
    cy.get('[data-testid="btn-add"]').click();
    cy.get('[data-testid="btn-3"]').click();
    cy.get('[data-testid="btn-equals"]').click();
    cy.get('[data-testid="display"]').should("have.value", "8");
  });

  it("Subtraction: 10 - 4 = 6", () => {
    cy.get('[data-testid="btn-1"]').click();
    cy.get('[data-testid="btn-0"]').click();
    cy.get('[data-testid="btn-subtract"]').click();
    cy.get('[data-testid="btn-4"]').click();
    cy.get('[data-testid="btn-equals"]').click();
    cy.get('[data-testid="display"]').should("have.value", "6");
  });

  it("Multiplication: 6 * 7 = 42", () => {
    cy.get('[data-testid="btn-6"]').click();
    cy.get('[data-testid="btn-multiply"]').click();
    cy.get('[data-testid="btn-7"]').click();
    cy.get('[data-testid="btn-equals"]').click();
    cy.get('[data-testid="display"]').should("have.value", "42");
  });

  it("Division: 15 / 3 = 5", () => {
    cy.get('[data-testid="btn-1"]').click();
    cy.get('[data-testid="btn-5"]').click();
    cy.get('[data-testid="btn-divide"]').click();
    cy.get('[data-testid="btn-3"]').click();
    cy.get('[data-testid="btn-equals"]').click();
    cy.get('[data-testid="display"]').should("have.value", "5");
  });
});
