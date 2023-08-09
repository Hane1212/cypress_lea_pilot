
class homePage{

    elements ={

        loginBtn    : () => cy.get('a[href*="login"]'),
        productsBtn    : () => cy.get('#header a[href*="products"]'),
        header      : () => cy.get('#header'),
        deleteAcct  : () => cy.get('a[href*="delete_account"]'),
    }

    clickOnSignin(){

        this.elements.loginBtn().click()

    }

}

module.exports = new homePage();