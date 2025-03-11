# Automatización de Compra en Demo Blaze con Playwright

Este proyecto automatiza el proceso de compra en el sitio web Demo Blaze (https://www.demoblaze.com/) utilizando Playwright con TypeScript.

## Requisitos

* Node.js y npm instalados.
* Playwright instalado (`npm install --save-dev @playwright/test`).
* TypeScript instalado (`npm install --save-dev typescript @types/node`).

## Instrucciones

1.  Clona este repositorio.
2.  Ejecuta `npm install` para instalar las dependencias.
3.  Ejecuta `npx playwright test` para ejecutar los tests.

## Archivos

* `demoblaze.spec.ts`: Contiene el código de los tests de Playwright.
* `package.json`: Contiene las dependencias y scripts del proyecto.
* `playwright.config.ts`: Contiene la configuración de Playwright.

## Notas

* Asegúrate de tener una conexión a Internet estable.
* Este test asume que el primer producto en la lista está disponible.
* Puedes modificar los datos de prueba en el archivo `demoblaze.spec.ts`.
* Para poder ejecutar el test, se deben de tener las dependencias ya instaladas, y se debe de ejecutar el comando npx playwright test desde la raiz del proyecto.