/// <reference types="cypress" />


describe('Context: Test Cases', ()=>{
   
    beforeEach(()=>{
        //run before each test case, beforeMethod in TestNG

        cy.clearCookies();
        cy.visit('/multiple_buttons');

    })

    it.only('Check Different Button Actioons', ()=>{
      //select a button with text
      cy.contains('Button 2').should('be.visible').click();
      cy.contains('Clicked on button two!').should('be.visible');

      //find element with class attribute and create a list then seelect 3rd element
      //from the list
      cy.get('.btn.btn-primary').then(($buttons)=>{
        cy.wrap($buttons).eq(2).click();// zero-one-two.. equal to -->two is the third element
        //assert the text
        cy.contains('Clicked on button three!').should('be.visible');
      })


           
    })
})