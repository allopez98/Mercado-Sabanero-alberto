# Plan de pruebas ágil - Mercado Sabanero

## Responsable

Alberto Lopez. Desarrollo individual.

## Objetivo

Verificar que el módulo liquide correctamente las compras y que cada
criterio de aceptación tenga al menos una prueba automatizada.

## Alcance

- HU-01: agregar productos al carrito y validar cantidades e inventario.
- HU-02: calcular IVA del 0 %, 5 % y 19 % después del descuento.
- HU-03: aplicar descuentos por volumen.
- HU-04: validar cupones y evitar sumar descuentos incompatibles.
- HU-05: calcular envío y total de la compra.
- HU-06: calcular puntos para clientes ESTÁNDAR y ORO.

Se excluyen interfaz gráfica, base de datos, pagos reales y conexión
con un inventario real.

## Estrategia

Se desarrollará cada historia con TDD:

1. Escribir una prueba y ejecutarla para comprobar que falla.
2. Guardar la prueba con un commit test:.
3. Implementar el código necesario y comprobar que la prueba pasa.
4. Guardar la implementación con un commit feat:.
5. Mejorar la estructura conservando las pruebas en verde.
6. Guardar la mejora con un commit refactor:.

Después de cada cambio se ejecutarán las pruebas existentes para
detectar regresiones. Los valores esperados se definirán a partir
de las reglas del enunciado, sin calcularlos con la función probada.

## Tipos y técnicas de prueba

- Pruebas unitarias de la lógica del negocio.
- Pruebas de regresión.
- Particiones de equivalencia y análisis de valores límite.
- Pruebas parametrizadas de cantidades y descuentos.
- Pruebas de errores y excepciones.
- Pruebas con inventario simulado mediante jest.fn().
- Prueba automatizada del ejemplo completo del enunciado.

Todas las pruebas usarán AAA: preparar, ejecutar y verificar.

## Herramientas

- JavaScript y Node.js: implementación y ejecución.
- Jest: pruebas, parametrización, excepciones y dobles de prueba.
- Cobertura de Jest: medición de líneas de la lógica de negocio.
- Git y GitHub: historial y evidencia de TDD.
- Git Bash: ejecución de comandos.

## Entorno y datos

Las pruebas se ejecutarán localmente con Node.js y npm.
No dependerán de Internet, inventario real ni fecha actual.
Cada prueba tendrá datos independientes.

Los cupones vencidos se representarán mediante datos de prueba
controlados para evitar resultados variables.

## Reglas de cálculo

- Los precios se expresan en pesos enteros.
- El subtotal es la suma de precio por cantidad, antes de IVA y descuentos.
- El descuento por volumen depende del subtotal original.
- SABANERO10 requiere un subtotal original mínimo de 50000.
- SABANERO10 y el descuento por volumen no se suman: se toma el mayor.
- El descuento elegido se distribuye proporcionalmente entre productos.
- El IVA se calcula sobre cada línea después del descuento.
- Los importes monetarios resultantes se redondean al peso más cercano.
- El total es subtotal menos descuento más IVA más envío.
- Los puntos excluyen el envío y consideran miles completos.
- La categoría ORO duplica los puntos calculados.

## Decisiones para aspectos no detallados

Se documentan estas interpretaciones para mantener pruebas coherentes:

- El límite de 50 unidades se aplica también a la cantidad acumulada
  de un producto en el carrito.
- Al agregar nuevamente un producto se verifica el stock para la
  cantidad acumulada.
- Un cupón SABANERO10 sin compra mínima se rechaza con error.
- Para envío gratis se interpreta "productos con IVA" como el valor
  de todos los productos después del descuento, incluido su IVA.
  No se incluye el costo del envío en ese umbral.
- ENVIOGRATIS puede coexistir con el descuento por volumen porque
  modifica únicamente el envío.

Estas decisiones podrán ajustarse si la docente precisa otra regla.

## Criterios de éxito

- Todos los criterios de aceptación cubiertos.
- Al menos 25 casos documentados y 20 pruebas unitarias pasando.
- Al menos 2 pruebas parametrizadas.
- Al menos 4 pruebas de errores.
- Al menos 2 pruebas con doble de inventario.
- Cobertura de líneas mínima del 80 % en src/.
- Ejemplo obligatorio con total 250515 y 250 puntos.
- Evidencia de ciclos TDD en las seis historias.
- README con instrucciones reproducibles.
- Defectos reales registrados y corregidos antes de la entrega.

## Riesgos y acciones

- Errores en límites: probar valores inferiores, exactos y superiores.
- Errores de redondeo: incluir importes que produzcan fracciones de peso.
- Descuentos acumulados incorrectamente: probar combinaciones.
- Dependencia del inventario: sustituirlo por un doble controlado.
- Regresiones: ejecutar toda la suite después de cada cambio.
- Interpretaciones ambiguas: documentar decisiones y consultar a la docente.
- Trabajo individual: realizar autorrevisión documentada; la adaptación
  de revisión entre pares y coevaluación debe acordarse con la docente.

## Seguimiento

La matriz comienza con todos los casos en estado Pendiente.
El estado se actualizará después de ejecutar las pruebas correspondientes.

Los defectos reales se registrarán con ID, descripción, pasos para
reproducir, severidad y estado. Una prueba roja por funcionalidad aún
no implementada es parte de TDD y no se considera por sí sola un defecto.

## Evidencias

Se conservarán capturas de las fases roja y verde, del resultado final,
del reporte de cobertura y del historial de commits.
