function calcularPuntos(total, envio, categoria) {
  const puntosBase = Math.floor((total - envio) / 1000);

  return categoria === 'ORO' ? puntosBase * 2 : puntosBase;
}

module.exports = { calcularPuntos };
