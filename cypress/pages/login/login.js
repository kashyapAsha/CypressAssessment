const url = 'https://demo.guru99.com/insurance/v1/index.php'
const email = 'input#email'
const password = 'input#password'
const login_btn = 'input[name="submit"]'
const logout = 'input[value="Log out"]'


class loginPage {

  static visit() {
    cy.visit(url);
    cy.wait(4000);
  }

  static enterEmailAndPassword(emailtext,passwordtext) {
    cy.get(email).type(emailtext);
    cy.wait(3000)
    cy.get(password).type(passwordtext);

  }

  static clickOnLogin() {
    cy.get(login_btn).click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(1000) 
  }

  static successfullvalidateLogin() {
    cy.contains('Broker Insurance WebPage').should('be.visible')
    cy.wait(1000) 
  }

  static unsuccessfullLoginValidation() {
  cy.contains("Enter your Email address and password correct").should('be.visible')
  }

  static logout(){
    cy.get(logout).click()
    
  }

  static validatelogout(){
   cy.get("a[href='register.php']").should('be.visible')
  }

}

export default loginPage;