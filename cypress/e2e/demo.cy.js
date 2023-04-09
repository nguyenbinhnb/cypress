import Login from "../PageObjects/LoginPage.js"
import Reputation from "../PageObjects/ReputationPage.js"
import Example from "../fixtures/example.json"
const Form_URL = '/#sign-in'
const Teams_URL = '/reputation'
const email= Example.email
const password= Example.password

describe('Test Demo', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
    cy.get('.MuiTypography-h2').should('contain', 'Welcome to ZUJU KICKOFF')
  })

  it('The first demo', () => {
    
    const login=new Login()
    login.setUserName(email)
    login.setPassword(password)
    login.clickSubmit()
    login.verifyLogin()
    cy.visit(Teams_URL)
    const reputation=new Reputation()
    reputation.verifyPageHeader(Teams_URL)
    reputation.searchTeamNameAndAddToFavourite()
       
  })
})
