// tests/DrugManagement/drugDoses.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugDosesPage = require('../../pages/DrugManagement/DrugDosesPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let page, loginPage, drugDosesPage;
test.describe('Drug Doses Module', () => {
  

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugDosesPage = new DrugDosesPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Doses Page
    await drugDosesPage.navigateTo();
  });
  test.afterAll(async () => {
    await page.close();
  });
  test('should create a Drug Dose successfully', async () => {
    await drugDosesPage.createDrugDose('Test Dose', '1');
    await drugDosesPage.validateSuccess();
  });

  test('should show error messages for invalid Drug Dose creation', async () => {
    await drugDosesPage.createDrugDose('', '', '');
    await drugDosesPage.validateError();
  });


});