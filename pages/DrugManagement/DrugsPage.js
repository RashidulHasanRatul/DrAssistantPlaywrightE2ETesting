// pages/drugsPage.js
class DrugsPage {
    constructor(page) {
      this.page = page;
      // Add elements specific to Drugs here
    }
  
    async navigateTo() {
      const drugManagementDropdown = this.page.locator('text=DrugManagement');
      await drugManagementDropdown.click();
      const drugsLink = this.page.locator('text=Drugs');
      await drugsLink.click();
    }
  
    // Add methods specific to Drugs actions here
  }
  
  module.exports = DrugsPage;