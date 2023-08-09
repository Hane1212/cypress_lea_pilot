import homePage from "../pages/homePage"
import productPage, { verifyProductName } from "../pages/productPage"

describe('Verify All Products and product detail page',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });
  
    it('Verify user is navigated to ALL PRODUCTS page successfully', ()=>{
      homePage.elements.productsBtn().click();
      cy.url().should('include', 'products') 
    })

    it('Verify that detail detail is visible: product name, category, price, availability, condition, brand', async ()=>{
        const productName = await productPage.getTheFirstProductName();
        productPage.clickOnTheFirstProduct();
        cy.log('productName')
        cy.log(productName)
        cy.get('[class="product-information"] > h2').should('have.text', productName);
        cy.get('[class="product-information"] > p').should(($cal) => {
            expect($cal).to.contain('Category')
          })
        // homePage.elements.header().should('be.visible')

    })
})

describe('Search Product',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });
  
    it('Verify SEARCHED PRODUCTS is visible', ()=>{
        homePage.elements.productsBtn().click();
        productPage.elements.searchProduct().should('be.visible')
    })

    it('Verify all the products related to search are visible',async ()=>{
      const search = 'blue';
      await homePage.elements.productsBtn().click();
      await productPage.elements.searchProduct().type(search);
      await cy.get('#submit_search').click();
      await productPage.VerifySearchResult(search)
        // cy.log(productPage.elements.productItems().length)
        // cy.log("------------------------------", productPage.elements.productItems().length)
        // const productNumb = await productPage.getNumbOfProduct();
        // expect(productNumb).to.eq(7);
    })
})