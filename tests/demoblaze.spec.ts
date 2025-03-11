import { test, expect } from '@playwright/test';

test('Compra en Demo Blaze', async ({ page }) => 
  {
  await page.goto('https://www.demoblaze.com/');
  const primerProducto = page.locator('.card-title a').first();
  const nombreProducto = await primerProducto.textContent();
  await primerProducto.click();
  await page.locator('text=Add to cart').click();
  page.on('dialog', async dialog => 
    {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
  await page.locator('a#cartur').click();
  await expect(page.locator(`td:has-text("${nombreProducto}")`)).toBeVisible();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('#name').fill('Pepe Perez');
  await page.locator('#country').fill('Spain');
  await page.locator('#city').fill('Huelva');
  await page.locator('#card').fill('1234567890123456');
  await page.locator('#month').fill('12');
  await page.locator('#year').fill('2025');
  await page.locator('text=Purchase').click();
  await expect(page.locator('text=Thank you for your purchase!')).toBeVisible();
});