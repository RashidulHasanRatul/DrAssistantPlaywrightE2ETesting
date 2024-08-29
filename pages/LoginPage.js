
class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('input[type="email"]');
      this.passwordInput = page.locator('input[type="text"]');
      this.loginButton = page.locator('button[type="submit"]');
    }
  
    async goto(url) {
      await this.page.goto(url);
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = LoginPage;