export {};

declare global {
    namespace Cypress {
        interface Chainable {
            openApp: () => void,
            runProject: () => void,
            clickOnAddButton: () => void,
            addCertificate: (path: string, action?: object) => void,
        }
    }
}

export function openApp() : void {
    cy.visit('https://js-55fbfg.stackblitz.io');
};

export function runProject() : void {
    cy.get('button').click();
};

export function clickOnAddButton() : void {
    cy.get('.btn-primary').click();
};

export function addCertificate(path: string, action?: object) : void {
    cy.get('.dropbox')
        .selectFile(path, action ? action : {});
};


Cypress.Commands.add('openApp', openApp);
Cypress.Commands.add('runProject', runProject);
Cypress.Commands.add('clickOnAddButton', clickOnAddButton);
Cypress.Commands.add('addCertificate', addCertificate);