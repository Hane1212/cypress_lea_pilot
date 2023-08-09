import homePage from "../pages/homePage"
import productPage, { verifyProductName } from "../pages/productPage"

// describe('Add Products in Cart',()=>{
//     before(()=>{
//       cy.visit('https://automationexercise.com/')
//     });
  
//     it('Verify user is navigated to ALL PRODUCTS page successfully', ()=>{
//       homePage.elements.productsBtn().click();
//       cy.url().should('include', 'products') 
//     })
//     let productName1 = '';
//     let productPrice1 = '';
//     let productName2 = '';
//     let productPrice2 = '';

//     it('Verify both products are added to Cart', async ()=>{
//         // Hover over first product and click 'Add to cart'
//         productName1 = await productPage.getTheFirstProductName();
//         productPrice1 = await productPage.getTheFirstProductPrice();
//         await cy.get('[data-product-id="1"]').first().trigger('mouseover');
//         await cy.get('[class="btn btn-default add-to-cart"]').first().click();
//         // Click 'Continue Shopping' button
//         await cy.get('[class="btn btn-success close-modal btn-block"]').click();
//         //  Hover over second product and click 'Add to cart'
//         productName2 = await productPage.getTheSecondProductName();
//         await cy.get('[data-product-id="2"]').first().trigger('mouseover');
//         await cy.get('[data-product-id="2"]').first().click();
//         // Click 'View Cart' button - DO NOT WORK
//         await cy.get('[class="btn btn-success close-modal btn-block"]').click();
//         await cy.get('a[href*="view_cart"]').first().click({ force: true });
//         await cy.get('#product-1').should('be.visible');
//         await cy.get('#product-2').should('be.visible');
//     })


//     it('Verify their prices, quantity and total price', async()=>{
//         await cy.get('#product-1').find('a[href*="product_details/1"]').should('have.text', productName1)
//         await cy.get('#product-1').find('[class="cart_price"]').should('have.text', productPrice1)
//         // await cy.get('#product-1').find('[class="cart_quantity"]').should('have.text', productPrice1)
//         // Get quantity number
//         // Compare quantity * price = total quantity
//     })

// })

describe('Verify Product quantity in Cart',()=>{
    before(()=>{
      cy.visit('https://automationexercise.com/')
    });
    let product = '';
    it('Verify product detail is opened', async()=>{
        await homePage.elements.productsBtn().click();
        // const numProd = await productPage.getNumbOfProduct();
        product =  await productPage.getRandomProductNumber();
        await cy.get('a[href*="product_details/'+product+'"]').first().click();
        await cy.url().should('include', 'product_details/'+product+'') 
    })

    // it('Verify that product is displayed in cart page with exact quantity', async()=>{
    //     await cy.get('#quantity').type('4');
    //     await cy.get('[class="btn btn-default cart"]').click();
    // })

})