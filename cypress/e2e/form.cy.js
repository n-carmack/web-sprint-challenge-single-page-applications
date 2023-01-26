describe('tests', function() {
    it('Checks for name', function(){
        cy.visit("http://localhost:3000/pizza")
        cy.get('input[name="name"]')
            .type('John Doe')
            .should('have.value','John Doe')

        cy.get('input[name="topping1"]')
            .click('')    
        
            cy.get('input[name="topping3"]')
            .click('')    

        
        cy.get('input[type="submit"]')
            .click('')
    })
})