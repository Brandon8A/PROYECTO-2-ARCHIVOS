import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  imports: [RouterModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider {
  constructor(public router: Router){

  }

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
  }
}
