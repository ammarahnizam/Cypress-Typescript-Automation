import { validAdminUser } from "../../fixtures/login";
import { invalidAdminUser } from "../../fixtures/login";

class LoginPage {
  public navigate() {
    cy.visit("https://admin-demo.nopcommerce.com/");
  }

  public get enterEmail() {
    return cy.get("#Email");
  }

  public get enterPassword() {
    return cy.get("#Password");
  }

  public loginButton() {
    return cy.get("[type=submit]").click();
  }

  public loginFailMessage() {
    return cy.get(".validation-summary-errors");
  }

  public wrongEmailError() {
    return cy.get("#Email-error");
  }


  public emptyEmail() {
    return cy.get("#Email-error");
  }
  
  public login() {
    this.navigate();
    this.enterEmail.type(validAdminUser.email);
    this.enterPassword.type(validAdminUser.password);
    this.loginButton();
  }

  public invalidlogin() {
    this.navigate();
    this.enterEmail.type(invalidAdminUser.email);
    this.enterPassword.type(invalidAdminUser.password);
    this.loginButton();
  }

  public enterWrongEmail() {
    this.navigate();
    this.enterEmail.clear();
    this.enterEmail.type("1234Swsw");
    this.loginButton();
  }

  public leavEmailEmpty() {
    this.navigate();
    this.enterEmail.clear();
    this.loginButton();
  }
}

export const loginpage = new LoginPage();
