import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { SliderUserComun } from '../slider-user-comun/slider-user-comun';
import { ReactiveFormsModule} from '@angular/forms';
import { CarritoCompras } from '../carrito-compras/carrito-compras';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-user-comun',
  imports: [RouterOutlet, Encabezado, SliderUserComun, ReactiveFormsModule, CarritoCompras],
  templateUrl: './inicio-user-comun.html',
  styleUrl: './inicio-user-comun.css'
})
export class InicioUserComun {
  showCart = false;
  toggleCart() {
    this.showCart = !this.showCart;
  }
}