
const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DrugsPage = require('../../pages/DrugManagement/DrugsPage');

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

test.describe('Drugs Module', () => {
  let page, loginPage, drugsPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugsPage = new DrugsPage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drugs Page
    await drugsPage.navigateTo();
  });

  // Add test cases for Drugs module here

  test.afterEach(async () => {
    await page.close();
  });
});