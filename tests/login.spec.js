import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
const URL = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
test.describe("login test", () => {
  test("should login and show successful message", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/auth/login');
    await loginPage.login(email, password);
    await expect(page).toHaveURL('https://dap-test.binarycastle.xyz/dashboard');
  });
});
