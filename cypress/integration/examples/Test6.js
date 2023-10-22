/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My sixth test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    //web table handling

    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      if ($e1.text().includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            expect(price.text()).to.equal("25");
          });
      }
    });

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
