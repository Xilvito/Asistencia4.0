import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = {
    rut: "",
    password: ""
  }



  constructor(private router: Router, private storage: Storage, private autentificacion: AuthService ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  iniciarSesion()
  {

    let datosEnviar : NavigationExtras = {
      queryParams : {
        rutUsuario: this.formLogin.rut,
        edad:24
      
      }
    }

    this.autentificacion.login(this.formLogin.rut, this.formLogin.password);
    this.router.navigate(['/home'], datosEnviar);
    //guardar informaciuon en el storage
    this.storage.set("nombreUsuario","Diego")
    


  }

}
