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

describe('HU-01: inventario y productos repetidos', () => {
  test('CP-05: rechaza un producto si el stock es insuficiente', () => {
    // Preparar
    const { carrito, producto, inventario } = prepararCarrito(4);

    // Ejecutar
    const agregarSinStock = () => {
      carrito.agregarProducto(producto, 5);
    };

    // Verificar
    expect(agregarSinStock).toThrow('Stock insuficiente');
    expect(inventario.obtenerStock).toHaveBeenCalledWith('arroz');
    expect(carrito.obtenerProductos()).toEqual([]);
  });

  test('CP-06: suma las cantidades al agregar el mismo producto', () => {
    // Preparar
    const { carrito, producto } = prepararCarrito();
    carrito.agregarProducto(producto, 2);

    // Ejecutar
    carrito.agregarProducto(producto, 3);

    // Verificar
    expect(carrito.obtenerProductos()).toEqual([
      { ...producto, cantidad: 5 },
    ]);
  });

  test('CP-07: consulta el inventario del producto antes de agregarlo', () => {
    // Preparar
    const { carrito, producto, inventario } = prepararCarrito(10);

    // Ejecutar
    carrito.agregarProducto(producto, 2);

    // Verificar
    expect(inventario.obtenerStock).toHaveBeenCalledTimes(1);
    expect(inventario.obtenerStock).toHaveBeenCalledWith('arroz');
    expect(carrito.obtenerProductos()).toEqual([
      { ...producto, cantidad: 2 },
    ]);
  });

  test('CP-33: rechaza una cantidad acumulada superior a 50', () => {
    // Preparar
    const { carrito, producto } = prepararCarrito();
    carrito.agregarProducto(producto, 30);

    // Ejecutar
    const superarLimite = () => {
      carrito.agregarProducto(producto, 21);
    };

    // Verificar
    expect(superarLimite).toThrow('Cantidad invalida');
    expect(carrito.obtenerProductos()).toEqual([
      { ...producto, cantidad: 30 },
    ]);
  });

  test('CP-34: verifica el stock para la cantidad acumulada', () => {
    // Preparar
    const { carrito, producto } = prepararCarrito(5);
    carrito.agregarProducto(producto, 3);

    // Ejecutar
    const superarStock = () => {
      carrito.agregarProducto(producto, 3);
    };

    // Verificar
    expect(superarStock).toThrow('Stock insuficiente');
    expect(carrito.obtenerProductos()).toEqual([
      { ...producto, cantidad: 3 },
    ]);
  });
});
