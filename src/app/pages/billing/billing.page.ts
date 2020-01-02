import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/service/billing.service';

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
        if (typeof(result.config.actions) !== 'undefined'){
          this.config = this.convertToArray(result.config.actions); 
        }
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

  getUrl(value) {
    if (typeof(value['pdf_url']) !== 'undefined'){
      window.open('https://tigoselfcareregional-stg-ni.tigocloud.net'+value['pdf_url'].url,'_system', 'location=yes');
      return value['pdf_url'].url;
    }
  }

}
