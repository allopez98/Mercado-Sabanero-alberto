const { Carrito } = require('../src/carrito');

describe('HU-01: agregar productos al carrito', () => {
  test('CP-01: agrega una unidad cuando hay stock suficiente', () => {
    // Preparar
    const inventario = {
      obtenerStock: jest.fn().mockReturnValue(100),
    };

    const carrito = new Carrito(inventario);

    const producto = {
      id: 'arroz',
      nombre: 'Arroz',
      precio: 4500,
      tarifaIva: 0,
    };

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
