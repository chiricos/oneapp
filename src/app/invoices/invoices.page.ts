import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  invoices:any[] = [];
  headers:any[] = [];
  rows:any[] = [];

  constructor(private billingService:BillingService) { }

  ngOnInit() {
    this.billingService.getInvoices()
      .subscribe( (result:any) => {
        this.invoices = this.convertToArray(result.data);
        this.headers = this.convertToArray(this.invoices[0].headers);
        for (let i=0; i<this.invoices[0].rows.length; i++)
        this.rows.push(i);
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
