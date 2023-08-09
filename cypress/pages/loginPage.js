
class loginPage{

    elements ={
//  Signup Form
        signupFormTitle    : () => cy.get('[class="signup-form"] > h2'),
        signupName      : () => cy.get('[data-qa="signup-name"]'),
        signupEmail  : () => cy.get('[data-qa="signup-email"]'),
        signupBtn  : () => cy.get('[data-qa="signup-button"]'),
//  Login Form
        loginFormTitle  : () => cy.get('[class="login-form"] > h2 > b'),
        titleMr : ()=> cy.get('#id_gender1'),
        titleMrs : ()=> cy.get('#id_gender2'),
        password    : () => cy.get('#password'),
        days    : () => cy.get('#days'),
        months    : () => cy.get('#months'),
        years    : () => cy.get('#years'),
        newsletter : ()=> cy.get('#newsletter'),
        uniformOptin : ()=> cy.get('#optin'),
        createCccountBtn : () => cy.get('[data-qa="create-account"]'),
    }

    clickOnSignup(){

        this.elements.signupBtn().click()

    }

    selectDay(option){
        this.elements.days().select(option, { force: true })
    }

    selectMonth(option){
        this.elements.months().select(option, { force: true })
    }

    selectYear(option){
        this.elements.years().select(option, { force: true })
    }

    inputAccountInfor(){
        this.elements.titleMr().check();
        this.elements.password().type('12345');
        this.elements.days().select('8', { force: true });
        this.elements.months().select('May', { force: true });
        this.elements.years().select('1990', { force: true })
        this.elements.newsletter().check();
        this.elements.uniformOptin().check();
    }

    inputAddressInfor(){
        cy.get('#first_name').type('lea');
        cy.get('#last_name').type('hane');
        cy.get('#address1').type('address1');
        cy.get('#country').select('Canada',{force:true});
        cy.get('#state').type('State');
        cy.get('#city').type('Hanoi');
        cy.get('#zipcode').type('100000');
        cy.get('#mobile_number').type('12345678');
    }

    clickCreateAcctBtn(){
        this.elements.createCccountBtn().click();
    }

}

module.exports = new loginPage();