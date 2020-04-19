import { prodcategories } from "../../page-objects/Catalog/prodcategories-page";
import { loginpage } from "../../page-objects/Login/loginSt-page";


beforeEach(() => {
  loginpage.login();
});



describe("Verify Catalog Functionality", () => {
  it("should search an existing product catalog", () => {
    prodcategories.openmenu();
    prodcategories.entercorrectkeyword();
    prodcategories.searchResults.eq(0).should("contain", "Computers");
    cy.log("Search Results Found");
  });



  it("should show no search results in case category not found", () => {
    prodcategories.openmenu();

    prodcategories.enterincorrectkeyword();
    cy.wait(2000);
    prodcategories.nosearchResults
      .eq(0)
      .should("contain.text", "No data available in table");
    cy.log("No Search Results Found");
  });

  
  it("should find column names of category table", () => {
    prodcategories.openmenu();
    prodcategories.matchNameColumn.should("have.text", "Name");
    prodcategories.matchPublishedColumn.should("have.text", "Published");
    prodcategories.matchdisplayColumn.should("have.text", "Display order");
    prodcategories.matchEditColumn.should("have.text", "Edit");
  });

   
  it.only("Should contains max 15 categories on a single page", () => {
    prodcategories.openmenu();
    cy.get("tbody").find("tr").should("have.length", 15);
  });
});

