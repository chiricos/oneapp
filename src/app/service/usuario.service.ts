import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario = {}; 

  constructor(private http: HttpClient,
              private storage: Storage,
              private navController: NavController) { }

  login(email: string, password: string) {

    const data = { email, password};

    return new Promise( resolve => {
      this.http.post(`${ URL }/user/login`, data)
      .subscribe( resp => {
        console.log(resp);
        if (resp['ok']) {
          this.guardarToken(resp['token']);
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
    
  }

  registro(usuario: Usuario) {

    return new Promise( resolve => {
      this.http.post(`${ URL }/user/create`, usuario)
      .subscribe( resp => {
        console.log(resp);
        if (resp['ok']) {
          this.guardarToken(resp['token']);
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });

  }

  async guardarToken( token: string) {
    this.token = token;
    this.storage.set('token', token);
  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean>{
    
    this.cargarToken();

    if (!this.token) {
      this.navController.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      })
      console.log(headers);

      this.http.get(`${ URL }/user`, {headers})
      .subscribe( resp => {
        console.log(resp);
        if (resp['ok']) {
          this.usuario = resp['usuario'];
          resolve(true);
        } else {
          resolve(false);
        }
      });

    });
  }

}
