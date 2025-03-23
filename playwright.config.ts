import { defineConfig, devices } from '@playwright/test';

// Define la configuración global para las pruebas de Playwright.
export default defineConfig({
  // Especifica el directorio donde se encuentran los archivos de prueba.
  testDir: './tests',

  // Habilita la ejecución de pruebas en paralelo para acelerar la ejecución.
  fullyParallel: true,

  // Impide la ejecución de pruebas marcadas como 'test.only' en entornos de integración continua (CI).
  // Esto asegura que todas las pruebas se ejecuten en CI.
  forbidOnly: !!process.env.CI,

  // Configura el número de reintentos para las pruebas fallidas en CI (2 reintentos) o en local (0 reintentos).
  retries: process.env.CI ? 2 : 0,

  // Limita el número de trabajadores (procesos) en CI a 1 para evitar problemas de concurrencia.
  // En local, permite que Playwright determine el número óptimo de trabajadores.
  workers: process.env.CI ? 1 : undefined,

  // para generar un informe HTML de los resultados de las pruebas.
  reporter: 'html',

  // Configura las opciones de uso para todas las pruebas.
  use: 
  {
    // Habilita el rastreo solo en el primer reintento de una prueba fallida.
    trace: 'on-first-retry',
  },

  // Define los proyectos de prueba, que permiten ejecutar pruebas en diferentes navegadores y configuraciones.
  projects: 
  [
    {
      // Nombre del proyecto 
      name: 'firefox',

      // Configura las opciones de uso específicas para este proyecto.
      use: 
      {
        // Utiliza la configuración de dispositivos predefinida
        ...devices['Desktop Firefox'],

        // Ejecuta Firefox en modo headless (sin interfaz gráfica).
        headless: true,
      },
    },
  ],
});