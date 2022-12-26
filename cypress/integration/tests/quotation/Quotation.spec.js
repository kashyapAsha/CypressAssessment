import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../pages/login/login';
import quotationPage from '../../../pages/quotation/quotation';
var quotationid
Given("Open URL", () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
});

And(`Enter emai {string} and password {string}`, (email,password) => {
    loginPage.enterEmailAndPassword("kashyapasha42@gmail.com","asha");
});

And('Click on login button', () => {
    loginPage.clickOnLogin();
})

When("user click on request quotation", () => {
    quotationPage.openRequestQuotation()
});

And("fill required data", () => {
    quotationPage.enterRequiredData("abc","123","11","11")
});

And("save quotation", () => {
    quotationPage.saveQuotation()
    
    
        
})

Then("go to retrieve quotation page", () => {
    quotationPage.retrieveQuotation()
})



