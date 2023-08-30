import homePage from "../pages/homePage"
import productPage from "../pages/productPage"
const homep = new homePage();

describe('Add Products in Cart',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });
  
    it('Verify user is navigated to ALL PRODUCTS page successfully', ()=>{
      homep.elements.productsBtn().click();
      cy.url().should('include', 'products') 
    })
    let productName1 = '';
    let productPrice1 = '';
    let productName2 = '';
    let productPrice2 = '';

    it('Verify both products are added to Cart', async ()=>{
        // Hover over first product and click 'Add to cart'
        productName1 = await productPage.getTheFirstProductName();
        productPrice1 = await productPage.getTheFirstProductPrice();
        await cy.get('[data-product-id="1"]').first().trigger('mouseover');
        await cy.get('[class="btn btn-default add-to-cart"]').first().click();
        // Click 'Continue Shopping' button
        await cy.get('[class="btn btn-success close-modal btn-block"]').click();
        //  Hover over second product and click 'Add to cart'
        productName2 = await productPage.getTheSecondProductName();
        await cy.get('[data-product-id="2"]').first().trigger('mouseover');
        await cy.get('[data-product-id="2"]').first().click();
        // Click 'View Cart' button - DO NOT WORK
        await cy.get('[class="btn btn-success close-modal btn-block"]').click();
        await cy.get('a[href*="view_cart"]').first().click({ force: true });
        await cy.get('#product-1').should('be.visible');
        await cy.get('#product-2').should('be.visible');
    })


    it('Verify their prices, quantity and total price', ()=>{
        cy.get('#product-1').find('a[href*="product_details/1"]').should('have.text', productName1)
        // await cy.get('#product-1').find('[class="cart_price"]').should('have.text', productPrice1)
        // await cy.get('#product-1').find('[class="cart_quantity"]').should('have.text', productPrice1)
        // Get quantity number
        // Compare quantity * price = total quantity
    })
    after(()=>{
      cy.get('#product-1').find('.cart_quantity_delete').click()
      cy.get('#product-2').find('.cart_quantity_delete').click()
    });

})

describe('Verify Product quantity in Cart',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });
    let product = '';
    it('Verify product detail is opened', ()=>{
        cy.log('start')
        homep.elements.productsBtn().click();
        // setTimeout(async ()=>{
        product =  productPage.getRandomProductNumber();
        cy.get('a[href*="product_details/'+product+'"]').first().click();
        cy.url().should('include', 'product_details/'+product+'') 
        cy.log('Finish!')
        // }, 2000)
        // const numProd = await productPage.getNumbOfProduct();
       
    })

    it('Verify that product is displayed in cart page with exact quantity', ()=>{
        cy.get('#quantity').clear();
        cy.get('#quantity').type('4');
        cy.get('[class="btn btn-default cart"]').click();
        cy.get('[class="btn btn-success close-modal btn-block"]').click();
        cy.get('a[href*="view_cart"]').first().click({ force: true });
        cy.get('#product-'+product+'').find('.cart_quantity button').should('have.text','4')
    })

    it('Remove Products From Cart', ()=>{
      cy.get('#product-'+product+'').find('.cart_quantity_delete').click()
      cy.get('#product-'+product+'').should('not.exist');
    })


})


describe('View & Cart Brand Products',()=>{
  before(()=>{
    cy.visit('https://automationexercise.com/')
  });

  it('Verify that Brands are visible on left side bar', ()=>{
    cy.get('.brands_products').should('exist');
  })

  it('Verify that user is navigated to brand page and brand products are displayed', ()=>{
    cy.get('[class="nav nav-pills nav-stacked"] li')
      // get the number of elements
      .its('length')
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log(`picked random index ${k}`)
        // get all elements again and pick one
        cy.get('[class="nav nav-pills nav-stacked"] li').eq(k).click()
        // confirm the click
        cy.url().should('include', 'brand_products') 
      })
  })



})