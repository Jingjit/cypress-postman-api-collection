const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    env: {
      "postmanUrl": "https://api.getpostman.com",
      "postmanApiKey": "CYPRESS_POSTMAN_API_KEY",
      "workspaceId": "CYPRESS_WORK_SPACE_ID"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
