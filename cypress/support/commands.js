// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// DO NOT REMOVE
// Imports Quasar Cypress AE predefined commands
import { registerCommands } from '@quasar/quasar-app-extension-testing-e2e-cypress'
import '@testing-library/cypress/add-commands'
import 'cypress-localstorage-commands'

registerCommands()

Cypress.Commands.add('login', (username, password) => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    form: true, // sets to application/x-www-form-urlencoded
    body: {
      username,
      password
    }
  }).then((res) => {
    cy.setLocalStorage('token', res.body.access_token)
    cy.log(res)
  })
})
