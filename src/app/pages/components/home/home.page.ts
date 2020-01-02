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
      icon: 'logo-buffer',
      name: 'Botones',
      redirectTo: '/componente/buttons'
    },
    {
      icon: 'browsers',
      name: 'Cards',
      redirectTo: '/componente/card'
    },
    {
      icon: 'list',
      name: 'Checkboxs',
      redirectTo: '/componente/check'
    },
    {
      icon: 'clock',
      name: 'Date time',
      redirectTo: '/componente/date-time'
    },
    {
      icon: 'add-circle',
      name: 'Fab',
      redirectTo: '/componente/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirectTo: '/componente/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite scroll',
      redirectTo: '/componente/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Inputs',
      redirectTo: '/componente/inpunt'
    },
    {
      icon: 'list',
      name: 'List - Slinding',
      redirectTo: '/componente/list'
    },
    {
      icon: 'reorder',
      name: 'List - Reorder',
      redirectTo: '/componente/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/componente/loading'
    }
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
