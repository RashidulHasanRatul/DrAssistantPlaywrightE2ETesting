import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
const URL = process.env.URL;
const email = process.env.email;
const password = process.env.password;

test.describe("login test", () => {
  const loginPage = new LoginPage();
  test("should login and show successful message", async ({ page }) => {
    loginPage.goto(URL);
    loginPage.login(email, password);
  });
});
