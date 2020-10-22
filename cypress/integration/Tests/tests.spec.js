before(() => {
    cy.visit('/').title().should('eq','OOS: Crew applications')
})

describe('Open Ocean Studio - Crew Application Feature', () => {

    describe('Given the company looks for the Crew Application', () => {
        it('Then the compnay can see all three stages of Crew Application Status', () => {        
            cy.get('.App-column').children().contains('Applied').should('be.visible')
            cy.get('.App-column').children().contains('Interviewing').should('be.visible')
            cy.get('.App-column').children().contains('Hired').should('be.visible')
        })
    })

    
    describe('Given the company tries to add Crew details', () => {
        it('Then the Crew Details are added into the Application', () => {        
            cy.get('form').within(($form) => {
                cy.get('#name')
                    .type('James Bond').should('have.value', 'James Bond')
                cy.get('#city')
                    .type('London').should('have.value', 'London')

                cy.contains('Submit').should('be.visible').click()         
            })
                cy.get('.CrewMember-container').should('not.be.visible')

            cy.get('form').within(($form) => {
                cy.contains('Clear').should('be.visible').click()  
            })
                cy.get('.CrewMember-container').should('be.visible')
        })
    })

    describe('Given the company tries to proceed the Crew Applications', () => {

        it('Then the company can successfully move forward the Crew Applications from Applied to Interviewing Stage', () => {              
            cy.get('.CrewMember-up').click({ multiple: true })        
        })

        it('Then the company can successfully move forward the Crew Applications from Interviewing to Hired Stage', () => { 
            cy.get('.CrewMember-up').click({ multiple: true }) 
        })   

        it('Then the company can successfully move back the Crew Applications from Hired to Interviewing Stage', () => { 
            cy.get('.CrewMember-toolbar').click(1,1,{ multiple: true }) 
        }) 

        it('Then the company can successfully move back the Crew Applications from Interviewing to Applied Stage', () => { 
            cy.get('.CrewMember-toolbar').click(1,1, {multiple: true }) 
        }) 

    })
})