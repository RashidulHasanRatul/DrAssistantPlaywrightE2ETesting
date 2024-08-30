
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugDurationPage = require('../../pages/DrugManagement/DrugDurationPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drug Duration Module', () => {
  let page, loginPage, drugDurationPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugDurationPage = new DrugDurationPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Duration Page
    await drugDurationPage.navigateTo();
  });

  test('should create a Drug Duration successfully', async () => {
    await drugDurationPage.createDrugDuration('Test Duration', '30 Days');
    await drugDurationPage.validateSuccess();
  });

  test('should show error messages for invalid Drug Duration creation', async () => {
    await drugDurationPage.createDrugDuration('', ''); // Invalid data
    await drugDurationPage.validateError();
  });

  test.afterEach(async () => {
    await page.close();
  });
});