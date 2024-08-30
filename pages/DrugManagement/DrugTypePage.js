// pages/drugTypePage.js
class DrugTypePage {
    constructor(page) {
      this.page = page;
      // Add elements specific to Drug Type here
    }
  
    async navigateTo() {
      const drugManagementDropdown = this.page.locator('text=DrugManagement');
      await drugManagementDropdown.click();
      const drugTypeLink = this.page.locator('text=Drug Type');
      await drugTypeLink.click();
    }
  
    // Add methods specific to Drug Type actions here
  }
  
  module.exports = DrugTypePage;