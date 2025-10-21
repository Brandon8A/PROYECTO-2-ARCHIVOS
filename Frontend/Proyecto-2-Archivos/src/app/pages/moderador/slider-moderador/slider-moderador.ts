import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-slider-moderador',
  imports: [RouterModule],
  templateUrl: './slider-moderador.html',
  styleUrl: './slider-moderador.css'
})
export class SliderModerador {
  constructor(public router: Router){

  }

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
  }
}