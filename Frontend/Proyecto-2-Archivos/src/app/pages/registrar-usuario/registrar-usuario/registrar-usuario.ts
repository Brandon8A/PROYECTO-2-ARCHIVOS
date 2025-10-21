import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Encabezado } from '../../compartido/encabezado/encabezado';
import { RegistroUsuarioComun } from '../../../servicios/registro-usuario-comun';

@Component({
  selector: 'app-registrar-usuario',
  imports: [ReactiveFormsModule, Encabezado],
  templateUrl: './registrar-usuario.html',
  styleUrl: './registrar-usuario.css'
})
export class RegistrarUsuario {
  emailCliente: string = '';
  passwordCliente: string = '';

  registerForm: FormGroup;
  dpi: FormControl;
  nombre: FormControl;
  correo: FormControl;
  contrasenia: FormControl;

  constructor(private router: Router, public servicioUsuario: RegistroUsuarioComun) {
    this.dpi = new FormControl('', Validators.required);
    this.nombre = new FormControl('', Validators.required);
    this.correo = new FormControl('', [Validators.required, Validators.email]);
    this.contrasenia = new FormControl('', Validators.required);
    if (this.correo.valid) {
      console.log('Correo válido:', this.correo.value.correo);
    } else {
      console.log('Formulario inválido');
      this.correo.markAllAsTouched();
    }

    this.registerForm = new FormGroup({
      dpi: this.dpi,
      nombre: this.nombre,
      correo: this.correo,
      contrasenia: this.contrasenia
    });
  }


  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    var emailLogueado = this.registerForm.get('email')?.value;
    var password = this.registerForm.get('password')?.value

    
    this.servicioUsuario.crearUsuario(this.registerForm.value).subscribe({
      next: (data) => {
        console.log('Usuario creado con éxito:', data);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    });
      
    console.log(this.registerForm.value);

  }
}

/*
    if (this.rol.value.toLowerCase() === 'administrador') {
      this.registroServicio.crearAdministrador(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Administrador creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-admin']);
        },
        error: (error) => {
          console.log(error)
        }
      });
    } else if (this.rol.value.toLowerCase() === 'cliente') {
      this.registroServicio.crearCliente(this.registerForm.value).subscribe({
        next: data =>{
          this.router.navigate(['registro-datos-cliente'], {
            queryParams: { emailLogueado }
          })
        }
      })
    } else if (this.rol.value.toLowerCase() === 'empleado') {
      console.log('Mostrar home-empleado');
      this.registroServicio.crearEmpleado(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Empleado creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/register-datos-empleado'], {
            queryParams: { emailLogueado }
          });
        },
        error: (error) => {
          console.log(error)
        }
      });
    } else if (this.rol.value.toLowerCase() === 'gestor_servicios') {
      console.log('Mostrar home-gestor-servicios');
      this.registroServicio.crearGestorServicios(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Gestor de servicios creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-gestor-servicios'], {
            queryParams: { emailLogueado }
          });
        },
        error: (error) => {
          console.log(error)
        }
      });
    } else {
      console.log('Mostrar home-marketing');
      this.registroServicio.crearMarketing(this.registerForm.value).subscribe({
        next: data => {
          Swal.fire('Exito!', 'Marketing creado correctamente', 'success');
          console.log(data);
          this.router.navigate(['/home-marketing'], {
            queryParams: { emailLogueado }
          });
        },
        error: (error) => {
          console.log(error)
        }
      });
    }
    */