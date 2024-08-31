const { test } = require("@playwright/test");
const LoginPage = require("../../pages/LoginPage");
const DrugAdvicePage = require("../../pages/DrugManagement/DrugAdvicePage");

const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

let page, loginPage, drugAdvicePage;

test.describe("Drug Advice Module", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    drugAdvicePage = new DrugAdvicePage(page);

    // Login to the application
    await loginPage.goto(URL);
    await loginPage.login(email, password);

    // Navigate to Drug Advice Page
    await drugAdvicePage.navigateTo();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Create Drug Advice Successfully", async () => {
    await drugAdvicePage.createDrugAdvice("Test Advice");
    await drugAdvicePage.validateSuccess();
  });

  test("Shouldn't Create Drug Advice", async () => {
    await drugAdvicePage.createDrugAdvice("");
    await drugAdvicePage.validateError();
  });
});