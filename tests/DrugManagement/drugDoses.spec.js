// tests/DrugManagement/drugDoses.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugDosesPage = require('../../pages/DrugManagement/DrugDosesPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drug Doses Module', () => {
  let page, loginPage, drugDosesPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugDosesPage = new DrugDosesPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Doses Page
    await drugDosesPage.navigateTo();
  });

  test('should create a Drug Dose successfully', async () => {
    await drugDosesPage.createDrugDose('Test Dose', '1');
    await drugDosesPage.validateSuccess();
  });

  test('should show error messages for invalid Drug Dose creation', async () => {
    await drugDosesPage.createDrugDose('', '', '');
    await expect(page.locator('input[name="doseName"]')).toHaveText('Dose name is required');
    await expect(page.locator('input[name="doseAmount"]')).toHaveText('Dose amount is required');
    await drugDosesPage.validateError();
  });

  // test.afterEach(async () => {
  //   await page.close();
  // });
});