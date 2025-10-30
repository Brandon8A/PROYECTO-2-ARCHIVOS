import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  config: any;
  /**
   * Cargar la configuración dinámica desde un archivo externo (assets/config.json)
   * o usar valores por defecto si no se encuentra.
   */

  loadConfig(): Promise<void> {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then((data: any) => {
        this.config = data;
        console.log('Config cargada:', this.config);
      })
      .catch(err => {
        console.warn('No se pudo cargar config.json, usando environment.ts', err);
        this.config = environment; // fallback
      });
  }

  /*
  loadConfig(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get<{ apiUrl: string }>('./assets/config.json').subscribe({
        next: (data) => {
          if (data && data.apiUrl) {
            this.apiUrl = data.apiUrl;
            console.log('Config cargada dinámicamente:', this.apiUrl);
          }
          resolve();
        },
        error: (err) => {
          console.warn('No se pudo cargar config.json, usando environment.ts', err);
          this.apiUrl = environment.apiUrl;
          resolve();
        }
      });
    });
  }*/

  /*
    loadConfig(): Promise<void> {
      return this.http.get('/config', { responseType: 'text' })
        .toPromise()
        .then(url => {
          this.apiUrl = url + '/api';
          console.log('URL del backend cargada:', this.apiUrl);
        })
        .catch(() => {
          this.apiUrl = environment.apiUrl; // fallback
        });
    }
        */

    // Método para obtener la API URL
  get apiUrl(): string {
    return this.config?.apiUrl || environment.apiUrl;
  }
}