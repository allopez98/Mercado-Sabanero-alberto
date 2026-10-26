class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.productos = [];
  }

  validarCantidad(cantidad) {
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 50) {
      throw new Error('Cantidad invalida');
    }
  }

  agregarProducto(producto, cantidad) {
    this.validarCantidad(cantidad);

    const existente = this.productos.find(
      item => item.id === producto.id
    );

    const cantidadActual = existente ? existente.cantidad : 0;
    const cantidadTotal = cantidadActual + cantidad;

    this.validarCantidad(cantidadTotal);

    const stock = this.inventario.obtenerStock(producto.id);

    if (cantidadTotal > stock) {
      throw new Error('Stock insuficiente');
    }

    if (existente) {
      existente.cantidad = cantidadTotal;
    } else {
      this.productos.push({
        ...producto,
        cantidad: cantidadTotal,
      });
    }
  }

  obtenerProductos() {
    return this.productos;
  }
}

module.exports = { Carrito };
