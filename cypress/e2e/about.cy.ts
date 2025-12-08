describe("About Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should display the page heading", () => {
    cy.contains("About").should("be.visible");
  });

  it("should render the Background section with multiple paragraphs", () => {
    cy.contains("Background").should("be.visible");

    cy.contains("I didn’t start my career").should("be.visible");
    cy.contains("But even while studying that degree").should("be.visible");
    cy.contains("That persistence eventually brought me back").should(
      "be.visible"
    );
    cy.contains("Today, I work fully in web development").should("be.visible");
    cy.contains("The path here wasn’t linear").should("be.visible");
    cy.contains("When I’m not coding").should("be.visible");
  });

  it("should have a tech community hyperlink that opens in a new tab", () => {
    cy.contains("tech community")
      .should("have.attr", "href")
      .and("include", "https://x.com");

    cy.contains("tech community").should("have.attr", "target", "_blank");
  });

  it("should display the 'What I'm doing now' section with list items", () => {
    cy.contains("What I").should("be.visible"); // catches “What I’m doing now”

    cy.contains("Working as a full-time remote web developer").should(
      "be.visible"
    );
    cy.contains("boldpixelsgh.com").should("be.visible");
    cy.contains("Building production-ready side projects with NextJS").should(
      "be.visible"
    );
  });

  it("should display Fun Facts", () => {
    cy.contains("Fun Facts about me").should("be.visible");

    cy.contains("Darknet Diaries").should("be.visible");
    cy.contains("Black Mirror").should("be.visible");
    cy.contains("Pavel Durov").should("be.visible");
  });

  it("should display Publications with correct outbound links", () => {
    cy.contains("Publications").should("be.visible");

    const publications = [
      "Asynchronous Programming in JavaScript",
      "React Context API",
      "Document Object Model",
      "Redux and Redux Toolkit",
    ];

    publications.forEach((label) => {
      cy.contains(label)
        .should("have.attr", "href")
        .and("include", "freecodecamp.org");
    });
  });

  it("should display the Resume link", () => {
    cy.contains("Miscellaneous").should("be.visible");

    cy.contains("Resume").should("have.attr", "href", "/DicksonBoatengCV.pdf");
  });
});
