Feature: Validating Quotation
  
        Scenario: Validating Quotation
            Given Open URL
            And Enter emai "kashyapasha42@gmail.com" and password "asha"
            And Click on login button
            When user click on request quotation
            And fill required data
            Then retrieve and validate quotation
           

            

            
            