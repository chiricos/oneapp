import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/service/billing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  invoices:any[] = [];
  headers:any[] = [];
  rows:any[] = [];
  pdf:PDF;
  index:number = 0;

  constructor(private billingService:BillingService) { }

  ngOnInit() {
    this.billingService.getInvoices()
      .subscribe( (result:any) => {
        this.pdf = result.config.actions.pdf_url;
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

  downloadPdf(index) {
    let invoiceId = index.invoiceId.value;
    let url = this.pdf.url;
    url = url.replace('{invoiceId}', invoiceId);
    window.open('https://tigoselfcareregional-stg-ni.tigocloud.net'+url,'_system', 'location=yes');
    return;
  }

}

export interface PDF {
  url:string;
}
