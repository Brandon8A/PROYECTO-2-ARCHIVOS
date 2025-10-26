import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLogistica {
  private apiUrl = 'http://localhost:8080/api/logistica';

  constructor(private http: HttpClient) {}

  getPedidosEnCurso(): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/obtenerPedidos`, { headers });
  }
}
