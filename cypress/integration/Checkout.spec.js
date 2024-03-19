/// <reference types="Cypress" />

describe('Fluxo de checkout no site Swag Labs', function() {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('be.equal', 'Swag Labs', { timeout: 15000 })
        cy.url().should('be.equal', 'https://www.saucedemo.com/');
        cy.loginError()
        cy.loginSuccess()
    })
    it('Validação do item produto na tela de listagem dos produtos', function() {
        cy.validateListing()
        cy.validateDescription()
        cy.validateAddToCart()
    })
    it('Validação do Filtro de produtos por ordem alfabética e por preço', function() {
        cy.validateFilterAZ()
        cy.validateFilterZA()
        cy.validateFilterPriceLowToHigh()
        cy.validateFilterPriceHighToLow()
    })
    it('Validação de que o produto está sendo adicionado ao carrinho', function() {
        cy.validateAddCart()
        cy.validateRemoveCart()
        cy.validateMyCart()
    })
    it('Validação do checkout', function() {
        cy.validateCheckout()
    })
    it('Validação Logout', function() {
        cy.validateLogout()
    })
})
