
class Reputation
{
    userName="input[placeholder='Enter your email address']";
    password="input[placeholder='Enter your password']";

    verifyPageHeader(teamsURL)
    {
        cy.url().should('eq', Cypress.config().baseUrl + teamsURL)
    }

    searchTeamNameAndAddToFavourite()
    {
    cy.wait(5000)
    cy.xpath('//h2[text()="All Teams"]').scrollIntoView()
    cy.wait(6000)
    cy.xpath('//p[text()="Manchester City"]').scrollIntoView()
    cy.wait(5000)
    cy.xpath('(//button[contains(@class, "css-a654yl")])[23]').click()
    }

}
export default Reputation;