import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista',{static:false}) lista: IonList;

  users: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user) {
    console.log('favoite', user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.lista.closeSlidingItems();
  }

  unread(user) {
    console.log('borrar', user);
    this.lista.closeSlidingItems();
  }

}
