import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioComun {
  readonly API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  crearUsuario(usuarioNuevo: Usuario) {
    return this.http.post<Usuario>(`${this.API_URL}api/usuario`, usuarioNuevo);
  }
}