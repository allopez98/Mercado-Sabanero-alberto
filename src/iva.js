function calcularIva(subtotal, tarifa, descuento = 0) {
  const baseGravable = subtotal - descuento;
  const impuesto = baseGravable * tarifa / 100;

  return Math.round(impuesto);
}

module.exports = { calcularIva };
