import { test, expect } from '@playwright/test';

test('Compra en Demo Blaze', async ({ page }) => 
  {
  // Navega a la URL 
  await page.goto('https://www.demoblaze.com/');

  // Selecciona el primer elemento que coincide con el selector CSS '.card-title a' (el primer título de producto en la página).
  const primerProducto = page.locator('.card-title a').first();

  // Obtiene el texto del primer producto seleccionado.
  const nombreProducto = await primerProducto.textContent();

  // Hace clic en el primer producto seleccionado.
  await primerProducto.click();

  // Hace clic en el botón "Add to cart".
  await page.locator('text=Add to cart').click();

  // Configura un listener para los diálogos (alertas) que aparecen en la página.
  page.on('dialog', async dialog => 
    {
    // Verifica que el mensaje del diálogo contenga "Product added".
    expect(dialog.message()).toContain('Product added');

    // Acepta el diálogo (cierra la alerta).
    await dialog.accept();
  });

  // Hace clic en el enlace con el id 'cartur' (el enlace al carrito de compras).
  await page.locator('a#cartur').click();

  // Verifica que un elemento de la tabla (td) que contiene el nombre del producto esté visible en el carrito.
  await expect(page.locator(`td:has-text("${nombreProducto}")`)).toBeVisible();

  // Hace clic en el botón "Place Order".
  await page.getByRole('button', { name: 'Place Order' }).click();

  // Rellena el campo de nombre
  await page.locator('#name').fill('Pepe Perez');

  // Rellena el campo de país 
  await page.locator('#country').fill('Spain');

  // Rellena el campo de ciudad 
  await page.locator('#city').fill('Huelva');

  // Rellena el campo de tarjeta de crédito 
  await page.locator('#card').fill('1234567890123456');

  // Rellena el campo de mes 
  await page.locator('#month').fill('12');

  // Rellena el campo de año 
  await page.locator('#year').fill('2025');

  // Hace clic en el botón "Purchase".
  await page.locator('text=Purchase').click();

  // Verifica que el mensaje "Thank you for your purchase!" esté visible después de la compra.
  await expect(page.locator('text=Thank you for your purchase!')).toBeVisible();
});