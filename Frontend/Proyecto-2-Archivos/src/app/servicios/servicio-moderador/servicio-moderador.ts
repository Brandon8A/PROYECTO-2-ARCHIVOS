import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioModerador {
  private apiUrl = 'http://localhost:8080/api/moderador';

  constructor(private http: HttpClient) {}

  getAprobarProductos(): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/aprobar-productos`, { headers});
  }

  /*Metodo para mandar las condiciones del producto (aceptar/rechazar) */
  aceptarProducto(idProducto: number, aceptado: boolean): Observable<any> {
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  // Se envia el valor booleano en el cuerpo de la petición
  return this.http.put(
    `${this.apiUrl}/producto/${idProducto}/estado`,
    { aceptado }, // cuerpo JSON
    { headers, responseType: 'text' }
  );
}

}