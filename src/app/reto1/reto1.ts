import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto1',
  styleUrl: './reto1.css',
  templateUrl: './reto1.html',
})
export class Reto1 {
    num1 = 0;
  num2 = 0;
  resultado = 0;
  mensaje = '';
  suma() {
    if (this.num1 === null || this.num2 === null) {
      this.mensaje = 'Por favor, ingrese los dos números';
    } else {
      this.resultado = this.num1 + this.num2;
      this.mensaje = '';
    }
  }

  resta() {
    if (this.num1 === null || this.num2 === null) {
      this.mensaje = 'Por favor, ingrese los dos números';
    } else {
      this.resultado = this.num1 - this.num2;
      this.mensaje = '';
    }
  }
}