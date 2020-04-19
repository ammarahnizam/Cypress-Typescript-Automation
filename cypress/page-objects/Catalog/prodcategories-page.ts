class Productcategories {
  public openCatalogmenu() {
    return cy
      .get(".sidebar-menu > :nth-child(2) > :nth-child(1)")
      .should("be.visible")
      .click();
  }

  public openCategories() {
    return cy
      .get('[style="display: block;"] > :nth-child(2) > .menu-item-link')
      .should("be.visible")
      .click();
  }

  public get categoryName() {
    return cy.get("#SearchCategoryName");
  }

  public get categorySearch() {
    return cy.get("#search-categories");
  }

  public get searchResults() {
    return cy.get("#categories-grid");
  }

  public get nosearchResults() {
    return cy.get(".dataTables_empty");
  }

  public get matchNameColumn() {
    return cy.get('[style="width: 289px;"]');
  }

  public get matchPublishedColumn() {
    return cy.get(
      ".dataTables_scrollHeadInner > .table > thead > tr > :nth-child(2)"
    );
  }

  public get matchdisplayColumn() {
    return cy.get('[style="width: 150px;"]');
  }

  public get matchEditColumn() {
    return cy.get(
      ".dataTables_scrollHeadInner > .table > thead > tr > .button-column"
    );
  }

  // Methods

  public openmenu() {
    this.openCatalogmenu();
    this.openCategories();
  }

  public entercorrectkeyword() {
    this.categoryName.type("Computers");
    this.categorySearch.click();
  }

  public enterincorrectkeyword() {
    this.categoryName.clear().type("@!#$%");
    this.categorySearch.click();
  }
}

export const prodcategories = new Productcategories();
