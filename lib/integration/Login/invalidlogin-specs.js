import { loginpage } from "../../page-objects/Login/loginSt-page";
describe("Verify invalid login functionality", () => {
    it("login should be failed using incorrect credentials", () => {
        loginpage.invalidlogin();
        loginpage
            .loginFailMessage()
            .should("contain.text", "Login was unsuccessful");
    });
    it("should show error validation message on wrong email input", () => {
        loginpage.enterWrongEmail();
        loginpage.wrongEmailError().should("have.text", "Wrong email");
    });
    it("should show error validation message on empty email input", () => {
        loginpage.leavEmailEmpty();
        loginpage.emptyEmail().should("have.text", "Please enter your email");
    });
});
//# sourceMappingURL=invalidlogin-specs.js.map