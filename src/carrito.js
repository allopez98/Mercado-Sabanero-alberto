class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.productos = [];
  }

  agregarProducto(producto, cantidad) {
    this.productos.push({
      ...producto,
      cantidad,
    });
  }

  obtenerProductos() {
    return this.productos;
  }
}

module.exports = { Carrito };
