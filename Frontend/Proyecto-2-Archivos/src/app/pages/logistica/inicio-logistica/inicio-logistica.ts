import { Component } from '@angular/core';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SliderLogistica } from '../slider-logistica/slider-logistica';

@Component({
  selector: 'app-inicio-logistica',
  imports: [Encabezado, RouterOutlet, SliderLogistica],
  templateUrl: './inicio-logistica.html',
  styleUrl: './inicio-logistica.css'
})
export class InicioLogistica {

}
