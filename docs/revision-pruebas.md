# Revision de pruebas

## Modalidad

Trabajo individual de Alberto Lopez.
Autorrevision guiada con apoyo de ChatGPT.
No se declara una revision realizada por un compañero.

La adaptacion del requisito de revision entre pares y de la
coevaluacion queda pendiente de confirmacion con la docente.

## Aspectos revisados

- Separacion de preparar, ejecutar y verificar mediante el patron AAA.
- Nombres que describen el comportamiento esperado.
- Cantidades limite: 0, 1, 50 y 51.
- Limites de descuentos: 199999, 200000, 499999 y 500000.
- Errores por cantidades invalidas, stock y cupones.
- Uso de jest.fn() para sustituir el inventario externo.
- Calculo del IVA despues del descuento.
- Exclusión del envio en los puntos.
- Ejemplo completo del enunciado mediante CP-32.

## Mejoras incorporadas durante la revision

CP-37: verificar redondeo hacia arriba.
Entrada: subtotal 110, tarifa IVA 5 %, descuento 0.
Esperado: IVA 6.

CP-38: verificar un multiplo exacto de mil para los puntos.
Entrada: total 9000, envio 8000, categoria ESTÁNDAR.
Esperado: 1 punto.

## Observaciones pendientes para el cierre

- Actualizar la matriz con todos los casos adicionales.
- Registrar los resultados reales de la ejecucion final.
- Medir cobertura de todos los archivos de logica en src/.
- Completar el registro de defectos sin inventar incidencias.
- Actualizar README e informe final.
