import { Component } from '@angular/core';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { RouterOutlet } from '@angular/router'
import { Slider } from '../slider/slider';

@Component({
  selector: 'app-inicio-admins',
  imports: [RouterOutlet, Encabezado, Slider],
  templateUrl: './inicio-admins.html',
  styleUrl: './inicio-admins.css'
})
export class InicioAdmins {
}
