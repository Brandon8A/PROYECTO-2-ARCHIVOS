import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, Encabezado],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  loguearUsuario() {
    
  }
}
