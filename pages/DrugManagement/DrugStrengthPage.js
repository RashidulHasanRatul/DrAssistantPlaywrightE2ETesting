const { expect } = require("@playwright/test");
class DrugStrengthPage {
    constructor(page) {
      this.page = page;
      this.drugManagementDropdown = this.page.locator('text=Drug Management');
      this.drugStrengthLink = this.page.locator('text=Drug Strength');
      this.createDrugStrenghtButton = page.locator("text=Create Drug Strength ");
      this.strengthInputField = page.getByPlaceholder("Strength");
      this.submittedStrenght = page.locator('button[type="submit"]');
      this.successMessage = page.locator("text=Drug Strength Created Successfully");
      this.errorMessage = page.locator(".toast-message", {
        hasText: "The strength field is required.",
      });
    }
  
    async navigateTo() {
      await this.drugManagementDropdown.click();
      await this.drugStrengthLink.click();
    }
    async createDrugStrenght(strength) {
      await this.createDrugStrenghtButton.click();
      await this.strengthInputField.fill(strength);
      await this.submittedStrenght.click();
    }
    async validateSuccess() {
      await expect(this.successMessage).toBeVisible();
    }
    async validateError() {
      await expect(this.errorMessage).toBeVisible();
    }
  }
  
  module.exports = DrugStrengthPage;