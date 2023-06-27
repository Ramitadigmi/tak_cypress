describe('Login Azurewebsites', () => {
  it('success login', () => { //tescasespostive
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    cy.get('#Username').type('ramitaD')
    cy.get('#Password').type('ramita12345')
    cy.get('.btn-primary').click()
  })
})