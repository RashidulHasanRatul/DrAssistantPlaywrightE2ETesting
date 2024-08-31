import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import * as userData from "../fixtures/user.json";
const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
test.describe("login test", () => {
  userData.invalidUsers.forEach((user, index) => {
    test(`should show error message for invalid login attempt #${index + 1}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto(URL);
      await loginPage.login(user.email, user.password);
      await loginPage.assertErrorMessage(user.errorMessage);
    })
  });
  test("should login and show successful message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(URL);
    await loginPage.login(email, password);
    await expect(page).toHaveURL('https://dap-test.binarycastle.xyz/dashboard');
  });
});
