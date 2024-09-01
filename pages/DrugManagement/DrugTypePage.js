const { expect } = require("@playwright/test");
class DrugTypePage {
    constructor(page) {
      this.page = page;
      this.drugManagementDropdown = this.page.locator('text=Drug Management');
      this.drugStrengthLink = this.page.locator('text=Drug Type');
      this.createDrugTypeButton = page.locator("text=Create Drug Type");
      this.DrugTypeInputField = page.getByPlaceholder("Type");
      this.submittedStrenght = page.locator('button[type="submit"]');
      this.successMessage = page.locator("text=Drug Type Created Successfully");
      this.errorMessage = page.locator(".toast-message", {
        hasText: "The type field is required.",
      });
    }
  
    async navigateTo() {
      await this.drugManagementDropdown.click();
      await this.drugStrengthLink.click();
    }
    async createDrugType(drugType) {
      await this.createDrugTypeButton.click();
      await this.DrugTypeInputField.fill(drugType);
      await this.submittedStrenght.click();
    }
    async validateSuccess() {
      await expect(this.successMessage).toBeVisible();
    }
    async validateError() {
      await expect(this.errorMessage).toBeVisible();
    }
  }
  
  module.exports = DrugTypePage;