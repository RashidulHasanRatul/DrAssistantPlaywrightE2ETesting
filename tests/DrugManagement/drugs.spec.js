
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugsPage = require('../../pages/DrugManagement/DrugsPage');
const message = require('../../fixtures/message.json')
const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let page, loginPage, drugsPage;
test.describe('Drugs Module', () => {


  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugsPage = new DrugsPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drugs Page
    await drugsPage.navigateTo();
  });
  test.afterAll(async () => {
    await page.close();
  });

  test('should create a Drug successfully', async () => {
    await drugsPage.createDrug("Test Drug", "Test Generic Name", "Test Note", "Test Warning", "Test Side Effect", "Test Additional Advice");
    await drugsPage.validateSuccess();
  });
  test('should show error messages for invalid Drug creation', async () => {
    await drugsPage.createDrug("", "", "", "", "", "");
    await drugsPage.validateError(message.error.tradeNameRequired);
  });

});