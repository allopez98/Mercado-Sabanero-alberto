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
