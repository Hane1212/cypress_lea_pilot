
class homePage{

    elements ={

        loginBtn    : () => cy.get('a[href*="login"]'),
        productsBtn    : () => cy.get('#header a[href*="products"]'),
        header      : () => cy.get('#header'),
        deleteAcct  : () => cy.get('a[href*="delete_account"]'),
        cart        :()=> cy.get('a[href*="view_cart"]'),
    }

    clickOnSignin(){

        this.elements.loginBtn().click()

    }

    clickOnCart(){
        this.elements.cart().first().click();
    }

}

module.exports = homePage;