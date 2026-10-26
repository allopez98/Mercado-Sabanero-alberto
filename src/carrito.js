class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.productos = [];
  }

  agregarProducto(producto, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 50) {
      throw new Error('Cantidad invalida');
    }

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
