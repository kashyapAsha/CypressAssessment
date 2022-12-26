Feature: Validating Quotation
  
        Scenario: Validating Quotation
            Given Open URL
            And Enter emai "kashyapasha42@gmail.com" and password "asha"
            And Click on login button
            When user click on request quotation
            And fill required data
            And save quotation
            Then go to retrieve quotation page

            

            
            