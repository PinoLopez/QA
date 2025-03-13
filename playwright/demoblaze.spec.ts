import { test, expect } from '@playwright/test';

test('Demo Blaze test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  const title = await page.title();
  expect(title).toContain('STORE');
});