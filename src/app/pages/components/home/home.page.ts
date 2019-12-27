import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menu:Menu[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirectTo: '/componente/action-sheet'
    },
    {
      icon: 'alarm',
      name: 'Alert',
      redirectTo: '/componente/alert'
    },
    {
      icon: 'contact',
      name: 'Avatar',
      redirectTo: '/componente/avatar'
    },
    {
      icon: 'keypad',
      name: 'Componentes',
      redirectTo: '/componente/inicio'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Menu{
  icon:string;
  name:string;
  redirectTo:string;
}
