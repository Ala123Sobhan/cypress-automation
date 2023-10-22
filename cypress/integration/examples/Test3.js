/// <reference types="Cypress" />

describe("first test suite", function () {
  it("My third test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    //checkbox
    cy.get("input#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("input#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);

    //static dropdown
    cy.get("select").select("option2").should("have.value", "option2");
    //dynamic dropdown
    cy.get("#autocomplete").type("Ban");
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "Bangladesh") {
        cy.wrap($e1).click();
      }
    });

    cy.get("#autocomplete").should("have.value", "Bangladesh");
    //radio btn
    cy.get("input[value = 'radio2']").check().should("be.checked");

    cy.get("input[value = 'option3']").uncheck().should("not.be.checked");
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled
