import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage"

describe('Register User', () => {
  // it('Navigate to page', () => {
  //   cy.visit('https://automationexercise.com/')
  // })
  // cy.get('#id)

  
  before(()=>{
    cy.visit('https://automationexercise.com/')
  });

  it('Verify that home page is visible successfully', ()=>{
    homePage.elements.header().should('be.visible')
  })

  it(' Verify New User Signup! is visible', ()=>{
    homePage.clickOnSignin();
    loginPage.elements.signupFormTitle().should('have.text','New User Signup!');
    // #form > div > div > div:nth-child(3) > div > h2
  })

  it('Verify that ENTER ACCOUNT INFORMATION is visible', ()=>{
    // #form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)
    loginPage.elements.signupName().type('lea_test_003');
    loginPage.elements.signupEmail().type('lea_test_003@gmail.com');
    loginPage.clickOnSignup()
    loginPage.elements.loginFormTitle().should('have.text','Enter Account Information');
    // #form > div > div > div:nth-child(3) > div > h2
  })


  it('Verify that ACCOUNT CREATED! is visible', ()=>{
    loginPage.inputAccountInfor();
    loginPage.inputAddressInfor();
    loginPage.clickCreateAcctBtn();
    cy.get('[class="title text-center"]').should('have.text','Account Created!');

  })
  
  it('Verify that Logged in as username is visible', ()=>{
    cy.get('[class="btn btn-primary"]').click();
    cy.get('#header [class="fa fa-user"]').parent().should('have.text',' Logged in as lea_test_003')
  })

  it('Verify that ACCOUNT DELETED! is visible', ()=>{
    homePage.elements.deleteAcct().click();
    cy.get('[class="title text-center"]').should('have.text','Account Deleted!');
  })
})

describe('Login User with correct email and password',()=>{
  before(()=>{
    cy.visit('https://automationexercise.com/')
  });

  it('Verify that home page is visible successfully', ()=>{
    cy.get('#header').should('be.visible')
  })

  it('Verify Login to your account is visible', ()=>{
    homePage.clickOnSignin();
    cy.get('[class="login-form"] > h2').should('have.text','Login to your account');
  })

  it('Verify that Logged in as username is visible', ()=>{
    cy.get('[data-qa="login-email"]').type('lea_test_005@gmail.com');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header [class="fa fa-user"]').parent().should('have.text',' Logged in as lea_test_005')
  })

  // it('Verify that logout', ()=>{
  //     // TODO
  //     cy.get('[class="fa fa-lock"]').click();
  // })

  after(()=>{
    cy.get('[class="fa fa-lock"]').click();
  });

})



