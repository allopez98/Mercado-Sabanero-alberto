const { calcularPuntos } = require('../src/puntos');
const { liquidarCompra } = require('../src/liquidacion');

describe('HU-06: acumular puntos', () => {
  test.each([
    ['CP-29', 10999, 0, 'ESTÁNDAR', 10],
    ['CP-30', 10999, 0, 'ORO', 20],
    ['CP-31', 18000, 8000, 'ESTÁNDAR', 10],
    ['CP-36', 999, 0, 'ESTÁNDAR', 0],
  ])(
    '%s: total %i y envio %i para cliente %s genera %i puntos',
    (id, total, envio, categoria, esperado) => {
      // Preparar
      const importePagado = total;

      // Ejecutar
      const resultado = calcularPuntos(
        importePagado,
        envio,
        categoria
      );

      // Verificar
      expect(resultado).toBe(esperado);
    }
  );

  test('CP-32: verifica todos los resultados del ejemplo docente', () => {
    // Preparar
    const productos = [
      { precio: 180000, cantidad: 1, tarifaIva: 19 },
      { precio: 15000, cantidad: 2, tarifaIva: 5 },
      { precio: 4500, cantidad: 4, tarifaIva: 0 },
    ];

    // Ejecutar
    const compra = liquidarCompra(productos, 'Sincelejo');
    const puntos = calcularPuntos(
      compra.total,
      compra.envio,
      'ESTÁNDAR'
    );

    // Verificar
    expect({ ...compra, puntos }).toEqual({
      subtotal: 228000,
      descuento: 11400,
      iva: 33915,
      envio: 0,
      total: 250515,
      puntos: 250,
    });
  });
});
