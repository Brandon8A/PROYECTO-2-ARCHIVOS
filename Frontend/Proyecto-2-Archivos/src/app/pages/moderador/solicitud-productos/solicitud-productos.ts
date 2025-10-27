import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/producto/producto';
import { ServicioModerador } from '../../../servicios/servicio-moderador/servicio-moderador';

@Component({
  selector: 'app-solicitud-productos',
  imports: [],
  templateUrl: './solicitud-productos.html',
  styleUrl: './solicitud-productos.css'
})
export class SolicitudProductos implements OnInit {
  productosNoAprobados: Producto[] = [];

  constructor(public moderadorServicio: ServicioModerador){
    }

  ngOnInit(): void {
    this.obtenerProductosNoAprobados();
  }

  obtenerProductosNoAprobados() {
    this.moderadorServicio.getAprobarProductos().subscribe({
      next: (data) => {
        console.log('Productos obtenidos:', data);
        this.productosNoAprobados = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  aceptarRechazarProducto(id_producto: number, aceptar: boolean) {
    // Lógica para aceptar o rechazar el producto
    this.moderadorServicio.aceptarProducto(id_producto, aceptar).subscribe({
      next: (data) => {
        console.log('Productos obtenidos:', data);
        this.obtenerProductosNoAprobados();
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }
}