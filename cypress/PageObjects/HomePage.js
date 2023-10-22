class HomePage {
  getNameField() {
    return cy.get('input[name = "name"]:nth-child(2)');
  }

  getSelectField() {
    return cy.get("#exampleFormControlSelect1");
  }
}

export default HomePage;
