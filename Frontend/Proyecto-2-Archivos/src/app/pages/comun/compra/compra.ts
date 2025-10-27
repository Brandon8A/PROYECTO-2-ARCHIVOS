import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/producto/producto';
import { ServicioComun } from '../../../servicios/servicios-comun/servicio-comun';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compra',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class Compra implements OnInit{
  productos: Producto[] = [];
  carrito: Producto[] = [];
  total: number = 0;

  constructor(private comunServicios: ServicioComun) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.comunServicios.obtenerProductos().subscribe({
      next: (data) => {
        console.log('Clientes obtenidos:', data);
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    });
  }

  agregarAlCarrito(producto: Producto) {
    const existente = this.carrito.find(p => p.id_producto === producto.id_producto);

    if (existente) {
      existente.cantidad! += 1;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }

    this.actualizarCarrito();
    Swal.fire('Agregado', `${producto.nombre} se agregó al carrito.`, 'success');
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.actualizarCarrito();
    Swal.fire('Eliminado', 'Producto eliminado del carrito.', 'info');
  }

  actualizarCarrito() {
    this.total = this.carrito.reduce((acc, p) => acc + (p.precio * (p.cantidad || 1)), 0);
  }

  borrarCarrito() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminarán todos los productos del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar'
    }).then(res => {
      if (res.isConfirmed) {
        this.carrito = [];
        this.total = 0;
        Swal.fire('Carrito vacío', 'Se eliminaron todos los productos.', 'success');
      }
    });
  }

  pagarCarrito() {
    if (this.carrito.length === 0) {
      Swal.fire('Carrito vacío', 'Agrega productos antes de pagar.', 'info');
      return;
    }

    Swal.fire({
      title: 'Pago con tarjeta de crédito',
      html: `
        <input type="text" id="tarjeta" class="swal2-input" placeholder="Número de tarjeta">
        <input type="text" id="nombre" class="swal2-input" placeholder="Nombre en la tarjeta">
        <input type="text" id="fecha" class="swal2-input" placeholder="MM/AA">
        <input type="text" id="cvv" class="swal2-input" placeholder="CVV">
      `,
      confirmButtonText: 'Pagar',
      focusConfirm: false,
      preConfirm: () => {
        const tarjeta = (document.getElementById('tarjeta') as HTMLInputElement).value;
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const fecha = (document.getElementById('fecha') as HTMLInputElement).value;
        const cvv = (document.getElementById('cvv') as HTMLInputElement).value;

        if (!tarjeta || !nombre || !fecha || !cvv) {
          Swal.showValidationMessage('Por favor, completa todos los campos.');
          return false;
        }
        return { tarjeta, nombre, fecha, cvv };
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Pago exitoso', 'Tu compra ha sido realizada correctamente.', 'success');
        this.carrito = [];
        this.total = 0;
      }
    });
  }
}
