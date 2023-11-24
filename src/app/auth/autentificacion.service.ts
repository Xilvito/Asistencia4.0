import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  constructor(private router: Router) { }

  logout() {
    // Realizar aquí la lógica para cerrar la sesión del usuario

    // Ejemplo: Limpiar el token de autenticación del almacenamiento local
    localStorage.removeItem('token');

    // Redirigir al usuario a la pantalla de inicio de sesión después de cerrar sesión
    this.router.navigate(['/login']);
  }
}
