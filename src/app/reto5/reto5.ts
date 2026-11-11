import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto5',
  styleUrl: './reto5.css',
  templateUrl: './reto5.html',
})
export class Reto5 {
  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;
  mensaje: string = '';
  productos: { nombre: string, cantidad: number, precio: number }[] = [];

  agregarProducto() {
    if (this.nombre.trim() === '' || this.cantidad === null || this.precio === null || this.cantidad < 0 || this.precio < 0) {
      this.mensaje = 'Por favor, complete los campos correctamente';
    } else {
      this.productos.push({
        nombre: this.nombre,
        cantidad: this.cantidad,
        precio: this.precio
      });
      this.nombre = '';
      this.cantidad = null;
      this.precio = null;
      this.mensaje = 'Producto agregado correctamente';
    }
  }

  eliminarProducto(indice: number) {
    this.productos.splice(indice, 1);
    this.mensaje = 'Producto eliminado correctamente';
  }
}