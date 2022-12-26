const incident = 'input#quotation_incidents'
const  registration = 'input#quotation_vehicle_attributes_registration'
const annualMileage = 'input#quotation_vehicle_attributes_mileage'
const estimatedValue = 'input#quotation_vehicle_attributes_value'
const saveQyotation = 'input[value="Save Quotation"]'
const retrieveQuote = '#getquote'


class quotationPage {

  static openRequestQuotation() {
    cy.wait(2000)
        cy.contains("Request Quotation").click()
  }

  static enterRequiredData(incidenttext,registrationtext,annualMileagetext,estimatedValuetext) {
    cy.get(incident).type(incidenttext)
        cy.get(registration).type(registrationtext)
        cy.get(annualMileage).type(annualMileagetext)
        cy.get(estimatedValue).type(estimatedValuetext)

  }

  static saveQuotation() {
    cy.get(saveQyotation).click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(1000) 
  }

 
  static retrieveQuotation(){
    cy.go(-1)
          cy.contains("Retrieve Quotation").click()
          //cy.get("[placeholder='identification number']").type("123")
          cy.get(retrieveQuote).click()
  }

}

export default quotationPage;