const { calcularIva } = require('./iva');
const { calcularBeneficios } = require('./cupones');

const UMBRAL_ENVIO_GRATIS = 150000;
const ENVIO_SINCELEJO = 8000;
const ENVIO_OTROS_MUNICIPIOS = 15000;

function calcularEnvio(municipio, valorProductos, envioGratis = false) {
  if (envioGratis || valorProductos >= UMBRAL_ENVIO_GRATIS) {
    return 0;
  }

  return municipio === 'Sincelejo'
    ? ENVIO_SINCELEJO
    : ENVIO_OTROS_MUNICIPIOS;
}

function liquidarCompra(productos, municipio, codigo = null) {
  const subtotales = productos.map(
    producto => producto.precio * producto.cantidad
  );

  const subtotal = subtotales.reduce(
    (acumulado, valor) => acumulado + valor,
    0
  );

  const beneficios = calcularBeneficios(subtotal, codigo);
  const descuento = beneficios.descuento;

  const repartos = subtotales.map((valor, indice) => {
    const proporcional = subtotal === 0
      ? 0
      : valor * descuento / subtotal;

    return {
      indice,
      descuento: Math.floor(proporcional),
      fraccion: proporcional - Math.floor(proporcional),
    };
  });

  const asignado = repartos.reduce(
    (acumulado, reparto) => acumulado + reparto.descuento,
    0
  );

  const ordenados = [...repartos].sort(
    (a, b) => b.fraccion - a.fraccion || a.indice - b.indice
  );

  for (let i = 0; i < descuento - asignado; i += 1) {
    ordenados[i].descuento += 1;
  }

  const iva = productos.reduce((acumulado, producto, indice) => {
    return acumulado + calcularIva(
      subtotales[indice],
      producto.tarifaIva,
      repartos[indice].descuento
    );
  }, 0);

  const valorProductos = subtotal - descuento + iva;

  const envio = calcularEnvio(
    municipio,
    valorProductos,
    beneficios.envioGratis
  );

  return {
    subtotal,
    descuento,
    iva,
    envio,
    total: valorProductos + envio,
  };
}

module.exports = { calcularEnvio, liquidarCompra };
