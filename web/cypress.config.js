const { defineConfig } = require("cypress");
const dbClear = require("./cypress/support/clearDb");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    execTimeout: 10000,
    specPattern: "cypress/tests/e2e/*.spec.js",
    // supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        async clearDB() {
          await dbClear();
          return null;
        }
      })
    },
  },
});
