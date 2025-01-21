
export default class Homepage{
  constructor(){}

  verifySearchBar(name){
    cy.get("#searchbar").type(name);
    cy.wait(1000);
    cy.get("#search-results")
      .find(".list")
      .find(".active")
      .click({ force: true });
  }
}