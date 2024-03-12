Cypress.Commands.add('validateListing', function(){
    cy.get('.inventory_list > :nth-child(1)').should('be.visible')
})

Cypress.Commands.add('validateDescription', function(){
    cy.get('.inventory_item_img').should('be.visible')
    cy.get('.inventory_item_description').should('be.visible')
})

Cypress.Commands.add('validateAddToCart', function(){
    cy.get('[data-test^="add-to-cart-sauce-labs"]').each(($button) => {
    cy.wrap($button).should('be.visible');
});
})