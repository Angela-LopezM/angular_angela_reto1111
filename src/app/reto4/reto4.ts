import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto4',
  styleUrl: './reto4.css',
  templateUrl: './reto4.html',
})
export class Reto4 {
  color: string = 'gray';
  mensaje: string = 'Seleccione un color';

  cambiarColor(colorSeleccionado: string) {
    this.color = colorSeleccionado;
    if (colorSeleccionado === 'red') {
      this.mensaje = 'Detenerse';
    } else if (colorSeleccionado === 'yellow') {
      this.mensaje = 'Precaución';
    } else if (colorSeleccionado === 'green') {
      this.mensaje = 'Avanzar';
    }
  }
}