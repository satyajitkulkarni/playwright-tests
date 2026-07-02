import { test, expect, Locator } from '@playwright/test'

test('Login Test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    // await page.locator('input[placeholder="Username"]').fill("standard_user");
    // await page.locator('input[placeholder="Password"]').fill("secret_sauce");
    // await page.locator('input[id="login-button"]').click();

    const username: Locator = page.locator("#user-name");
    const password: Locator = page.locator("#password");
    const loginButton: Locator = page.locator("#login-button");

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

})