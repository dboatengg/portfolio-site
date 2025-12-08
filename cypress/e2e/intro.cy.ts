describe("Intro section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display your name and title", () => {
    cy.contains("Dickson Boateng").should("be.visible");
    cy.contains("Software Developer").should("be.visible");
  });

  it("should show the introductory paragraphs", () => {
    cy.contains("Hi, I").should("be.visible");
    cy.contains("At first, we just used it to play").should("be.visible");
    cy.contains("Today, I specialize in building").should("be.visible");
  });

  it("should display the profile image", () => {
    cy.get('img[alt="Dickson Boateng"]').should("be.visible");
  });

  it("should have a working 'Learn more' link", () => {
    cy.contains("Learn more →").should("have.attr", "href", "/about").click();

    cy.url().should("include", "/about");
  });

  it("should scroll to projects when clicking 'View my work'", () => {
    cy.contains("View my work →")
      .should("have.attr", "href", "#projects")
      .click();

    // Check if the page actually moved (scroll position > 0)
    cy.window().its("scrollY").should("be.greaterThan", 0);
  });
});
