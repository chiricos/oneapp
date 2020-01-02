import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Menu } from 'src/app/interfaces/interfaces';

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

  constructor(private menuController: MenuController) {}

  toggleMenu() {
    this.menuController.toggle();
  }

}