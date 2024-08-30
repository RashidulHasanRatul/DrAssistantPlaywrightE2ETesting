
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugAdvicePage = require('../../pages/DrugManagement/DrugAdvicePage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drug Advice Module', () => {
  let page, loginPage, drugAdvicePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugAdvicePage = new DrugAdvicePage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Advice Page
    await drugAdvicePage.navigateTo();
  });

  // Add test cases for Drug Advice module here

  test.afterEach(async () => {
    await page.close();
  });
});