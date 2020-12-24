describe ('Post', () => {
    beforeEach('Ver Feed', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')

    })
    it('Novo', () => {

        const tit= 'Cypress E2E'

        cy.contains('New Article').click()

        cy.location('pathname').should('equal', '/editor').click()

        cy.get('[formcontrolname=title]').type(tit)

        cy.get('[formcontrolname=description]').type('Ponta a Ponta')

        cy.get('[formcontrolname=body]').type('Agilidade e Qualidade')

        cy.contains('Publish Article').click()
        
        cy.get('h1').contains('Cypress E2E')

    })

    it('Editar', () => {


        cy.contains('testecypress').click()

        cy.location('pathname').should('contains', '/profile').click()

        cy.get('article-preview').get('h1').first().click()

        cy.contains('Edit Article').click()

        cy.get('[formcontrolname=body]').clear()

        cy.get('[formcontrolname=body]').type('Economia')

        cy.contains('Publish Article').click()
        
        cy.contains('Economia')

    })

   
})