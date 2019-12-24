import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  //messages:any[] = [];
  messages:any;

  constructor(private billingService:BillingService) { }

  ngOnInit() {
    this.messages = this.billingService.getMessages();
    /*this.billingService.getBilling()
      .subscribe(posts => {
        this.messages = posts
        console.log(posts)
      });*/
  }

}
