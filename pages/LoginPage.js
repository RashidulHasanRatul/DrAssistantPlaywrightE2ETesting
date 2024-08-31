const { expect } = require("@playwright/test");
class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('input[type="email"]');
      this.passwordInput = page.locator('input[placeholder="Password"]');
      this.loginButton = page.locator('button[type="submit"]');
      this.errorMessage = page.locator('.toast-message');
    }
  
    async goto(url) {
      await this.page.goto(url);
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
    
    async assertErrorMessage(expectedMessage) {
      await expect(this.errorMessage).toContainText(expectedMessage);
    }
  }
  
  module.exports = LoginPage;