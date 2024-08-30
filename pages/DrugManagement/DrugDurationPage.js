// pages/DrugDurationPage.js
class DrugDurationPage {
  constructor(page) {
    this.page = page;
    this.createNewDurationButton = page.locator('text=Create New Duration');
    this.durationNameInput = page.locator('input[name="durationName"]');
    this.durationValueInput = page.locator('input[name="durationValue"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('text=Drug Duration created successfully');
    this.errorMessage = page.locator('.error-message'); // Assuming error messages have this class
  }

  async navigateTo() {
    const drugManagementDropdown = this.page.locator('text=DrugManagement');
    await drugManagementDropdown.click();
    const drugDurationLink = this.page.locator('text=Drug Duration');
    await drugDurationLink.click();
  }

  async createDrugDuration(durationName, durationValue) {
    await this.createNewDurationButton.click();
    await this.durationNameInput.fill(durationName);
    await this.durationValueInput.fill(durationValue);
    await this.submitButton.click();
  }

  async validateSuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  async validateError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = DrugDurationPage;