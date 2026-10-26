const PESOS_POR_PUNTO = 1000;
const MULTIPLICADOR_ORO = 2;

function calcularPuntos(total, envio, categoria) {
  const importeSinEnvio = total - envio;
  const puntosBase = Math.floor(importeSinEnvio / PESOS_POR_PUNTO);

  const multiplicador = categoria === 'ORO'
    ? MULTIPLICADOR_ORO
    : 1;

  return puntosBase * multiplicador;
}

module.exports = { calcularPuntos };
