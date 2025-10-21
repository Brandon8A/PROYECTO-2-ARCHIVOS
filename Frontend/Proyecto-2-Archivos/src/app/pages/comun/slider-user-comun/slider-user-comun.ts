import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider-user-comun',
  imports: [RouterModule],
  templateUrl: './slider-user-comun.html',
  styleUrl: './slider-user-comun.css'
})
export class SliderUserComun {
  constructor(public router: Router){

  }

  public isOpen: boolean = false;

  toogleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toogle: ' + this.isOpen);
  }
}
