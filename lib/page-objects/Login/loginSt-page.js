import { validAdminUser } from "../../fixtures/login";
import { invalidAdminUser } from "../../fixtures/login";
class LoginPage {
    navigate() {
        cy.visit("https://admin-demo.nopcommerce.com/");
    }
    get enterEmail() {
        return cy.get("#Email");
    }
    get enterPassword() {
        return cy.get("#Password");
    }
    loginButton() {
        return cy.get("[type=submit]").click();
    }
    loginFailMessage() {
        return cy.get(".validation-summary-errors");
    }
    wrongEmailError() {
        return cy.get("#Email-error");
    }
    emptyEmail() {
        return cy.get("#Email-error");
    }
    login() {
        this.navigate();
        this.enterEmail.type(validAdminUser.email);
        this.enterPassword.type(validAdminUser.password);
        this.loginButton();
    }
    invalidlogin() {
        this.navigate();
        this.enterEmail.type(invalidAdminUser.email);
        this.enterPassword.type(invalidAdminUser.password);
        this.loginButton();
    }
    enterWrongEmail() {
        this.navigate();
        this.enterEmail.clear();
        this.enterEmail.type("1234Swsw");
        this.loginButton();
    }
    leavEmailEmpty() {
        this.navigate();
        this.enterEmail.clear();
        this.loginButton();
    }
}
export const loginpage = new LoginPage();
//# sourceMappingURL=loginSt-page.js.map