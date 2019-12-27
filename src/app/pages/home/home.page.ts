import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menu:Menu[] = [
    {
      icon: 'card',
      name: 'Saldo principal',
      redirectTo: '/saldo'
    },
    {
      icon: 'list-box',
      name: 'Facturas',
      redirectTo: '/historial'
    },
    {
      icon: 'chatbubbles',
      name: 'Mensajes',
      redirectTo: '/mensajes'
    },
    {
      icon: 'keypad',
      name: 'Componentes',
      redirectTo: '/componente/inicio'
    },
  ];

  constructor() {}

}

interface Menu{
  icon:string;
  name:string;
  redirectTo:string;
}
