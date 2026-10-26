const { calcularDescuentoVolumen } = require('./descuentos');

const CUPONES = {
  SABANERO10: { vigente: true },
  ENVIOGRATIS: { vigente: true },
};

function calcularBeneficios(subtotal, codigo = null, catalogo = CUPONES) {
  const descuentoVolumen = calcularDescuentoVolumen(subtotal);

  if (codigo === null) {
    return {
      descuento: descuentoVolumen,
      envioGratis: false,
    };
  }

  const cupon = Object.hasOwn(catalogo, codigo)
    ? catalogo[codigo]
    : null;

  if (
    !cupon ||
    !cupon.vigente ||
    !['SABANERO10', 'ENVIOGRATIS'].includes(codigo)
  ) {
    throw new Error('Cupon invalido');
  }

  if (codigo === 'ENVIOGRATIS') {
    return {
      descuento: descuentoVolumen,
      envioGratis: true,
    };
  }

  if (subtotal < 50000) {
    throw new Error('Compra minima de 50000');
  }

  const descuentoCupon = Math.round(subtotal * 10 / 100);

  return {
    descuento: Math.max(descuentoVolumen, descuentoCupon),
    envioGratis: false,
  };
}

module.exports = { calcularBeneficios };
