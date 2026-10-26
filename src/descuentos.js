const UMBRAL_DESCUENTO_MEDIO = 200000;
const UMBRAL_DESCUENTO_ALTO = 500000;

const PORCENTAJE_MEDIO = 5;
const PORCENTAJE_ALTO = 10;

function calcularDescuentoVolumen(subtotal) {
  let porcentaje = 0;

  if (subtotal >= UMBRAL_DESCUENTO_ALTO) {
    porcentaje = PORCENTAJE_ALTO;
  } else if (subtotal >= UMBRAL_DESCUENTO_MEDIO) {
    porcentaje = PORCENTAJE_MEDIO;
  }

  return Math.round(subtotal * porcentaje / 100);
}

module.exports = { calcularDescuentoVolumen };
