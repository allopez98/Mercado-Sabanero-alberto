const { Carrito } = require('../src/carrito');

function prepararCarrito(stock = 100) {
  const inventario = {
    obtenerStock: jest.fn().mockReturnValue(stock),
  };

  const carrito = new Carrito(inventario);

  const producto = {
    id: 'arroz',
    nombre: 'Arroz',
    precio: 4500,
    tarifaIva: 0,
  };

  return { inventario, carrito, producto };
}

describe('HU-01: agregar productos al carrito', () => {
  test('CP-01: agrega una unidad cuando hay stock suficiente', () => {
    // Preparar
    const { carrito, producto } = prepararCarrito();

    // Ejecutar
    carrito.agregarProducto(producto, 1);

    // Verificar
    expect(carrito.obtenerProductos()).toEqual([
      {
        ...producto,
        cantidad: 1,
      },
    ]);
  });
});

describe('HU-01: limites de cantidad', () => {
  test.each([
    ['CP-02', 50],
  ])('%s: acepta agregar %i unidades', (id, cantidad) => {
    // Preparar
    const { carrito, producto } = prepararCarrito();

    // Ejecutar
    carrito.agregarProducto(producto, cantidad);

    // Verificar
    expect(carrito.obtenerProductos()).toEqual([
      {
        ...producto,
        cantidad,
      },
    ]);
  });

  test.each([
    ['CP-03', 0],
    ['CP-04', 51],
  ])('%s: rechaza agregar %i unidades', (id, cantidad) => {
    // Preparar
    const { carrito, producto } = prepararCarrito();

    // Ejecutar
    const agregarCantidadInvalida = () => {
      carrito.agregarProducto(producto, cantidad);
    };

    // Verificar
    expect(agregarCantidadInvalida).toThrow('Cantidad invalida');
    expect(carrito.obtenerProductos()).toEqual([]);
  });
});
