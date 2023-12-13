import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class qrscanservice {

    constructor(private http: HttpClient) { }

    urlApi = "https://apimocha.com/registrapp/"

    obtenerAlumno(): Observable<any> {
        return this.http.get("https://apimocha.com/registrapp/alumnos").pipe()
    }

    obtenerClase(): Observable<any> {
        return this.http.get("https://apimocha.com/registrapp/Clase").pipe()
    }
}

