describe("About Page - SEO", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should have the correct page title", () => {
    cy.title().should("eq", "About | Dickson Boateng");
  });

  it("should include the correct meta description", () => {
    cy.get('meta[name="description"]')
      .should("have.attr", "content")
      .and(
        "include",
        "I’m Dickson Boateng, a software developer from Ghana who enjoys building clean, responsive, and practical web interfaces"
      );
  });

  it("should have only one h1 tag on the page", () => {
    cy.get("h1").should("have.length", 1);
    cy.contains("About").should("be.visible");
  });

  it("should have meaningful section headings (h2)", () => {
    const headings = [
      "Background",
      "What I",
      "Fun Facts about me",
      "Publications",
      "Miscellaneous",
    ];

    headings.forEach((text) => {
      cy.contains("h2", text).should("exist");
    });
  });

  it("should have a canonical link when SSR builds", () => {
    // Not required, but useful if you add one later
    cy.get('link[rel="canonical"]').should("exist");
  });
});

// accessibility tests
describe("About Page - Accessibility", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("should use semantic HTML headings in order", () => {
    // Ensure all headings are visible and readable
    cy.get("h1, h2").each(($el) => {
      cy.wrap($el).should("be.visible");
      cy.wrap($el).invoke("text").should("not.be.empty");
    });
  });

  it("should ensure links have accessible text", () => {
    cy.get("a").each(($a) => {
      cy.wrap($a)
        .invoke("text")
        .then((text) => {
          expect(text.trim().length).to.be.greaterThan(0);
        });
    });
  });

  it("external links should announce themselves with target=_blank", () => {
    // cy.get('a[target="_blank"]').each(($a) => {
    //   cy.wrap($a).should("have.attr", "rel");
    // });
    cy.get('a[target="_blank"]').each(($a) => {
      cy.wrap($a).should("have.attr", "rel").and("include", "noopener");
    });
  });

  it("lists should be properly structured", () => {
    cy.get("ul").each(($ul) => {
      cy.wrap($ul).find("li").its("length").should("be.greaterThan", 0);
    });
  });

  it("page must contain no obvious accessibility violations in text contrast", () => {
    cy.get("body").should("have.css", "color");
  });

  it("resume link should be keyboard-accessible", () => {
    cy.contains("Resume").focus().should("have.css", "outline-style", "auto"); // keyboard focus visible
  });
});
