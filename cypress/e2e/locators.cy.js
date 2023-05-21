/// <reference types="cypress" />

describe('Find or Get Elements by Using Different Locators', () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG

    cy.clearCookies();
    cy.visit('/login');
  });

  it('Check different locators strategies', () => {
    // By css locator
    cy.get("input[name='username']").type('CydeoStudent'); // every stateement creates an
    // object to be interacted, and next command operaton to the object created at the previous statement

    // attribute name and value
    cy.get("[type='text']").clear(); // clears what is typed

    // tagname
    cy.get('input').each((item, index, list) => {
      // assert the length of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // by attribute name

    cy.get('[type]');

    // by classname

    cy.get('.btn.btn-primary');

    // by id

    cy.get('#wooden_spoon');

    // if I want to use text: no xpath in cypress, but it still posible with a different approach

    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by travelling through DOM', () => {
    // travel ro find the login button: locate username box go to parent form-then find button

    cy.get("input[name='username'")
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it.only('Check different type of assertinons', () => {
    // Cypress itself bundles assertions provided by Chai,Sinon and JQuery lib.
    // Should Assertion

    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // expect assertion:
    cy.get('#wooden_spoon').then((buttonElment) => {
      expect(buttonElment).to.have.class('btn btn-primary');
    });
  });
});
