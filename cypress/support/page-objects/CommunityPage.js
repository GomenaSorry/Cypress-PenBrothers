export class CommunityPage{
    
    navigateToCommunityPage(){
        cy.visit(Cypress.env('url'))
    }
    
}