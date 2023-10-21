/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My second test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    //create alias
    cy.get(".products").as("productLocator");
    var vegText = "";
    cy.get("@productLocator")
      .find(".product")
      .each(($e1, index, $list) => {
        vegText = $e1.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($e1).find("button").click();
        }
      });
    cy.get(".tada").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get(".product-name").should("include.text", vegText);
    cy.contains("Place Order").click();
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled
