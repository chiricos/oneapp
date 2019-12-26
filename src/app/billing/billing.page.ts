import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  balance:any[] = [];

  constructor(private billingService:BillingService) {
  }

  ngOnInit() {
    this.billingService.getBalance()
      .subscribe( (result:any) => {
        this.balance = result;
      });
  }

  convertToArray(value) {
    if(typeof(value) !== 'undefined') {
      return this.billingService.getConvertToArray(value);
    }
  }

  imprimir(value) {
    console.log(value);
  }

}
