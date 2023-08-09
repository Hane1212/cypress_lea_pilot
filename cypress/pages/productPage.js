
class productPage{

    elements ={
        loginBtn    : () => cy.get('a[href*="login"]'),
        header      : () => cy.get('#header'),
        deleteAcct  : () => cy.get('a[href*="delete_account"]'),
        searchProduct : ()=> cy.get('#search_product'),
        productList : ()=> cy.get('[class="features_items"]')
    }

    clickOnSignin(){

        this.elements.loginBtn().click()

    }

    clickOnDetailProduct(option){
        cy.get('a[href*="product_details/'+option+'"]').first().click();
    }

    clickOnTheFirstProduct(){
        this.clickOnDetailProduct('1');
    }
    
    getProductName = async (option) => {
        cy.get('[data-product-id="'+option+'"]').first().parent().find('p').invoke('text').as('name')
        const name = await cy.get('@name');
        return name;
    }

    getTheFirstProductName = async () => {
        return await this.getProductName('1');
    }

    getTheSecondProductName = async () => {
        cy.log('The second product Name')
        cy.log(await this.getProductName('2'))
        return await this.getProductName('2');
    }

    getProductPrice = async (option) => {
        cy.get('[data-product-id="'+option+'"]').first().parent().find('h2').invoke('text').as('price')
        const name = await cy.get('@price');
        return name;
    }

    getTheFirstProductPrice = async () => {
        return await this.getProductPrice('1');
    }

    verifyProductName = async(option, searchItem)=>{
        cy.get('[data-product-id="'+option+'"]').first().parent().find('p').should('have.text',searchItem)
    }

    getNumbOfProduct = async () => {
        cy.get('[class="single-products"]').its('length').as('pLength')
        const productLength = await cy.get('@pLength');
        cy.log('--------ProductLength----------')
        cy.log(productLength)
        return await cy.get('@pLength');
    }

    getRandomProductNumber = async () => {
        const productNumb = await this.getNumbOfProduct();
        return this.getRandomNumber(1, productNumb);
    }

    getRandomNumber (min, max) {
       return (Math.random() * (max - min) + min);
    }

    VerifySearchResult = async(searchItem) =>{
        const productNumb = await this.getNumbOfProduct();
        for(var i=1;i<productNumb+1;i++){
            this.verifyProductName(i,searchItem);
        }
    }

}

module.exports = new productPage();