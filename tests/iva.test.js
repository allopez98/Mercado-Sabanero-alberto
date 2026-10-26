const { calcularIva } = require('../src/iva');

describe('HU-02: calcular IVA', () => {
  test.each([
    ['CP-08', 0, 0],
    ['CP-09', 5, 500],
    ['CP-10', 19, 1900],
  ])('%s: calcula IVA del %i por ciento', (id, tarifa, esperado) => {
    // Preparar
    const subtotal = 10000;
    const descuento = 0;

    // Ejecutar
    const resultado = calcularIva(subtotal, tarifa, descuento);

    // Verificar
    expect(resultado).toBe(esperado);
  });

  test('CP-11: calcula el IVA sobre el valor despues del descuento', () => {
    // Preparar
    const subtotal = 100000;
    const tarifa = 19;
    const descuento = 10000;

    // Ejecutar
    const resultado = calcularIva(subtotal, tarifa, descuento);

    // Verificar
    expect(resultado).toBe(17100);
  });

  test('CP-35: redondea el IVA al peso mas cercano', () => {
    // Preparar
    const subtotal = 101;
    const tarifa = 5;
    const descuento = 0;

    // Ejecutar
    const resultado = calcularIva(subtotal, tarifa, descuento);

    // Verificar
    expect(resultado).toBe(5);
  });
});
