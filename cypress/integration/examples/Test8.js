/// <reference types="Cypress" />
/// <reference types ="cypress-iframe"/>
import "cypress-iframe";

describe("first test suite", function () {
  it("My eigth test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    //iframe handling

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();

    cy.wait(1000);
    const len = cy
      .iframe()
      .find("div[class *='pricing-container']")
      .should("have.length", 2);
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled

//for iframe - install - npm install -D cypress-iframe
