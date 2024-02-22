const username = 'standard_user';
const password = 'secret_sauce';
const incorrecttUsername = 'Test username incorrect'
const incorrecttPassword = 'Test password incorrect';

Cypress.Commands.add('loginError', function(){
    cy.get('[data-test="username"]').should('be.visible').type(incorrecttUsername).should('have.value', incorrecttUsername)
    cy.get('[data-test="password"]').should('be.visible').type(incorrecttPassword).should('have.value', incorrecttPassword)
    cy.get('#login-button').click()
    cy.get('.error-message-container').should('be.visible')
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()
})

Cypress.Commands.add('loginSuccess', function(){
    cy.get('[data-test="username"]').should('be.visible').type(username).should('have.value', username)
    cy.get('[data-test="password"]').should('be.visible').type(password).should('have.value', password)
    cy.get('#login-button').click()
    cy.get('#inventory_container').should('be.visible')
})