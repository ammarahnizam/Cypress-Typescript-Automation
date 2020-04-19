class Productcategories {
    openCatalogmenu() {
        return cy
            .get(".sidebar-menu > :nth-child(2) > :nth-child(1)")
            .should("be.visible")
            .click();
    }
    openCategories() {
        return cy
            .get('[style="display: block;"] > :nth-child(2) > .menu-item-link')
            .should("be.visible")
            .click();
    }
    get categoryName() {
        return cy.get("#SearchCategoryName");
    }
    get categorySearch() {
        return cy.get("#search-categories");
    }
    get searchResults() {
        return cy.get("#categories-grid");
    }
    get nosearchResults() {
        return cy.get(".dataTables_empty");
    }
    get matchNameColumn() {
        return cy.get('[style="width: 289px;"]');
    }
    get matchPublishedColumn() {
        return cy.get(".dataTables_scrollHeadInner > .table > thead > tr > :nth-child(2)");
    }
    get matchdisplayColumn() {
        return cy.get('[style="width: 150px;"]');
    }
    get matchEditColumn() {
        return cy.get(".dataTables_scrollHeadInner > .table > thead > tr > .button-column");
    }
    // Methods
    openmenu() {
        this.openCatalogmenu();
        this.openCategories();
    }
    entercorrectkeyword() {
        this.categoryName.type("Computers");
        this.categorySearch.click();
    }
    enterincorrectkeyword() {
        this.categoryName.clear().type("@!#$%");
        this.categorySearch.click();
    }
}
export const prodcategories = new Productcategories();
//# sourceMappingURL=prodcategories-page.js.map