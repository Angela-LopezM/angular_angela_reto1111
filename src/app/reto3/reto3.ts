import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto3',
  styleUrl: './reto3.css',
  templateUrl: './reto3.html',
})
export class Reto3 {
  nombre: string = '';
  programa: string = '';
  edad: number | null = null;
  mensaje: string = '';

  estudiantes: { nombre: string, programa: string, edad: number }[] = [];

  registrarEstudiante() {
    if (this.nombre.trim() === '' || this.programa.trim() === '' || this.edad === null || this.edad <= 0 || !Number.isInteger(this.edad)) {
      this.mensaje = 'Por favor, complete todos los campos correctamente';

    } else {
      this.estudiantes.push({
        nombre: this.nombre,
        programa: this.programa,
        edad: this.edad
      });

      this.nombre = '';
      this.programa = '';
      this.edad = null;
      this.mensaje = 'Estudiante registrado correctamente';
    }
  }
}