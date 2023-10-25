/// <reference types="Cypress" />
const neatCSV = require("neat-csv");
let productName;
describe("second test suite", function () {
  it("JWT Session Test", async () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });

    cy.get(".card-body b")
      .eq(1)
      .then(function (ele) {
        productName = ele.text();
      });

    cy.get(".card-body button:last-of-type").eq(1).click();

    cy.get("[routerlink*='cart']").click({ force: "click" });

    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("ind");

    cy.get(".ta-results button").each(($e1, index, $list) => {
      if ($e1.text() === " India") {
        cy.wrap($e1).click();
      }
    });

    cy.get(".action__submit").click();

    cy.wait(2000);

    cy.get(".order-summary button").eq(0).click();

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_ala123sobhan.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);

      console.log(csv);

      const actualProductCSV = csv[0]["Product Name"];

      expect(productName).to.equal(actualProductCSV);
    });
  });
});

//node_modules/.bin/cypress open - open runner
//node_modules/.bin/cypress run to run from cli & in headless mode
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
//modify/mock response data/request to intercept & check security bugs in application
