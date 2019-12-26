import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  balance:any[] = [];
  config:any[] = [];

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
    if (typeof(value['pdf_url']) !== 'undefined'){
      console.log(value['pdf_url'].url);
    }
  }

  getUrl(value) {
    if (typeof(value['pdf_url']) !== 'undefined'){
      window.open('https://tigoselfcareregional-stg-ni.tigocloud.net'+value['pdf_url'].url,'_system', 'location=yes');
      return value['pdf_url'].url;
    }
  }

}
