const {
  calcularEnvio,
  liquidarCompra,
} = require('../src/liquidacion');

describe('HU-05: calcular envio', () => {
  test.each([
    ['CP-24', 'Sincelejo', 10000, 8000],
    ['CP-25', 'Corozal', 10000, 15000],
    ['CP-26', 'Sincelejo', 149999, 8000],
    ['CP-27', 'Corozal', 150000, 0],
  ])(
    '%s: envio a %s con productos por %i cuesta %i',
    (id, municipio, valorProductos, esperado) => {
      // Preparar
      const envioGratis = false;

      // Ejecutar
      const resultado = calcularEnvio(
        municipio,
        valorProductos,
        envioGratis
      );

      // Verificar
      expect(resultado).toBe(esperado);
    }
  );

  test('ENVIOGRATIS elimina el costo de envio bajo el umbral', () => {
    // Preparar
    const municipio = 'Corozal';
    const valorProductos = 10000;

    // Ejecutar
    const resultado = calcularEnvio(municipio, valorProductos, true);

    // Verificar
    expect(resultado).toBe(0);
  });
});

describe('HU-05: liquidar compra', () => {
  test('CP-28: suma subtotal menos descuento mas IVA y envio', () => {
    // Preparar
    const productos = [
      { precio: 100000, cantidad: 1, tarifaIva: 19 },
    ];

    // Ejecutar
    const resultado = liquidarCompra(productos, 'Sincelejo');

    // Verificar
    expect(resultado).toEqual({
      subtotal: 100000,
      descuento: 0,
      iva: 19000,
      envio: 8000,
      total: 127000,
    });
  });

  test('integra ENVIOGRATIS con la liquidacion de una compra', () => {
    // Preparar
    const productos = [
      { precio: 10000, cantidad: 1, tarifaIva: 0 },
    ];

    // Ejecutar
    const resultado = liquidarCompra(
      productos,
      'Corozal',
      'ENVIOGRATIS'
    );

    // Verificar
    expect(resultado.envio).toBe(0);
    expect(resultado.total).toBe(10000);
  });

  test('verifica los importes del ejemplo docente antes de calcular puntos', () => {
    // Preparar
    const productos = [
      { precio: 180000, cantidad: 1, tarifaIva: 19 },
      { precio: 15000, cantidad: 2, tarifaIva: 5 },
      { precio: 4500, cantidad: 4, tarifaIva: 0 },
    ];

    // Ejecutar
    const resultado = liquidarCompra(productos, 'Sincelejo');

    // Verificar
    expect(resultado).toEqual({
      subtotal: 228000,
      descuento: 11400,
      iva: 33915,
      envio: 0,
      total: 250515,
    });
  });
});
