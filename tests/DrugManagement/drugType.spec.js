// tests/drugType.spec.js
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugTypePage = require('../../pages/DrugManagement/DrugTypePage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drug Type Module', () => {
  let page, loginPage, drugTypePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugTypePage = new DrugTypePage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Type Page
    await drugTypePage.navigateTo();
  });

  // Add test cases for Drug Type module here

  test.afterEach(async () => {
    await page.close();
  });
});