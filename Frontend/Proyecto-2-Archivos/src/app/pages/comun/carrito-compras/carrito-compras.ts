import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../interfaces/producto/producto';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.css'
})
export class CarritoCompras {

  cart: Producto[] = [];
  total = 0;

  //constructor(private cartService: CartService) {}

  ngOnInit() {
    /*
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.getTotal();
    });
    */
  }

  remove(id: number) {
    /*this.cartService.removeFromCart(id);*/

    }
/*
  updateQuantity(p: Product) {
    if (p.cantidad <= 0) p.cantidad = 1;
    this.cartService.updateQuantity(p.id, p.cantidad);
  }
*/

updateQuantity() {
  /*
    if (p.cantidad <= 0) p.cantidad = 1;
    this.cartService.updateQuantity(p.id, p.cantidad);
  */
    }
  clearCart() {
    //this.cartService.clearCart();
  }

  pagar() {
    const tarjeta = prompt("Ingrese su número de tarjeta de crédito:");
    if (tarjeta && tarjeta.length >= 13) {
      alert("Pago realizado exitosamente");
      //this.cartService.clearCart();
    } else {
      alert("Número de tarjeta inválido");
    }
  }
}
