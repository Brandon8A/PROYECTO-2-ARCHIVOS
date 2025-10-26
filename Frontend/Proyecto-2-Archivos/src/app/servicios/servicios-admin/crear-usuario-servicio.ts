import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioServicio {

  private apiUrl = 'http://localhost:8080/api/administrador';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: any): Observable<any> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.apiUrl}/crearUsuario`, usuario, { headers });
  }
} 