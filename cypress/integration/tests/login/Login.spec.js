import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import loginPage from '../../../pages/login/login';

Given("Open URL", () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
});

When(`Enter emai {string} and password {string}`, (email,password) => {
    loginPage.enterEmailAndPassword("kashyapasha42@gmail.com","asha");
});

And('Click on login button', () => {
    loginPage.clickOnLogin();
})

Then('user should navigate to home page', () => {
    loginPage.successfullvalidateLogin();
});

Then('validation message should be visible', () => {
    loginPage.successfullvalidateLogin();
});

And('Click on logout', () => {
    loginPage.logout();
})

Then('login page should be visible', () => {
    loginPage.validatelogout();
})

