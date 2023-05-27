describe('Test app', () => {

    beforeEach(() => {
        cy.openApp();
    })

    it('Checking data in tables and info panels', () => {
        cy.runProject();
        cy.clickOnAddButton();
        cy.addCertificate('cypress/fixtures/cert.cer2.cer', { action: 'drag-drop' })

        cy.get('.list-group-item').contains('Таксер Тест Тестерович');
        cy.get(':nth-child(1) > .ng-binding').contains('Таксер Тест Тестерович')
        cy.get(':nth-child(2) > .ng-binding').contains('UA-22723472')
        cy.get(':nth-child(3) > .ng-binding').contains('2015-04-08 21:00:00 UTC')
        cy.get(':nth-child(4) > .ng-binding').contains('2017-04-08 21:00:00 UTC')
    })
})