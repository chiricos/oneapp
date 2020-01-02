import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpunt',
  templateUrl: './inpunt.page.html',
  styleUrls: ['./inpunt.page.scss'],
})
export class InpuntPage implements OnInit {

  nombre: string;

  usuario = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.usuario);
  }

}
