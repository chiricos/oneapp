import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UiServiceService } from 'src/app/service/ui-service.service';
import { Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static:false}) slides: IonSlides;


  loginUser = {
    email: 'test2@gmail.com',
    password: '123456'
  };

  registerUser:Usuario = {
    email: '@gmail.com',
    password: '123456',
    nombre: 'test',
    avatar: 'av-1.png'
  };

  constructor(private usuarioService: UsuarioService,
              private navController: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
  }

  async login( fLogin: NgForm) {
    if ( fLogin.invalid) { return;}
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    if (valido) {
      //llevar home
      this.navController.navigateRoot('home', { animated: true});
    } else {
      //alerta
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }
    console.log(this.loginUser);
  }

  async registro( fRegistro: NgForm) {
    if (fRegistro.invalid) { return;}
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      //llevar home
      this.navController.navigateRoot('home', { animated: true});
    } else {
      //alerta
      this.uiService.alertaInformativa('Correo electronico existe.');
    }
    console.log(this.registerUser);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
