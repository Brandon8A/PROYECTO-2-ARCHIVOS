import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.css'
})
export class CrearUsuario {
  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  dpi: FormControl;
  nombre: FormControl;
  rol: FormControl;

  constructor(private router: Router) {

    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.dpi = new FormControl('', Validators.required);
    this.nombre = new FormControl('', Validators.required);
    this.rol = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      userDpi: this.dpi,
      nombre: this.nombre,
      rol: this.rol
    });
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log("Formulario Crear Usuario.");
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
