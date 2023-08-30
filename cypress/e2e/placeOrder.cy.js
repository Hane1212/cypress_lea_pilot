import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage"
import CartPage from "../pages/CartPage";
import user from '../fixtures/user.json'

const homep = new homePage();
const cartp = new CartPage();

describe('Place Order: Register while Checkout',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });

    it('Verify that cart page is displayed', ()=>{
        cy.get('[data-product-id="'+Cypress._.random(1, 20)+'"] i')
        .first()
        .trigger('mouseover').click();
        cy.get('[class="btn btn-success close-modal btn-block"]').click();
        cy.get('a[href*="view_cart"]').first().click({ force: true });
        cy.url().should('include', 'view_cart') 
    })
  
    it('Verify ACCOUNT CREATED! and click Continue button', ()=>{
         cartp.clickOnProcessToCheckout()
         cy.get('a[href*="login"]').last().click();
         loginPage.createNewAccToCheckout();
         loginPage.clickContinue();
         cy.get('[class="title text-center"]').should('have.text','Features Itemsrecommended items');

    })

    it('Verify Logged in as username at top', ()=>{
        cy.get('#header [class="fa fa-user"]').parent().should('have.text',' Logged in as checkout_test_001')
    })

    it('Verify Address Details and Review Your Order', ()=>{
        homep.clickOnCart();
        cartp.clickOnProcessToCheckout()
    })

    // it('Verify success message Your order has been placed successfully!', ()=>{
        

    // })


    // it('Verify ACCOUNT DELETED! and click Continue button', ()=>{
        

    // })
})

