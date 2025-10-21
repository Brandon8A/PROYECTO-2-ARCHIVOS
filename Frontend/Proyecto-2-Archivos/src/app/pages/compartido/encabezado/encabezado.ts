import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class Encabezado {
  @Input({required: true}) title!: string;
}
