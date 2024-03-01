import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('demo',async({page})=>{
  await page.goto("https://mdtanviralamanik.vercel.app");
  await expect(page.getByText('Home')).toBeVisible();
  await page.getByText('Home').click();
})

