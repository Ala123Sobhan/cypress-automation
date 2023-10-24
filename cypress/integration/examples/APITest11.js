/// <reference types="Cypress" />

describe("second test suite", function () {
  it("My 2nd suite api test case", function () {
    //cy.request(method, url, body);

    cy.request(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      ""
    ).then(function (response) {
      expect(response.status).to.eq(200);
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
