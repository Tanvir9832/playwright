import {test, expect} from "@playwright/test";

test('test', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('tabpanel').getByLabel('Copy code to clipboard').click();
    await page.getByLabel('Copied').click();
  });