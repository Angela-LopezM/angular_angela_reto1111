import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto2',
  styleUrl: './reto2.css',
  templateUrl: './reto2.html',
})
export class Reto2 {
  productos = [
    {
      nombre: 'Audífonos',
      categoria: 'Accesorios',
      precio: 120000
    },
    {
      nombre: 'Computador',
      categoria: 'Tecnología',
      precio: 2500000
    },
    {
      nombre: 'Teclado',
      categoria: 'Accesorios',
      precio: 85000
    },
    {
      nombre: 'Mouse',
      categoria: 'Accesorios',
      precio: 45000
    },
    {
      nombre: 'Cargador',
      categoria: 'Accesorios',
      precio: 35000
    }
  ];
}
