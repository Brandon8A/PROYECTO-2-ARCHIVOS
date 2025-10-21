import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider-logistica',
  imports: [RouterModule],
  templateUrl: './slider-logistica.html',
  styleUrl: './slider-logistica.css'
})
export class SliderLogistica {
  constructor(public router: Router){

  }

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
  }
}
