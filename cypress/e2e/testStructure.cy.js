/// <reference types="cypress" />

describe('Context: My First Tests', ()=>{
    before(()=>{

        //runs once before all test cases in this decribe block, like before CLass in testNG


    })
    beforeEach(()=>{
        //run before each test case, beforeMethod in TestNG

        cy.clearCookies();

    })

    after(()=>{
        //similar to afterClass in TestNG, runs once after all tests finished


    })
    afterEach(()=>{
        //similar to afterMethod in TestNG

    })

    it.skip('Opeaning a web application', ()=>{
        cy.visit('/registration_form'); 
           
    })

    xit('Test2', ()=>{
        expect(false).to.equal(false);

    })
    it('Test 3', ()=>{
        expect(false).not.to.equal(true);

    }
    )
    it('test 4', ()=>{
        expect(5).to.equal(5);


    })

    it('Test 5',()=>{
        expect(true).to.equal('5'==5);

    })


})