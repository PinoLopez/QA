# QA Project

## Ejercicio 1: Automatización con Playwright

Automatización de la compra en Demo Blaze.

## Ejercicio 2: Prueba de estrés con Artillery

Prueba de carga del endpoint de posts de JSONPlaceholder.
artillery report report.json --output report.html

## Ejercicio 3: Test Plan

Verificar la funcionalidad de búsqueda avanzada de productos.

### Casos de prueba

1.  Búsqueda por nombre de producto.
2.  Búsqueda por categoría.
3.  Búsqueda con filtros (por precio o por marca).
4.  Búsqueda con palabras clave múltiples.
5.  Búsqueda con caracteres especiales.

### Criterios de aceptación

* Los resultados de la búsqueda son precisos.
* Los filtros funcionan .
* El rendimiento de la búsqueda es aceptable.

### Requisitos previos

* Acceso a la tienda online.
* Datos de prueba disponibles.

### Estrategia de ejecución

* Ejecutar y automatizar todo lo posible.

## Ejercicio 4: Pipeline CI/CD

### Jenkinsfile

```groovy
pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
        sh 'npx playwright install'
      }
    }
    stage('Playwright Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Artillery Tests') {
      steps {
        sh 'npm run artillery'
      }
    }
  }
  post {
    always {
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'playwright-report', reportFiles: 'index.html', reportName: 'Playwright Report'])
    }
  }
}