Cypress.Commands.add('validateAddCart', function(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
})

Cypress.Commands.add('validateRemoveCart', function(){
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible')
})

Cypress.Commands.add('validateMyCart', function(){
    cy.validateAddCart()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('be.visible')
    cy.get('[data-test="checkout"]').should('be.visible')
})

