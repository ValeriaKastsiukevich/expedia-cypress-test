
export class BasePage {

    selectLanguange(language) {
        cy.get('[data-stid="button-type-picker-trigger"]').click()
        cy.get('[id="language-selector"]').select(language)
        cy.get('[class="uitk-scrim fade-button"]').click()
    }

    selectDates(checkInDay, checkOutDay) {
        cy.get ('[href="?pwaLob=wizard-hotel-pwa-v2"]').click()
        cy.get('[id="d1-btn"]').click() 
        cy.get('[data-stid="date-picker-month"]').first().find('[data-day="' + checkInDay + '"]').click ()
        cy.get('[data-stid="date-picker-month"]').last().find('[data-day="' + checkOutDay + '"]').click ()
        cy.get('[data-stid="apply-date-picker"]').click ()
    }

    openSignInPage () {
          // cy.get('[class="global-navigation-site-header-container"]').contains('Sign in').click()
          cy.get ('[class="uitk-button uitk-button-medium uitk-button-fullWidth uitk-button-has-text uitk-button-primary"]').contains('Sign in').click()
          cy.url().should('include','https://www.expedia.com/login')
    }

}

export const basePage = new BasePage()
