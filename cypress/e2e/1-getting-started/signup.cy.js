describe('Signup Azurewebsites', () => {
  it('Succes Signup', () => { //testcasepositive
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.url().should('include', 'https://itera-qa.azurewebsites.net/UserRegister/NewUser')
    cy.get('#FirstName').type('ramita')
    cy.get('#Surname').type('digmi')
    cy.get('#E_post').type('ramita.digmi01@gmail.com')
    cy.get('#Mobile').type('088822227777')
    cy.get('#Username').type('ramitaD1')
    cy.get('#Password').type('ramita12345')
    cy.get('#ConfirmPassword').type('ramita12345')
    cy.get('#submit').click()
    cy.get('.label-success').should('have.text', 'Registration Successful')
    
  })
})