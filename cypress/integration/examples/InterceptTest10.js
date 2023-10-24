/// <reference types="Cypress" />

describe("second test suite", function () {
  it("My 2nd suite 1st test case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrivals");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@bookretrivals").then(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });

    cy.get("p").should("have.text", "Oops only 1 Book available");

    //cy.intercept({requestobject}, {responseobject})
  });
  it("My 2nd suite 2nd test case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=ala";

        req.continue((res) => {
          // expect(res.statusCode).to.equal(403);
        });
      }
    ).as("dummyUrl");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyUrl");
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
