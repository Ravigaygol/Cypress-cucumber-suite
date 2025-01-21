import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I send a GET request to {string}', (url) => {
    cy.request('GET', `https://jsonplaceholder.typicode.com${url}`).as('apiResponse');
});

Then('I should receive a {int} status code', (statusCode) => {
    cy.get('@apiResponse').its('status').should('eq', statusCode);
});

Then('the response should contain a list of users', () => {
    cy.get('@apiResponse').its('body').should('have.length.greaterThan', 0);
    cy.get('@apiResponse').its('body[0]').should('have.property', 'name');
});