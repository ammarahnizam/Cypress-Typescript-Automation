import { loginpage } from "../../page-objects/Login/loginSt-page";
describe("verify valid login functionality", () => {
    it("should login with correct credentials", () => {
        loginpage.login();
        cy.wait(6000);
        cy.url().should("include", "/admin/");
    });
});
//# sourceMappingURL=validlogin-specs.js.map