class Login
{
    userName="input[placeholder='Enter your email address']";
    password="input[placeholder='Enter your password']";

    setUserName(username)
    {
        cy.get(this.userName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.password).type(password);
    }

    clickSubmit()
    {
        cy.get('button').contains('Log In').click();
    }

    verifyLogin()
    {
        cy.wait(10000)
        cy.get('.MuiTypography-h2').should('contain', 'Upcoming for you')
    }
}
export default Login;