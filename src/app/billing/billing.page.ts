import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';
import { iBalance } from '../model/iBalance.interface';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  data:any[] = [];
  response:any[] = [];

  constructor(private billingService:BillingService) {
  }

  ngOnInit() {
    this.billingService.getBalance()
      .subscribe( (balance:any) => {
        this.data = balance;
        if (typeof balance === 'object') {
          for (let key of Object.keys(balance.data)) {
            var data = balance.data[key];
            //console.log(key);
            //console.log(data);
            this.response.push(data);
          }
        }
      });
     
  }

  convertArray(value) {
    let result:any[] = [];
    if(typeof(value) !== 'undefined'){
      Object.keys(value).map(function(valueIndex){
        let data = value[valueIndex];
        //console.log(data);
        result.push(data);
      });
    }
    return result;
  }

  imprimir(value) {
    console.log(value)
  }

}
