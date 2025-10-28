import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

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
}