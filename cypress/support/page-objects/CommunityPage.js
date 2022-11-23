export class CommunityPage{
    
    navigateToCommunityPage(){
        cy.visit(Cypress.env('url'))
    }

    testCardWillExpireDateCreated = ':nth-child(1) > .card > .card-body > :nth-child(6)'
    testCardWillExpirePostingDate = ':nth-child(1) > .card > .card-body > :nth-child(8)'
    testCardWillExpireExpiryDate = ':nth-child(1) > .card > .card-body > :nth-child(10)'
    testCardWillExpireStatus = ':nth-child(1) > .card > .card-body > .text-center > .m-auto'
    testCardWillExpireNotificationContainer = ':nth-child(1) > .card > .img-container > .test > .notification-container'

    testCardGoLiveTodayStatus = ':nth-child(2) > .card > .card-body > .text-center > .m-auto'
    testCardGoLiveTodayDateCreated = ':nth-child(2) > .card > .card-body > :nth-child(6)'
    testCardGoLiveTodayPostingDate = ':nth-child(2) > .card > .card-body > :nth-child(8)'
    testCardGoLiveTodayExpiryDate = ':nth-child(2) > .card > .card-body > :nth-child(10)'
    testCardGoLiveTodayNotificationContainer = ':nth-child(2) > .card > .img-container > .test > .notification-container'

    testCardGoLiveFutureDateCreated = ':nth-child(3) > .card > .card-body > :nth-child(6)'
    testCardGoLiveFuturePostingDate = ':nth-child(3) > .card > .card-body > :nth-child(8)'
    testCardGoLiveFutureExpiryDate = ':nth-child(3) > .card > .card-body > :nth-child(10)'
    testCardGoLiveFutureStatus = ':nth-child(3) > .card > .card-body > .text-center > .m-auto'
    testCardGoLiveFutureNotificationContainer = ':nth-child(3) > .card > .img-container > .test > .notification-container'

    testCardExpiredDateCreated = ':nth-child(4) > .card > .card-body > :nth-child(6)'
    testCardExpiredPostingDate = ':nth-child(4) > .card > .card-body > :nth-child(8)'
    testCardExpiredExpiryDate = ':nth-child(4) > .card > .card-body > :nth-child(10)'
    testCardExpiredStatus = ':nth-child(4) > .card > .card-body > .text-center > .m-auto'
    testCardExpiredNotificationContainer = ':nth-child(4) > .card > .img-container > .test > .notification-container'
    
}