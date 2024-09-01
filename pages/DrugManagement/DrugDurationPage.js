const { expect } = require("@playwright/test");
class DrugDurationPage {
  constructor(page) {
    this.page = page;
    this.drugManagementDropdown = this.page.locator('text=Drug Management');
    this.drugDurationLink = this.page.locator('text=Drug Duration');
    this.createNewDurationButton = page.locator('text=Create Drug  Duration');
    this.durationNameInput = page.locator('input[placeholder="Duration"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.getByText('Drug Duration Created Successfully');
   // this.errorMessage = page.getByText(errorMessages);
  }

  async navigateTo() {
    await this.drugManagementDropdown.click();
    await this.drugDurationLink.click();
  }

  async createDrugDuration(durationName) {
    await this.createNewDurationButton.click();
    await this.durationNameInput.fill(durationName);
    await this.submitButton.click();
  }

  async validateSuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  async validateError(expectedErrorMessage) {
    const errorMessage = this.page.locator('.toast-message', { hasText: expectedErrorMessage });
    await expect(errorMessage).toBeVisible();
  }
}

module.exports = DrugDurationPage;