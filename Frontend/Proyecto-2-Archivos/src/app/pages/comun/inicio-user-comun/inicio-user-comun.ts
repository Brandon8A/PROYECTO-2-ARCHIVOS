import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { SliderUserComun } from '../slider-user-comun/slider-user-comun';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-user-comun',
  imports: [RouterOutlet, Encabezado, SliderUserComun, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './inicio-user-comun.html',
  styleUrl: './inicio-user-comun.css'
})
export class InicioUserComun {
  
}