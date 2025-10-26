import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CrearUsuarioServicio } from '../../../servicios/servicios-admin/crear-usuario-servicio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.css'
})
export class CrearUsuario {
  registerForm: FormGroup;
  correo: FormControl;
  contrasenia: FormControl;
  dpi: FormControl;
  nombre: FormControl;
  rol: FormControl;

  constructor(private router: Router, private servicioCreearUsuario: CrearUsuarioServicio) {

    this.correo = new FormControl('', Validators.required);
    this.contrasenia = new FormControl('', Validators.required);
    this.dpi = new FormControl('', Validators.required);
    this.nombre = new FormControl('', Validators.required);
    this.rol = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      correo: this.correo,
      contrasenia: this.contrasenia,
      dpi: this.dpi,
      nombre: this.nombre,
      rol: this.rol
    });
  }

  crearUsuario() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    this.servicioCreearUsuario.crearUsuario(this.registerForm.value).subscribe({
      next: (response) => {
        Swal.fire('Éxito!', 'Usuario creado correctamente', 'success');
        this.router.navigate(['/home-admin']);
      },
      error: (err) => {
        console.error('Error al registrar el usuario:', err);
      }
    });
  }

  /*
  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.servicioAdmin.crearClienteAdmin(this.registerForm.value).subscribe({
      next: (data) => {
        Swal.fire('Exito!', 'Usuario Cliente creado correctamente', 'success');
        console.log(data);
        this.router.navigate(['/home-admin/gestion-usuarios']);
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.registerForm.reset();
  }
    */
}
