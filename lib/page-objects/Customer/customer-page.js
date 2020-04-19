class AddCustomer {
    openCustMenu() {
        return cy
            .get('.sidebar-menu > :nth-child(4) > [href="#"]')
            .should("be.visible")
            .click();
    }
    selectCustomer() {
        return cy
            .get(".menu-open > .treeview-menu > :nth-child(1) > .menu-item-link > .menu-item-title")
            .click();
    }
    addCustomerButton() {
        return cy.get(".bg-blue").click();
    }
    get editCustButton() {
        return cy.get(":nth-child(1) > .button-column > .btn");
    }
    get deleteCustButton() {
        return cy.get("#customer-delete");
    }
    custEmail() {
        const uuid = () => Cypress._.random(0, 1e6);
        const id = uuid();
        const customeremail = `admin${id}@nopcommerce.com`;
        return cy.get("#Email").type(customeremail);
    }
    get custFirstName() {
        return cy.get("#FirstName");
    }
    custLastName() {
        const uuid = () => Cypress._.random(0, 1e6);
        const id = uuid();
        const lastname = `Test${id}`;
        return cy.get("#LastName").type(lastname);
    }
    custInfoSave() {
        return cy.get('[name="save"]').click();
    }
    message() {
        return cy.get(".alert");
    }
    get SendEmailButton() {
        return cy.get('[data-target="#sendemail-window"]');
    }
    addCustomer() {
        this.openCustMenu();
        this.selectCustomer();
        this.addCustomerButton();
        this.custEmail();
        this.custFirstName.type("QA");
        this.custLastName();
        this.custInfoSave();
        this.message();
    }
    deleteCustomer() {
        this.openCustMenu();
        this.selectCustomer();
        this.editCustButton.click();
        this.deleteCustButton.click();
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Delete");
        });
        cy.get(".modal-footer > .bg-red").click();
    }
}
export const addcust = new AddCustomer();
//# sourceMappingURL=customer-page.js.map