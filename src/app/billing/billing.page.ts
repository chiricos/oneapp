import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  balance:any[] = [];
  invoices:any[] = [];

  constructor(private billingService:BillingService) {
  }

  ngOnInit() {
    this.billingService.getBalance()
      .subscribe( (result:any) => {
        this.balance = result;
      });

    this.billingService.getInvoices()
      .subscribe( (result:any) => {
        this.invoices = result;
      });
     
  }

  convertArray(value) {
    let result:any[] = [];
    if(typeof(value) !== 'undefined'){
      Object.keys(value).map(function(valueIndex){
        let data = value[valueIndex];
        result.push(data);
      });
    }
    return result;
  }

  imprimir(value) {
    console.log(value);
  }

}
