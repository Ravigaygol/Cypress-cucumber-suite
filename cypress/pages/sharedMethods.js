/// <reference types="Cypress" />

export default class SharedMethods{
    constructor(){}

    visitToHomepage(){
        cy.visit('https://www.singlecare.com/');
    }
}