import { basePage } from "../support/page_objects/basePage"

describe ('My first test', () => {
    
    beforeEach('Open application', () =>{
        cy.visit('/')
    })

    it ('first test', () => {
        basePage.selectLanguange('Español')
        cy.get('[class="uitk-layout-flex uitk-layout-flex-gap-two"]').should("have.text",'Español')
        cy.url().should('include','https://www.expedia.com/es/')
    })

    it ('second test', () =>{
        cy.get('[data-stid="location-field-destination-menu-trigger"]').click()
        cy.get('[aria-label="Minsk Belarus"]').click()
        cy.get('[data-stid="location-field-destination-menu-trigger"]').should("have.text","Going to:Minsk")
    })   

    it ('third test', () => {
        basePage.selectDates(25, 27)
    })

    it ('fourth test', () =>{
        basePage.openSignInPage()
       
    })

})

    
