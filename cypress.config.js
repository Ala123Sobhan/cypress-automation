const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2couyw",
  defaultCommandTimeout: 8000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "CYPRESS-TESTS",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    specPattern: "cypress/integration/examples/*.js",
    experimentalSourceRewriting: false,
  },
});
