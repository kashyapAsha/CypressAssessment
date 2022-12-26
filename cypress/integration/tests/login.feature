Feature: Validating login page
  
        Scenario: Successfull Login functionality
            Given Open URL
            When Enter emai "kashyapasha42@gmail.com" and password "asha"
            And Click on login button
            Then user should navigate to home page

            Scenario: logout functionality
            Given Open URL
            When Enter emai "kashyapasha42@gmail.com" and password "asha"
            And Click on login button
            And Click on logout
            Then login page should be visible

            Scenario: UnSuccessfull Login functionality
            Given Open URL
            When Enter emai "123" and password "123"
            And Click on login button
            Then validation message should be visible
            