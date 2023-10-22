/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My fourth fourth case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");
    //alert
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledgee"
      );
    });

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.on("uncaught:exception", (err, runnable) => {
      // Handle the exception here
      // You can log the error or take other actions
      console.error("Uncaught Exception:", err.message);
      // If you want to prevent Cypress from failing the test
      return false;
    });
    cy.get("#hide-textbox").click();
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled
