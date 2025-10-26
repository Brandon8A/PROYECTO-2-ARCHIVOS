import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesServicio {

  private apiUrl = 'http://localhost:8080/api/administrador';

  constructor(private http: HttpClient) {}

  getTop10Productos(fechaInicio: string, fechaFin: string): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const params = { fechaInicio, fechaFin };
    return this.http.get<any[]>(`${this.apiUrl}/reportes/Top10Productos`, { headers, params });
  }

  getTop5ClientesConMasGananciasPorCompras(fechaInicio: string, fechaFin: string): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const params = { fechaInicio, fechaFin };
    return this.http.get<any[]>(`${this.apiUrl}/reportes/Top5Clientes`, { headers, params });
  }

  getTop5ClientesConMasVentas(fechaInicio: string, fechaFin: string): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const params = { fechaInicio, fechaFin };
    return this.http.get<any[]>(`${this.apiUrl}/reportes/Top5ClientesPorVentas`, { headers, params });
  }

  getTop10ClientesConMasProductos(): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/reportes/Top10ClientesConMasProductos`, { headers });
  }

  getHistorialSanciones(): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/reportes/historialSanciones`, { headers });
  }

  getHistorialNotificaciones(): Observable<any[]> {
    const token = localStorage.getItem('token'); //el token que guardaste al loguear
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl}/reportes/historialNotificaciones`, { headers });
  }
}