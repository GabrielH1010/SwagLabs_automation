const firstName = 'Gabriel'
const lastName = 'Henrique'
const postalCode = '38400000'

Cypress.Commands.add('validateCheckout', function(){
    cy.validateAddCart()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('be.visible')
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.get('.checkout_info').should('be.visible')
    cy.get('[data-test="firstName"]').type(firstName, {delay: 0}).should('have.value', firstName)
    cy.get('[data-test="lastName"]').type(lastName, {delay: 0}).should('have.value', lastName)
    cy.get('[data-test="postalCode"]').type(postalCode, {delay: 0}).should('have.value', postalCode)
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('.cart_list').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')
    cy.get('[data-test="finish"]').should('be.visible').click()
    cy.get('#checkout_complete_container').should('be.visible')
    cy.get('[data-test="back-to-products"]').should('be.visible').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
})