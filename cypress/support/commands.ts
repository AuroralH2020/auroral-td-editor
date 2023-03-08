// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.

// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(username: string, password: string): typeof login
    clickNavigation(name: string): typeof clickNavigation
    registerNode(name: string, url: string): typeof registerNode
  }
}

function login(username: string, password: string): void {
  cy.visit('/')
  cy.url().should('includes', 'auth/login')
  cy.get('[label="Username"]').type(username)
  cy.get('[label="Password"]').type(password)
  cy.get('button').click()
  cy.url().should('includes', 'home/sections/items')
}

function clickNavigation(name: string): void {
  cy.get(`app-nav-button[name="${name}"]`).click()
}

function registerNode(name: string, url: string): void {
  cy.url().should('include', 'home/sections/nodes')
  cy.get('app-button').contains('Register').click()
  cy.get('[label="Name"]').type(name)
  cy.get('app-url-field').type(url)
  cy.get('app-button').contains('Create').click()
}

// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
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
Cypress.Commands.add('login', login)
Cypress.Commands.add('clickNavigation', clickNavigation)
Cypress.Commands.add('registerNode', registerNode)

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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
