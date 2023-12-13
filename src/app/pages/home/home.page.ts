import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AutentificacionService } from '../../auth/autentificacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  mensaje: string = "";
  episodios: any[] = [];
  mostrarEpisodios: boolean = false;
  seasonsData: Season[] = []; 
  showContent = false;
  qrscanservice: any;

  constructor( private rutaActiva : ActivatedRoute, private authService: AutentificacionService, private storage: Storage, private api: ApiService, private http: HttpClient, private router: Router) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['rutUsuario'])
      {
        this.mensaje = params['rutUsuario'];

      }
    })
  }



  ngOnInit() {
    this.getTemporada();
  }

  getTemporada() {
    this.http
      .get<Season[]>('https://imdb-top-100-movies1.p.rapidapi.com/', {
        headers: {
          'X-RapidAPI-Key': 'c3010bf009mshb906fc384da7979p1b8280jsnd9092884a7f0',
          'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
        },
      })
      .subscribe(
        (data: Season[]) => {
          this.seasonsData = data;
          this.showContent = true;
          console.log('Datos de temporada:', this.seasonsData);
        },
        (error) => {
          console.error('Error al obtener los datos de peliculas:', error);
        }
      );
  }

  cerrarLlamada() {
    // Aquí puedes "simular" cerrar la llamada ocultando los resultados
    this.showContent = false;
    // También podrías hacer otro tipo de limpieza o manejo adicional necesario
  }

  async verStorage()
  {
    let nombre = await this.storage.get("nombreUsuario")
    console.log("El nombre guardado es: "+ nombre)

  }

  async iniciarEscaneo() {
    const scannedText = await this.qrscanservice.startScan();
    if (scannedText) {
      this.mostrarAlerta(scannedText);
    }
  }
  mostrarAlerta(scannedText: any) {
    throw new Error('Method not implemented.');
  }

  async  mostrarEpisodiosDeOnePiece() {
    this.api.obtenerEpisodios().subscribe((respuesta: any) => {
      // Convertir el objeto a una matriz usando Object.values()
      console.log(Object.values(respuesta)[1])
      this.episodios = Object.values(respuesta);
      this.mostrarEpisodios = true;
      }
    );
  }


  cerrarSesion() {
    // Lógica para cerrar sesión utilizando tu servicio de autenticación
    this.authService.logout(); // Ejemplo de método logout en tu servicio

    // Redirige al usuario a la pantalla de inicio de sesión
    this.router.navigate(['/login']); // Reemplaza '/login' por la ruta real de tu pantalla de inicio de sesión
  }
}

interface Season {
  
  title: string;
  id:string
  images: string[];
}