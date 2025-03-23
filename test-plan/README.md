Test Plan: Búsqueda Avanzada de Productos

1. Objetivo de la prueba:

Verificar que la funcionalidad de búsqueda avanzada de productos en la tienda online funciona correctamente, permitiendo a los usuarios encontrar productos de manera eficiente mediante diversos criterios de búsqueda.

2. Casos de prueba:

Búsqueda por nombre de producto:
Descripción: Verificar que la búsqueda por nombre de producto devuelve resultados correctos.

Pasos:
-Ingresar el nombre de un producto existente en el campo de búsqueda.
-Hacer clic en el botón de búsqueda.
-Verificar que los resultados muestran productos con el nombre ingresado.

Resultado esperado: Se muestran los productos que coinciden con el nombre buscado.

Búsqueda por categoría:
Descripción: Verificar que la búsqueda por categoría devuelve productos pertenecientes a la categoría seleccionada.

Pasos:
-Seleccionar una categoría de producto del menú desplegable de categorías.
-Hacer clic en el botón de búsqueda.
-Verificar que los resultados muestran productos de la categoría seleccionada.

Resultado esperado: 
-Se muestran los productos que pertenecen a la categoría seleccionada.

Búsqueda con filtros (precio, marca):
Descripción: Verificar que la búsqueda con filtros de precio y marca devuelve resultados correctos.

Pasos:
-Ingresar un rango de precios y seleccionar una marca en los filtros de búsqueda.
-Hacer clic en el botón de búsqueda.
-Verificar que los resultados muestran productos dentro del rango de precios y de la marca seleccionada.

Resultado esperado: Se muestran los productos que cumplen con los criterios de precio y marca.

Búsqueda con palabras clave múltiples:
Descripción: Verificar que la búsqueda con múltiples palabras clave devuelve resultados relevantes.

Pasos:
-Ingresar múltiples palabras clave separadas por espacios en el campo de búsqueda.
-Hacer clic en el botón de búsqueda.
-Verificar que los resultados muestran productos que coinciden con todas las palabras clave.
-Resultado esperado: Se muestran los productos que coinciden con todas las palabras clave ingresadas.

Búsqueda con caracteres especiales:
Descripción: Verificar que la búsqueda maneja correctamente caracteres especiales en las palabras clave.

Pasos:
-Ingresar palabras clave con caracteres especiales en el campo de búsqueda.
-Hacer clic en el botón de búsqueda.
-Verificar que los resultados muestran productos que coinciden con las palabras clave, incluyendo los caracteres especiales.

Resultado esperado: Se muestran los productos que coinciden con las palabras clave, incluyendo los caracteres especiales.

3. Criterios de aceptación:
-Todos los casos de prueba deben pasar exitosamente.
-Los resultados de la búsqueda deben ser precisos y relevantes.
-La funcionalidad de búsqueda debe ser rápida y eficiente.
-La interfaz de usuario de la búsqueda debe ser intuitiva y fácil de usar.

4. Requisitos previos:
-Acceso a la tienda online con la funcionalidad de búsqueda avanzada implementada.
-Datos de prueba disponibles (productos con nombres, categorías, precios y marcas variadas).
-Navegador web compatible.

5. Estrategia de ejecución:
Pruebas manuales:
-Ejecutar los casos de prueba manualmente para verificar la funcionalidad básica y la interfaz de usuario.
-Registrar cualquier error o problema encontrado.

Pruebas automatizadas: Automatizar los casos de prueba utilizando Playwright.

Pruebas de rendimiento: Realizar pruebas de carga para evaluar el rendimiento de la búsqueda bajo carga.

Utilizar Artillery para simular múltiples usuarios concurrentes.

Pruebas de usabilidad:
-Realizar pruebas con usuarios reales para evaluar la facilidad de uso y la satisfacción del usuario.
-Recopilar comentarios y sugerencias para mejorar la funcionalidad.