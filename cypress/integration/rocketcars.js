describe('rocketmiles cars test', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://cars.tmobiletravel.com/')
    })
  
    it('should fill out the form and search', () => {
      cy.get('[data-testid="TypeaheadInput"]')
        .type('MCO')
        .wait(2000)
        .type('{downarrow}')
        .type('{downarrow}')
        .type('{enter}');
      
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})