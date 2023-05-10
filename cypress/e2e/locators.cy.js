/// <reference types="cypress" />

describe('Find or Get Elements by Using Different Locators', ()=>{
   
    beforeEach(()=>{
        //run before each test case, beforeMethod in TestNG

        cy.clearCookies();
        cy.visit('/login');

    })

    it('Check different locators strategies', ()=>{
        //By css locator
        cy.get("input[name='username']").type("CydeoStudent"); //every stateement creates an 
        //object to be interacted, and next command operaton to the object created at the previous statement
       
        // attribute name and value
        cy.get("[type='text']").clear(); //clears what is typed

        cy.get("input").each((item,index,list)=>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

           
    })

    

})