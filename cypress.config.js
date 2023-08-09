const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ff9kt4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});
