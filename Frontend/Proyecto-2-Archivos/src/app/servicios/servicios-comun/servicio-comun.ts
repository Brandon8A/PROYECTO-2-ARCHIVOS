import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../interfaces/producto/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioComun {

  private apiUrl = 'http://localhost:8080/api/comun';

  constructor(private http: HttpClient) { 

  }

  // Obtener todos los productos
  obtenerProductos(): Observable<Producto[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/productos`, { headers });
  }
}