
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugDurationPage = require('../../pages/DrugManagement/DrugDurationPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
let page, loginPage, drugDurationPage;
test.describe('Drug Duration Module', () => {
  
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugDurationPage = new DrugDurationPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Duration Page
    await drugDurationPage.navigateTo();
  });
  test.afterAll(async () => {
    await page.close();
  });

  test('should create a Drug Duration successfully', async () => {
    await drugDurationPage.createDrugDuration('30 Days');
    await drugDurationPage.validateSuccess();
  });

  test('should show error messages for Blank Drug Duration creation', async () => {
    await drugDurationPage.createDrugDuration(''); // Invalid data
    await drugDurationPage.validateError('The duration field is required.');
  });
  test('should show error messages for invalid Drug Duration creation', async () => {
    await drugDurationPage.createDrugDuration('a');
    await drugDurationPage.validateError('The duration must be at least 2 characters.');
  });


});