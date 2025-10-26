import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { AutenticacionRegistroService } from '../../../servicios/autenticacion-registro-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, Encabezado],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  correo: FormControl;
  contrasenia: FormControl;

  constructor(private servicioAutenticacion: AutenticacionRegistroService, private router: Router) {
    this.correo = new FormControl('', Validators.required);
    this.contrasenia = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      correo: this.correo,
      contrasenia: this.contrasenia
    });
  }

  loguearUsuario() {
    if (this.loginForm.invalid) {
      return;
    }

    this.servicioAutenticacion.login(this.correo.value, this.contrasenia.value).subscribe({
      next: (res) => {
        if (res.token) {
          this.servicioAutenticacion.saveToken(res.token);
          this.servicioAutenticacion.saveRol(res.rol);

          // Redirigir según rol
          if (res.rol === 'administrador') {
            this.router.navigate(['/home-admin']);
          } else if (res.rol === 'moderador') {
            this.router.navigate(['/home-moderador']);
          } else if (res.rol === 'logistica') {
            this.router.navigate(['/home-logistica']);
          } else {
            this.router.navigate(['/home-user']);
          }
        } else {
          Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
      },
      error: (err) => {
        Swal.fire('Error', 'Ocurrió un error durante el inicio de sesión', 'error');
      }
    });
  }
}
