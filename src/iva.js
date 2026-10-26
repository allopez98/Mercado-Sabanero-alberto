function calcularIva(subtotal, tarifa, descuento = 0) {
  return Math.round((subtotal - descuento) * tarifa / 100);
}

module.exports = { calcularIva };
