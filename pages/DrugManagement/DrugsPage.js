const { expect } = require("@playwright/test");
class DrugsPage {
  constructor(page) {
    this.page = page;
    this.drugManagementDropdown = this.page.locator("text=Drug Management");
    this.drugsLink = this.page.locator("text=Drugs");
    this.createDrugButton = page.locator("text=Create Drug");
    this.tradeNameInput = page.locator('input[placeholder="Trade name"]');
    this.genericNameInput = page.locator('input[placeholder="Generic name"]');
    this.note = page.locator('input[placeholder="Note"]');
    this.warnings = page.locator('input[placeholder="Warning"]');
    this.sideEffects = page.locator('input[placeholder="Side effect"]');
    this.additionalAdvices = page.locator(
      'input[placeholder="Additional advice"]'
    );
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.getByText('Drug Created Successfully');
  }

  async navigateTo() {
    await this.drugManagementDropdown.click();
    await this.drugsLink.click();
  }

  async createDrug(
    tradeName,
    genericName,
    note,
    warnings,
    sideEffects,
    additionalAdvices
  ) {
    await this.createDrugButton.click();
    await this.tradeNameInput.fill(tradeName);
    await this.genericNameInput.fill(genericName);
    await this.note.fill(note);
    await this.warnings.fill(warnings);
    await this.sideEffects.fill(sideEffects);
    await this.additionalAdvices.fill(additionalAdvices);
    await this.submitButton.click();
  }
  async validateSuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  async validateError(expectedErrorMessage) {
    const errorMessage = this.page.locator(".toast-message", {
      hasText: expectedErrorMessage,
    });
    await expect(errorMessage).toBeVisible();
  }
}
module.exports = DrugsPage;
