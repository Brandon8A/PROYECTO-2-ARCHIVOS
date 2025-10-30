import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionRegistroService {
  private apiUrl = environment.apiUrl
  //private apiUrl = 'http://localhost:8080/api/autenticacion'; https://purer-trish-anemometrically.ngrok-free.dev
  //private apiUrl = 'https://purer-trish-anemometrically.ngrok-free.dev/api/autenticacion';

  constructor(private http: HttpClient, private config: ConfigService) {}

  // Registro
  register(usuario: any): Observable<any> {
    return this.http.post(`${this.config.apiUrl}/autenticacion/register`, usuario);
    //return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // Login
  login(correo: string, contrasenia: string): Observable<any> {
    const body = { correo, contrasenia };
  return this.http.post<any>(`${this.apiUrl}/autenticacion/login`, body)
    .pipe(
      tap(response => {
        if (response.token) {
          this.saveToken(response.token);
        }
        if (response.rol) {
          this.saveRol(response.rol);
        }
      })
    );
    
    /*
    const body = { correo, contrasenia};
    return this.http.post(`${this.apiUrl}/autenticacion/login`, body);
    */
    }

  // Guardar token y rol
  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  saveRol(rol: string): void {
    localStorage.setItem('rol', rol);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('rol');
  }
}