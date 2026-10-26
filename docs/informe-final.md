# Informe de pruebas unitarias y TDD: Mercado Sabanero

Autor: Alberto Lopez
Asignatura: Electiva Profesional en Ingeniería de Software
Docente: Laudyt María Lambraño Pérez
Modalidad: individual

Repositorio:
https://github.com/allopez98/Mercado-Sabanero-alberto

## 1. Herramientas elegidas

Se utilizó JavaScript con Node.js para implementar la lógica de negocio.
Jest permitió ejecutar las pruebas unitarias, organizar conjuntos de
datos parametrizados, verificar excepciones y medir la cobertura.

El inventario externo se sustituyó por funciones simuladas con jest.fn().
Esto permitió controlar el stock de cada prueba sin depender de un
servicio real.

Git y GitHub se utilizaron para conservar el código y registrar la
secuencia del desarrollo. Los comandos se ejecutaron desde la terminal.

## 2. Desarrollo con TDD

Se implementaron las seis historias del enunciado: carrito, IVA,
descuentos por volumen, cupones, envío y acumulación de puntos.

El proceso comenzó con pruebas que fallaban por funcionalidades
pendientes. Después se implementó el comportamiento necesario y se
mejoró la organización del código manteniendo las pruebas en verde.

Las etapas se registraron mediante commits con los prefijos test:,
feat: y refactor:. Las pruebas se organizaron con el patrón AAA:
preparar los datos, ejecutar la operación y verificar el resultado.

Se incluyeron límites de cantidades, umbrales de descuento, excepciones,
inventario simulado y el ejemplo completo proporcionado por la docente.

## 3. Resultados

La planificación inicial incluyó 36 casos. Durante el desarrollo y
la revisión se incorporaron siete verificaciones adicionales.

| Indicador | Resultado |
|---|---:|
| Casos planificados inicialmente | 36 |
| Casos adicionales | 7 |
| Casos finales documentados | 43 |
| Casos ejecutados | 43 |
| Casos exitosos | 43 |
| Casos fallidos en la ejecución final | 0 |
| Suites de pruebas | 6 |
| Cobertura de líneas | 98,83 % |
| Cobertura mínima requerida | 80 % |

Se verificaron errores por cantidades inválidas, falta de stock,
cupones inexistentes, cupones vencidos y compra mínima insuficiente.
También se utilizaron pruebas parametrizadas y dobles del inventario.

El ejemplo obligatorio produjo subtotal de $228.000, descuento de
$11.400, IVA de $33.915, envío de $0, total de $250.515 y 250 puntos
para un cliente ESTÁNDAR.

No se identificaron defectos funcionales en los casos de la ejecución
final. Las fases rojas por funcionalidades pendientes se trataron
como parte de TDD y no como defectos del producto.

## 4. Dificultades y decisiones

Durante la preparación fue necesario instalar Node.js y npm, y corregir
la dirección remota del repositorio antes de subir los archivos.

En la lógica se prestó atención a los límites de descuento, al redondeo
de pesos y a la distribución proporcional del descuento antes del IVA.
También se verificó que los cupones no sumaran descuentos incompatibles
y que los puntos excluyeran el envío.

Los aspectos no detallados por el enunciado se documentaron en el plan.
Entre ellos se encuentran el límite acumulado de 50 unidades y la
interpretación del umbral de envío gratuito como el valor de los
productos después del descuento, incluido su IVA.

El trabajo se desarrolló individualmente y se realizó una autorrevisión
guiada. Esta revisión no se presenta como revisión de un compañero.
La adaptación de la revisión entre pares y la coevaluación debe
confirmarse con la docente.

## 5. Conclusiones

Las pruebas permitieron comprobar las reglas del módulo y detectar
cuándo un cambio podía afectar comportamientos ya implementados.
El uso de TDD dejó evidencia de la relación entre las pruebas,
la implementación y las mejoras del código.

Los 43 casos finalizaron exitosamente y la cobertura de líneas fue
del 98,83 %. Estos resultados cumplen los mínimos de cantidad y
cobertura, aunque no garantizan la ausencia de cualquier defecto
fuera de los escenarios evaluados.

## 6. Declaración de apoyo de inteligencia artificial

Se utilizó ChatGPT como apoyo para comprender la actividad, orientar
el desarrollo, proponer código y pruebas y revisar la documentación.
Alberto Lopez ejecutó los comandos, las pruebas y los commits, y es
responsable de comprender y explicar el trabajo durante la sustentación.
