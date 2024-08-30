// pages/drugAdvicePage.js
class DrugAdvicePage {
    constructor(page) {
      this.page = page;
      // Add elements specific to Drug Advice here
    }
  
    async navigateTo() {
      const drugManagementDropdown = this.page.locator('text=DrugManagement');
      await drugManagementDropdown.click();
      const drugAdviceLink = this.page.locator('text=Drug Advice');
      await drugAdviceLink.click();
    }
  
    // Add methods specific to Drug Advice actions here
  }
  
  module.exports = DrugAdvicePage;