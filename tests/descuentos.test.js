const { calcularDescuentoVolumen } = require('../src/descuentos');

describe('HU-03: descuento por volumen', () => {
  test.each([
    ['CP-12', 199999, 0],
    ['CP-13', 200000, 10000],
    ['CP-14', 499999, 25000],
    ['CP-15', 500000, 50000],
    ['CP-16', 600000, 60000],
  ])(
    '%s: para un subtotal de %i aplica un descuento de %i pesos',
    (id, subtotal, descuentoEsperado) => {
      // Preparar
      const esperado = descuentoEsperado;

      // Ejecutar
      const resultado = calcularDescuentoVolumen(subtotal);

      // Verificar
      expect(resultado).toBe(esperado);
    }
  );
});
