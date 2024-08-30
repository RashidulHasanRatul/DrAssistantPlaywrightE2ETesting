class DrugStrengthPage {
    constructor(page) {
      this.page = page;
      // Add elements specific to Drug Strength here
    }
  
    async navigateTo() {
      const drugManagementDropdown = this.page.locator('text=DrugManagement');
      await drugManagementDropdown.click();
      const drugStrengthLink = this.page.locator('text=Drug Strength');
      await drugStrengthLink.click();
    }
  
    // Add methods specific to Drug Strength actions here
  }
  
  module.exports = DrugStrengthPage;