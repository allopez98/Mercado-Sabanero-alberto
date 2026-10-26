# Matriz de casos de prueba

Responsable: Alberto Lopez.

Todos los importes están expresados en pesos.
Salvo indicación contraria, los productos usados son válidos y tienen
stock suficiente. Los casos de liquidación usan cliente ESTÁNDAR.

| ID | Historia / criterio | Descripción | Datos de entrada | Resultado esperado | Estado |
|---|---|---|---|---|---|
| CP-01 | HU-01 CA1 | Agregar cantidad mínima | Cantidad 1; stock 100 | Producto con cantidad 1 | Pendiente |
| CP-02 | HU-01 CA1 | Agregar cantidad máxima | Cantidad 50; stock 100 | Producto con cantidad 50 | Pendiente |
| CP-03 | HU-01 CA2 | Rechazar cero | Cantidad 0 | Error de cantidad | Pendiente |
| CP-04 | HU-01 CA2 | Rechazar cantidad superior | Cantidad 51 | Error de cantidad | Pendiente |
| CP-05 | HU-01 CA3 | Rechazar stock insuficiente con mock | Cantidad 5; inventario simulado devuelve 4 | Error de stock; carrito sin cambios | Pendiente |
| CP-06 | HU-01 CA4 | Sumar producto repetido | Agregar 2 y después 3 del mismo producto | Una línea con cantidad 5 | Pendiente |
| CP-07 | HU-01 CA1 | Consultar inventario con mock | Producto arroz; cantidad 2; mock devuelve 10 | Consultar stock de arroz y agregar 2 | Pendiente |
| CP-08 | HU-02 CA1 | IVA cero | Base 10000; IVA 0 % | IVA 0 | Pendiente |
| CP-09 | HU-02 CA1 | IVA cinco | Base 10000; IVA 5 % | IVA 500 | Pendiente |
| CP-10 | HU-02 CA1 | IVA diecinueve | Base 10000; IVA 19 % | IVA 1900 | Pendiente |
| CP-11 | HU-02 CA2 | IVA después del descuento | Base 100000; descuento 10 %; IVA 19 % | Base descontada 90000; IVA 17100 | Pendiente |
| CP-12 | HU-03 CA1 | Subtotal inferior al límite | Subtotal 199999 | Descuento 0 | Pendiente |
| CP-13 | HU-03 CA2 | Inicio del cinco por ciento | Subtotal 200000 | Descuento 10000 | Pendiente |
| CP-14 | HU-03 CA2 | Fin del intervalo del cinco | Subtotal 499999 | Descuento redondeado 25000 | Pendiente |
| CP-15 | HU-03 CA3 | Inicio del diez por ciento | Subtotal 500000 | Descuento 50000 | Pendiente |
| CP-16 | HU-03 CA3 | Superior a quinientos mil | Subtotal 600000 | Descuento 60000 | Pendiente |
| CP-17 | HU-04 CA1 | Cupón con compra mínima exacta | SABANERO10; subtotal 50000 | Descuento 5000 | Pendiente |
| CP-18 | HU-04 CA1; decisión documentada | Cupón sin compra mínima | SABANERO10; subtotal 49999 | Error de compra mínima | Pendiente |
| CP-19 | HU-04 CA2 | Cupón de envío | ENVIOGRATIS; subtotal 10000; IVA 0 %; Sincelejo | Envío 0 | Pendiente |
| CP-20 | HU-04 CA3 | Cupón inexistente | Cupón NOEXISTE | Error de cupón inválido | Pendiente |
| CP-21 | HU-04 CA3 | Cupón vencido | Cupón existente marcado como vencido en datos controlados | Error de cupón inválido | Pendiente |
| CP-22 | HU-04 CA4 | Elegir cupón sobre volumen | Subtotal 200000; SABANERO10 | Descuento 20000; no 30000 | Pendiente |
| CP-23 | HU-04 CA4 | No sumar descuentos iguales | Subtotal 500000; SABANERO10 | Descuento 50000; no 100000 | Pendiente |
| CP-24 | HU-05 CA1 | Envío local | Sincelejo; productos con IVA 10000 | Envío 8000 | Pendiente |
| CP-25 | HU-05 CA1 | Otro municipio de Sucre | Corozal; productos con IVA 10000 | Envío 15000 | Pendiente |
| CP-26 | HU-05 CA2 | Justo debajo de envío gratis | Productos con IVA 149999; Sincelejo | Envío 8000 | Pendiente |
| CP-27 | HU-05 CA2 | Umbral exacto de envío gratis | Productos con IVA 150000; Corozal | Envío 0 | Pendiente |
| CP-28 | HU-05 CA3 | Comprobar fórmula del total | Subtotal 100000; descuento 0; IVA 19000; Sincelejo; sin cupón | Total 127000 | Pendiente |
| CP-29 | HU-06 CA1 | Descartar fracción de mil | Total sin envío 10999; ESTÁNDAR | 10 puntos | Pendiente |
| CP-30 | HU-06 CA2 | Duplicar puntos de ORO | Total sin envío 10999; ORO | 20 puntos | Pendiente |
| CP-31 | HU-06 CA1 | Excluir costo de envío | Total 18000; envío 8000; ESTÁNDAR | 10 puntos | Pendiente |
| CP-32 | Ejemplo obligatorio; HU-02 a HU-06 | Liquidación del ejemplo docente | Licuadora 180000 al 19 % x1; café 15000 al 5 % x2; arroz 4500 al 0 % x4; Sincelejo; ESTÁNDAR; sin cupón | Subtotal 228000; descuento 11400; IVA 33915; envío 0; total 250515; puntos 250 | Pendiente |
| CP-33 | HU-01; decisión documentada | Rechazar acumulación mayor a 50 | Producto con 30; agregar 21; stock 100 | Error de cantidad; conserva 30 | Pendiente |
| CP-34 | HU-01 CA3 y CA4 | Verificar stock acumulado | Producto con 3; agregar 3; stock 5 | Error de stock; conserva 3 | Pendiente |
| CP-35 | HU-02 CA1; redondeo | Redondear fracción de IVA | Base 101; IVA 5 % | IVA redondeado 5 | Pendiente |
| CP-36 | HU-06 CA1 | Compra inferior a mil | Total sin envío 999; ESTÁNDAR | 0 puntos | Pendiente |

## Organización de las pruebas automatizadas

- CP-01 a CP-04 se incluirán en pruebas parametrizadas de cantidades válidas
  e inválidas.
- CP-12 a CP-16 se incluirán en una prueba parametrizada de límites de volumen.
- CP-05 y CP-07 usarán jest.fn() para sustituir el inventario.
- CP-03, CP-04, CP-05, CP-18, CP-20 y CP-21 verificarán errores.
- Cada caso quedará relacionado con su prueba mediante el ID en su nombre.
- Los estados se actualizarán con resultados reales, después de la ejecución.
