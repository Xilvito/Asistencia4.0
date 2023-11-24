import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = {
    rut:"",
    password:""
  }



  constructor(private router: Router, private storage: Storage, ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  iniciarSesion()
  {
    console.log("rut" + this.formLogin.rut)
    console.log("password"+ this.formLogin.password)

    let datosEnviar : NavigationExtras= {
      queryParams : {
        rutUsuario: this.formLogin.rut,
        edad: 24
      }
    }

    this.router.navigate(['/home'], datosEnviar);

  }
}