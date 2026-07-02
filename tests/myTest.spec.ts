import { test, expect } from '@playwright/test';
import { count } from 'node:console';
import { resourceUsage } from 'node:process';

test('My First test', async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.locator('textarea[name="q"]').fill('Google');
    await page.keyboard.press('Enter');
    const result = await page.locator('h3').allTextContents();
    expect(result.length).toBeGreaterThan(0);

})