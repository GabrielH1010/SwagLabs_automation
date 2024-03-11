/// <reference types="Cypress" />

describe('Fluxo de checkout', function() {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com')
        cy.title().should('be.equal', 'Swag Labs', { timeout: 10000 })
        cy.loginError()
        cy.loginSuccess()
    })
    it('Validação do produto', function() {
        cy.validateListing()
        cy.validateDescription()
        cy.validateAddToCart()
    })

    it('Validação do Filtro', function() {
        cy.validateFilterAZ()
        cy.validateFilterZA()
        cy.validateFilterPriceLowToHigh()
        cy.validateFilterPriceHighToLow()
    })
})
