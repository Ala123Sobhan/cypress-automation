/// <reference types="Cypress" />
/// <reference types ="cypress-iframe"/>
import "cypress-iframe";

describe("second test suite", function () {
  //run before all test once - before hook
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My 2nd suite 1st test case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name = "name"]:nth-child(2)').type(this.data.name);

    cy.get('input[name = "name"]:nth-child(1)').should(
      "have.value",
      this.data.name
    );
    cy.get('input[name = "name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
    cy.get("#inlineRadio3").should("be.disabled");

    cy.get("ul li[class='nav-item']:nth-child(2)").click();
    cy.selectProducttoCart("Blackberry");
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
