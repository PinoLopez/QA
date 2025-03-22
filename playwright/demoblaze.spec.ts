import { test, expect } from '@playwright/test'; // Importa las funciones 'test' y 'expect' de Playwright.

test('Demo Blaze test', async ({ page }) => 
  { // Define un nuevo test llamado 'Demo Blaze test' y recibe el objeto 'page'.
  await page.goto('https://www.demoblaze.com/'); // Navega a la URL de Demo Blaze.
  const title = await page.title(); // Obtiene el título de la página.
  expect(title).toContain('STORE'); // Verifica que el título contenga la palabra 'STORE'.
});