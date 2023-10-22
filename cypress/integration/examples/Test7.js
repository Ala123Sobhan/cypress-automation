/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My seventh test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    //pop-up table handling using jquery

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");

    //force click invisible element

    cy.contains("Reload").click({ force: true });

    cy.on("uncaught:exception", (err, runnable) => {
      // Handle the exception here
      // You can log the error or take other actions
      console.error("Uncaught Exception:", err.message);
      // If you want to prevent Cypress from failing the test
      return false;
    });
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled
