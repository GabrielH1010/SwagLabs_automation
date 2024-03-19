Cypress.Commands.add('validateLogout', function(){
    cy.get('#react-burger-menu-btn').should('be.visible').click();
    cy.get('.bm-menu').should('be.visible')
    cy.get('#logout_sidebar_link').should('be.visible').click();
    cy.url().should('be.equal', 'https://www.saucedemo.com/');
})