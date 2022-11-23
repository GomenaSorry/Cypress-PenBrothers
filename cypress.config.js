const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.js'
  },
  env: {
    url: 'https://dpbdboo.github.io/Testing-App/#'
  }
});
