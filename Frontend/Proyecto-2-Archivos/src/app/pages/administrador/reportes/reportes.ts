import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportesServicio } from '../../../servicios/servicios-admin/reportes-servicio';
import { Producto } from '../../../interfaces/producto/producto';
import { Usuario } from '../../../interfaces/usuario/usuario';
import { Sancion } from '../../../interfaces/sancion/sancion';
import { Notificacion } from '../../../interfaces/notificacion/notificacion';

@Component({
  selector: 'app-reportes',
  imports: [FormsModule],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes implements OnInit{
  fechaInicio!: string;
  fechaFin!: string;
  topProductos: Producto[] = [];
  topClientesPorCompras: Usuario[] = [];
  topClientesPorVentas: Usuario[] = [];
  topClientesConMasProductos: Usuario[] = [];
  sanciones: Sancion[] = [];
  notificaciones: Notificacion[] = [];

  constructor(public reporteServicio: ReportesServicio){
  }

  ngOnInit(): void {
    this.clientesConMasProductos();
    this.historialSanciones();
    this.historialNotificaciones();
  }

  obtenerProductosMasVendidosPorIntervalo() {
    console.log('Buscando productos desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getTop10Productos(this.fechaInicio, this.fechaFin).subscribe({
      next: (data) => {
        this.topProductos = data;
        console.log('Productos obtenidos:', this.topProductos);
      }
    })    
  }

  topClientesQueMasGananciasPorComprasHanGenerado(){
    console.log('Buscando clientes desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getTop5ClientesConMasGananciasPorCompras(this.fechaInicio, this.fechaFin).subscribe({
      next: (data) => {
        console.log('Clientes obtenidos:', data);
        this.topClientesPorCompras = data;
      }
    });
  }

  clientesQueMasProductosHanVendido(){
    console.log('Buscando clientes desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getTop5ClientesConMasVentas(this.fechaInicio, this.fechaFin).subscribe({
      next: (data) => {
        console.log('Clientes obtenidos:', data);
        this.topClientesPorVentas = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  clientesConMasProductos(){
    console.log('Buscando clientes desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getTop10ClientesConMasProductos().subscribe({
      next: (data) => {
        console.log('Clientes obtenidos:', data);
        this.topClientesConMasProductos = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  historialSanciones(){
    console.log('Buscando clientes desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getHistorialSanciones().subscribe({
      next: (data) => {
        console.log('Sanciones obtenidas:', data);
        this.sanciones = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  historialNotificaciones(){
    console.log('Buscando clientes desde', this.fechaInicio, 'hasta', this.fechaFin);
    this.reporteServicio.getHistorialNotificaciones().subscribe({
      next: (data) => {
        console.log('Notificaciones obtenidas:', data);
        this.notificaciones = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }
}