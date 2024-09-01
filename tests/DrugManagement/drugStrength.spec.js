
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

  test("Create Drug Strength Successfully", async () => {
    await drugStrengthPage.createDrugStrenght("Test Strength");
    await drugStrengthPage.validateSuccess();
  });

  test("Shouldn't Create Drug Strength", async () => {
    await drugStrengthPage.createDrugStrenght("");
    await drugStrengthPage.validateError();
  });

  test.afterEach(async () => {
    await page.close();
  });
});