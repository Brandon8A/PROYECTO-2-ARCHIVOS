import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionRegistroService {
  //private apiUrl = 'http://localhost:8080/api/autenticacion'; https://purer-trish-anemometrically.ngrok-free.dev
  private apiUrl = 'https://purer-trish-anemometrically.ngrok-free.dev/api/autenticacion';

  constructor(private http: HttpClient) {}

  // Registro
  register(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // Login
  login(correo: string, contrasenia: string): Observable<any> {
    const body = { correo, contrasenia};
    return this.http.post(`${this.apiUrl}/login`, body);
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