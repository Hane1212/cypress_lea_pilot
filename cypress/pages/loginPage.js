
import user from '../fixtures/user.json'
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
        // Create success
        continue: ()=>cy.get('[class="btn btn-primary"]'),
    }

    clickOnSignup(){
        this.elements.signupBtn().click()
    }

    clickContinue(){
        this.elements.continue().click();
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
        this.elements.password().type(user.user1.password);
        this.elements.days().select(user.user1.days, { force: true });
        this.elements.months().select(user.user1.months, { force: true });
        this.elements.years().select(user.user1.years, { force: true })
        this.elements.newsletter().check();
        this.elements.uniformOptin().check();
    }

    inputAddressInfor(){
        cy.get('#first_name').type(user.user1.firstName);
        cy.get('#last_name').type(user.user1.lastName);
        cy.get('#address1').type(user.user1.address);
        cy.get('#country').select(user.user1.country,{force:true});
        cy.get('#state').type(user.user1.state);
        cy.get('#city').type(user.user1.city);
        cy.get('#zipcode').type(user.user1.zipcode);
        cy.get('#mobile_number').type(user.user1.mobileNumber);
    }

    clickCreateAcctBtn(){
        this.elements.createCccountBtn().click();
    }

    createNewAcct(name, email){
        this.elements.signupName().type(name);
        this.elements.signupEmail().type(email);
        this.clickOnSignup()
        this.inputAccountInfor();
        this.inputAddressInfor();
        this.elements.createCccountBtn().click();
    }

    createNewAccToCheckout(){
        this.createNewAcct('checkout_test_001', 'checkout_test_001@gmail.com')
    }

}

module.exports = new loginPage();