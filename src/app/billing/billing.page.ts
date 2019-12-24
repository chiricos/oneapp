import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  data:any[] = [];

  constructor(private billingService:BillingService) {
  }

  ngOnInit() {
    console.log('init')
    this.data = this.billingService.getBalance()
      .subscribe( data => {
        console.log('subscribe');
        console.log(data.data.dueAmount.label);
        this.data = data.data.dueAmount.label;
      });
      console.log('ultimo init');
  }

}
