import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { SliderModerador } from '../slider-moderador/slider-moderador';

@Component({
  selector: 'app-inicio-moderador',
  imports: [RouterOutlet, Encabezado, SliderModerador],
  templateUrl: './inicio-moderador.html',
  styleUrl: './inicio-moderador.css'
})
export class InicioModerador {

}
