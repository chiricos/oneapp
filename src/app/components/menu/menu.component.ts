import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOpts:Observable<Menu[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menuOpts = this.dataService.getMenuOpts();
  }

}
