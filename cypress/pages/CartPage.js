
class CartPage{

    elements ={
        processToCheckout    : () => cy.get('[class="btn btn-default check_out"]'),
    }

    clickOnProcessToCheckout(){
        this.elements.processToCheckout().click({force:true})
    }

    clickOnSignin(){
        this.elements.loginBtn().click()
    }

    clickOnCart(){
        this.elements.cart().first().click();
    }

}

module.exports = CartPage;