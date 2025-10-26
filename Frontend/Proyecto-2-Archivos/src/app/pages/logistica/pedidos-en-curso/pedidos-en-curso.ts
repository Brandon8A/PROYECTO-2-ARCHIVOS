import { Component, OnInit } from '@angular/core';
import { ServicioLogistica } from '../../../servicios/servicios-logistica/servicio-logistica';
import { Pedido } from '../../../interfaces/pedido/pedido';

@Component({
  selector: 'app-pedidos-en-curso',
  imports: [],
  templateUrl: './pedidos-en-curso.html',
  styleUrl: './pedidos-en-curso.css'
})
export class PedidosEnCurso implements OnInit {

  pedidosEnCurso: Pedido[] = [];


  constructor(public servicioLogistica: ServicioLogistica) {
  }

  ngOnInit(): void {
    this.obtenerPedidosEnCurso();
  }

  obtenerPedidosEnCurso() {
    this.servicioLogistica.getPedidosEnCurso().subscribe({
      next: (data) => {
        console.log('Pedidos obtenidos:', data);
        this.pedidosEnCurso = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  entregarProducto(){
    console.log("Producto Entregado");
  }
}
