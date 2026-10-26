const { calcularBeneficios } = require('../src/cupones');

describe('HU-04: aplicar cupones', () => {
  test('CP-17: SABANERO10 descuenta el diez por ciento desde 50000', () => {
    // Preparar
    const subtotal = 50000;

    // Ejecutar
    const resultado = calcularBeneficios(subtotal, 'SABANERO10');

    // Verificar
    expect(resultado).toEqual({
      descuento: 5000,
      envioGratis: false,
    });
  });

  test('CP-18: rechaza SABANERO10 sin compra minima', () => {
    // Preparar
    const subtotal = 49999;

    // Ejecutar
    const aplicarCupon = () => {
      calcularBeneficios(subtotal, 'SABANERO10');
    };

    // Verificar
    expect(aplicarCupon).toThrow('Compra minima de 50000');
  });

  test('CP-19: ENVIOGRATIS activa el envio gratuito', () => {
    // Preparar
    const subtotal = 10000;

    // Ejecutar
    const resultado = calcularBeneficios(subtotal, 'ENVIOGRATIS');

    // Verificar
    expect(resultado).toEqual({
      descuento: 0,
      envioGratis: true,
    });
  });

  test('CP-20: rechaza un cupon inexistente', () => {
    // Preparar
    const codigo = 'NOEXISTE';

    // Ejecutar
    const aplicarCupon = () => {
      calcularBeneficios(100000, codigo);
    };

    // Verificar
    expect(aplicarCupon).toThrow('Cupon invalido');
  });

  test('CP-21: rechaza un cupon vencido', () => {
    // Preparar
    const catalogo = {
      SABANERO10: { vigente: false },
    };

    // Ejecutar
    const aplicarCupon = () => {
      calcularBeneficios(100000, 'SABANERO10', catalogo);
    };

    // Verificar
    expect(aplicarCupon).toThrow('Cupon invalido');
  });

  test.each([
    ['CP-22', 200000, 20000],
    ['CP-23', 500000, 50000],
  ])(
    '%s: elige el mayor descuento sin sumarlos para subtotal %i',
    (id, subtotal, esperado) => {
      // Preparar
      const codigo = 'SABANERO10';

      // Ejecutar
      const resultado = calcularBeneficios(subtotal, codigo);

      // Verificar
      expect(resultado.descuento).toBe(esperado);
      expect(resultado.envioGratis).toBe(false);
    }
  );

  test('sin cupon conserva el descuento por volumen', () => {
    // Preparar
    const subtotal = 200000;

    // Ejecutar
    const resultado = calcularBeneficios(subtotal);

    // Verificar
    expect(resultado).toEqual({
      descuento: 10000,
      envioGratis: false,
    });
  });

  test('ENVIOGRATIS conserva el descuento por volumen', () => {
    // Preparar
    const subtotal = 200000;

    // Ejecutar
    const resultado = calcularBeneficios(subtotal, 'ENVIOGRATIS');

    // Verificar
    expect(resultado).toEqual({
      descuento: 10000,
      envioGratis: true,
    });
  });
});
