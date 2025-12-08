describe("Home Page", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Dickson").should("exist");
  });
});
