class AddCustomer {
  public openCustMenu() {
    return cy
      .get('.sidebar-menu > :nth-child(4) > [href="#"]')
      .should("be.visible")
      .click();
  }

  public selectCustomer() {
    return cy
      .get(
        ".menu-open > .treeview-menu > :nth-child(1) > .menu-item-link > .menu-item-title"
      )
      .click();
  }

  public addCustomerButton() {
    return cy.get(".bg-blue").click();
  }

  public get editCustButton() {
    return cy.get(":nth-child(1) > .button-column > .btn");
  }

  public get deleteCustButton() {
    return cy.get("#customer-delete");
  }

  public custEmail() {
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const customeremail = `admin${id}@nopcommerce.com`;
    return cy.get("#Email").type(customeremail);
  }

  public get custFirstName() {
    return cy.get("#FirstName");
  }

  public custLastName() {
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const lastname = `Test${id}`;
    return cy.get("#LastName").type(lastname);
  }

  public custInfoSave() {
    return cy.get('[name="save"]').click();
  }

  public message() {
    return cy.get(".alert");
  }

  public get SendEmailButton() {
    return cy.get('[data-target="#sendemail-window"]');
  }

  public addCustomer() {
    this.openCustMenu();
    this.selectCustomer();
    this.addCustomerButton();
    this.custEmail();
    this.custFirstName.type("QA");
    this.custLastName();
    this.custInfoSave();
    this.message();
  }

  public deleteCustomer() {
    this.openCustMenu();
    this.selectCustomer();
    this.editCustButton.click();
    this.deleteCustButton.click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Delete");
    });
    cy.get(".modal-footer > .bg-red").click();
  }

  public editCustomer() {
    this.openCustMenu();
    this.selectCustomer();
    this.editCustButton.click();
    this.custFirstName.clear().type("Cypress");
    this.custInfoSave();
  }
}

export const addcust = new AddCustomer();
