import { loginpage } from "../../page-objects/Login/loginSt-page";
import { addcust } from "../../page-objects/Customer/customer-page";

beforeEach(() => {
  loginpage.login();
});

describe("Customer Features ", () => {
  it("should add a new customer", () => {
    addcust.addCustomer();
    addcust.message().should("be.visible");
  });

  it("should update a customer", () => {
    addcust.editCustomer();
    addcust
      .message()
      .should("contain.text", "The customer has been updated successfully");
  });

  it.skip("should delete a new customer", () => {
    addcust.deleteCustomer();
    addcust
      .message()
      .should("contain.text", "The customer has been deleted successfully");
  });
});
