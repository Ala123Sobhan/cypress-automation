/// <reference types="Cypress" />
/// <reference types ="cypress-iframe"/>
import "cypress-iframe";
import HomePage from "../../PageObjects/HomePage";

describe("second test suite", function () {
  const homepage = new HomePage();

  //run before all test once - before hook
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My 2nd suite 1st test case", function () {
    cy.visit(Cypress.env("url") + "/angularpractice/");
    homepage.getNameField().type(this.data.name);

    cy.get('input[name = "name"]:nth-child(1)').should(
      "have.value",
      this.data.name
    );
    cy.get('input[name = "name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    homepage.getSelectField().select(this.data.gender);
    cy.get("#inlineRadio3").should("be.disabled");

    cy.get("ul li[class='nav-item']:nth-child(2)").click();

    //for debugging use -
    //cy.pause()
    //cy.get("ul li[class='nav-item']:nth-child(2)").click().debug();

    this.data.productName.forEach(function (ele) {
      cy.selectProducttoCart(ele);
    });

    //apply 8 sec timeout from here
    //Cypress.config("defaultCommandTimeout", 8000);

    cy.get(".nav-link.btn.btn-primary").click();

    var sum = 0,
      total = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        var res = $el.text();
        res = res.split(" ");
        sum = sum + Number(res[1].trim());
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 strong").then(function (e) {
      total = Number(e.text().split(" ")[1].trim());
      cy.log(total);
    });

    expect(sum).to.equal(total);

    cy.get("button[class='btn btn-success']").click();
    cy.get("#country").type("Bangladesh");
    cy.get("div[class='suggestions'] ul li a").click();
    cy.get("#checkbox2").click({ force: true });

    cy.get("input[value='Purchase']").click();
    cy.get(".alert.alert-success").then(function (ele) {
      const msg = ele.text();
      expect(msg.includes("Success")).to.be.true;
    });
  });
});

//node_modules/.bin/cypress open - open runner
//./node_modules/.bin/cypress run to run from cli & in headless mode
// also can runner can run from cli - npx cypress open(npx because cypress is not globally installed)
// add --headed for visibility
// add --browser chrome/firefox/electron/edge
//cypress supports css selectors only - tagname#id, tagname.classname, tagname[attr = 'value'], tagname childtagname
//cypress is async like js, every commands returns a promise which handled internally by cypress
//non cypress command like text() cant resolve promise by themselves, need to be handled

//for iframe - install - npm install -D cypress-iframe

//invoke spec from cli -
//npx cypress run --spec cypress/integration/examples/Test9Framework.js --headed --browser chrome --env url="https://rahulshettyacademy.com"

//npx cypress run --record --key 207ca353-1e88-4962-ae60-a7d18d659a1b

//for jenkins from cli with jar file - java -jar jenkins.war -httpPort=9090


//burpsuite, fiddler - intercept
//modify data/request to intercept & check security bugs in application
