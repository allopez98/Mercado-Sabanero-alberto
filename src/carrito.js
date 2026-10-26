class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.productos = [];
  }

  agregarProducto(producto, cantidad) {
    throw new Error('Pendiente de implementar');
  }

  obtenerProductos() {
    return this.productos;
  }
}

module.exports = { Carrito };
