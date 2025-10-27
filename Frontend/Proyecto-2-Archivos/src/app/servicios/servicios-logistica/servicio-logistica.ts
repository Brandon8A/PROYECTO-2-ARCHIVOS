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

  actualizarEntregaProducto(idPedido: number): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    // Se usa PUT y se pasa el id en la URL
    return this.http.put(`${this.apiUrl}/entregar/${idPedido}`, {}, { headers, responseType: 'text' });
  }
}