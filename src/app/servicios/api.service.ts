// En tu servicio api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz que representa la estructura de un episodio de One Piece
interface EpisodioOnePiece {
  title: string;
  episode: number;
  // Agrega más propiedades según la estructura de los datos
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://one-piece-episodes.p.rapidapi.com/one_piece/seasons';
  private rapidApiKey = '95d6dadc0amshfbfd14d50c65499p169205jsnd1b7d7d1ef0e';
  private rapidApiHost = 'one-piece-episodes.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  obtenerEpisodios(): Observable<EpisodioOnePiece[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': this.rapidApiHost
    });

    const params = new HttpParams().set('language', 'es');

    return this.http.get<EpisodioOnePiece[]>(this.apiUrl, { headers, params });
  }
}
