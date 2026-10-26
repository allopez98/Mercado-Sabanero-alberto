# Registro de defectos

## Criterio de registro

Se registran diferencias reales entre el comportamiento implementado
y los resultados esperados.

Las pruebas rojas provocadas por funcionalidades pendientes durante
TDD no se consideran, por si solas, defectos del producto.

## Resultado de esta verificacion

No se identificaron defectos funcionales en la ejecucion final
de los 43 casos automatizados.

Este resultado se limita a los casos ejecutados y no implica
que el sistema este libre de cualquier defecto posible.

## Registro

| ID | Descripcion | Pasos para reproducir | Severidad | Estado |
|---|---|---|---|---|

Sin entradas: no se observaron defectos funcionales en esta verificacion.

## Reproduccion de las verificaciones

Ejecutar:

npm ci
npm test -- --runInBand
npm run coverage -- --runInBand

Las evidencias se conservan en la carpeta evidencias.
