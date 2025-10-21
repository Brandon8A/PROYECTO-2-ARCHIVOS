import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reportes',
  imports: [FormsModule],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes {
  fechaInicio!: string;
  fechaFin!: string;
  topProductos: any[] = [];

  buscarPorIntervalo() {
    console.log('Buscando productos desde', this.fechaInicio, 'hasta', this.fechaFin);

    // Aquí podrías hacer la petición al backend con las fechas seleccionadas
    // Ejemplo simulado:
    this.topProductos = [
      { nombre: 'Producto A', cantidad: 120 },
      { nombre: 'Producto B', cantidad: 90 },
      // ...
    ];
  }
}
