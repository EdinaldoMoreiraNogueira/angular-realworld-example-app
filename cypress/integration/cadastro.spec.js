describe('Cadastro ', () => {

    const usuario = 'usuario' + (new Date()).getTime();
    const senha = 'senha' + (new Date()).getTime();


    it('Novo Usuario', () => {
    
       cy.visit('http://localhost/register')
    
       cy.get('[formcontrolname=username]').type(usuario)

       cy.get('[formcontrolname=email]').type(usuario + '@email.com')

       cy.get('[formcontrolname=password]').type(senha)

       cy.get('.btn').click()

       cy.contains('.nav-item:nth-child(4) > .nav-link' , usuario).click()
    
       .should('be.visible')

    })

    it('Usuario Exixtente', () => {
    
        cy.visit('/register')
     
        cy.get('[formcontrolname=username]').type(usuario)
 
        cy.get('[formcontrolname=email]').type(usuario + '@email.com')
 
        cy.get('[formcontrolname=password]').type(senha)
 
        cy.get('.btn').click()
 
        cy.location('pathname').should('equal', '/register').click()

        cy.get('.error-messages > li:nth-child(1)')
     
        .should('not.be.empty')
     
     })

     
 
    
   
   })
   