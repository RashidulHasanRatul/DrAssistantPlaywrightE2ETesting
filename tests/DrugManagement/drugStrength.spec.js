// tests/drugStrength.spec.js
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugStrengthPage = require('../../pages/DrugManagement/DrugStrengthPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drug Strength Module', () => {
  let page, loginPage, drugStrengthPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugStrengthPage = new DrugStrengthPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Strength Page
    await drugStrengthPage.navigateTo();
  });

  // Add test cases for Drug Strength module here

  test.afterEach(async () => {
    await page.close();
  });
});