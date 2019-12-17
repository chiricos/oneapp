import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  prueba:string = "prueba";

  constructor(private http: HttpClient) { }

  private urlBilling: string = `https://tigoselfcareregional-stg-ni.tigocloud.net/api/v2.0/home/billing/billingaccount/2870/balance`;

  getBilling() {
    this.http.get(this.urlBilling).toPromise()
      .then(data => {
        return data.data;
      });
  }
}
