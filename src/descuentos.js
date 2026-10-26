function calcularDescuentoVolumen(subtotal) {
  if (subtotal >= 500000) {
    return Math.round(subtotal * 10 / 100);
  }

  if (subtotal >= 200000) {
    return Math.round(subtotal * 5 / 100);
  }

  return 0;
}

module.exports = { calcularDescuentoVolumen };
