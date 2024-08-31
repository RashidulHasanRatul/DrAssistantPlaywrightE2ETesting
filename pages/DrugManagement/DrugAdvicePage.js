const { expect } = require("@playwright/test");
class DrugAdvicePage {
  constructor(page) {
    this.page = page;
    this.createDrugAdviceButton = page.locator("text=Create Drug Advice");
    this.adviceInputField = page.getByPlaceholder("Advice");
    this.submittedAdvice = page.locator('button[type="submit"]');
    this.successMessage = page.locator("text=Drug Advice created successfully");
    this.errorMessage = page.locator(".toast-message", {
      hasText: "The advice field is required.",
    });
  }

  async navigateTo() {
    const drugManagementDropdown = this.page.locator("text=Drug Management");
    await drugManagementDropdown.click();
    const drugAdviceLink = this.page.locator("text=Drug Advice");
    await drugAdviceLink.click();
  }
  async createDrugAdvice(advice) {
    await this.createDrugAdviceButton.click();
    await this.adviceInputField.fill(advice);
    await this.submittedAdvice.click();
  }
  async validateSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
  async validateError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = DrugAdvicePage;
