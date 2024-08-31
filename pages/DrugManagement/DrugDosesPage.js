const { expect } = require("@playwright/test");
class DrugDosesPage {
  constructor(page) {
    this.page = page;
    this.createNewDoseButton = page.locator("text= Create Dose");
    this.doseNameInput = page.locator('input[placeholder="Dose"]');
    this.drugTypeDropdown = page.locator("select.form-select");
    this.radioButton = page.locator(
      'input.form-check-input[type="radio"][name="status"]#status-0'
    );
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.getByText("Dose created successfully");
    this.errorMessage = page.locator(
      "text=The dose field is required. (and 1 more error)"
    );
  }

  async navigateTo() {
    const drugManagementDropdown = this.page.locator("text=Drug Management");
    await drugManagementDropdown.click();
    const drugDosesLink = this.page.locator("text=Drug Doses");
    await drugDosesLink.click();
  }

  async createDrugDose(doseName, doseAmount, doseFrequency) {
    await this.createNewDoseButton.click();
    await this.doseNameInput.fill(doseName);
    await this.drugTypeDropdown.selectOption({ value: doseAmount });
    await this.radioButton.check();
    await this.submitButton.click();
  }

  async validateSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
  async validateError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = DrugDosesPage;
