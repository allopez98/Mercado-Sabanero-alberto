# Mercado Sabanero - Pruebas unitarias y TDD

## Autor y modalidad

Alberto Lopez.

Trabajo desarrollado individualmente.

## Objetivo

Construir y probar el módulo que liquida las compras de Mercado Sabanero,
una tienda en línea de Sincelejo con entregas en Sucre.

## Alcance

Se implementará únicamente la lógica de negocio:

- Agregar productos al carrito.
- Calcular el IVA.
- Aplicar descuentos por volumen.
- Validar y aplicar cupones.
- Calcular el envío.
- Acumular puntos.

No se requiere interfaz gráfica ni base de datos.
El inventario se simulará en las pruebas mediante dobles de prueba.
Los valores monetarios se expresarán en pesos enteros.

## Herramientas y justificación

- JavaScript y Node.js: permiten desarrollar y ejecutar la lógica del negocio.
- Jest: permite escribir pruebas unitarias, parametrizadas y de excepciones.
- jest.fn(): permite simular el servicio externo de inventario.
- Cobertura de Jest: permite medir la cobertura de la lógica del negocio.
- Git y GitHub: permiten conservar evidencias del desarrollo con TDD.

## Instalación

Se requiere tener Node.js y npm instalados.

Después de clonar el repositorio, ejecutar:

npm ci

## Comandos

Ejecutar las pruebas:

npm test

Ejecutar las pruebas en modo de seguimiento:

npm run test:watch

Generar el reporte de cobertura:

npm run coverage

## Organización

- src/: lógica de negocio.
- tests/: pruebas unitarias.
- docs/: documentación de pruebas.
- evidencias/: capturas del proceso.

## Método de trabajo

Cada historia se desarrollará mediante ciclos TDD:

1. Rojo: escribir y ejecutar una prueba que falle.
2. Verde: implementar el código necesario para que pase.
3. Refactor: mejorar la estructura conservando las pruebas en verde.

Los commits utilizarán los prefijos test:, feat: y refactor:
para evidenciar cada etapa.

## Estado inicial

Proyecto preparado. Las pruebas y las historias aún no están implementadas.

## Uso de inteligencia artificial

Se utiliza ChatGPT como apoyo para la orientación, preparación y revisión
del trabajo. El autor es responsable de ejecutar, comprender y explicar
el código y las pruebas durante la sustentación.

## Estado de la implementacion

Se implementaron las seis historias de usuario:
carrito, IVA, descuentos por volumen, cupones, envio y puntos.

La suite contiene 43 casos automatizados.
Los resultados de la ejecucion se conservan en:
evidencias/resultados-pruebas.json.

## Ejecutar desde una copia nueva

git clone https://github.com/allopez98/Mercado-Sabanero-alberto.git
cd Mercado-Sabanero-alberto
npm ci
npm test -- --runInBand
npm run coverage -- --runInBand

## Reporte de cobertura

El reporte visual se genera en coverage/index.html.
En Git Bash para Windows puede abrirse con:

explorer.exe coverage/index.html

Se exige un minimo del 80 % de cobertura de lineas.
La configuracion incluye todos los archivos JavaScript de src/.

## Documentacion y evidencias

- docs/plan-pruebas.md
- docs/matriz-casos.md
- docs/revision-pruebas.md
- docs/registro-defectos.md
- evidencias/

La carpeta coverage/ se genera localmente y no se versiona.
Una copia del resumen se conserva en evidencias/cobertura-resumen.json.

## Limitaciones y decisiones

Las interpretaciones sobre cantidades acumuladas, envio gratuito,
compra minima y redondeo se documentan en el plan de pruebas.

El proyecto es individual. La adaptacion de revision entre pares
y coevaluacion debe confirmarse con la docente.
