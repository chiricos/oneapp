import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { iBalance } from '../model/iBalance.interface';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  billingaccounts:number = 2870;
  private urlBilling: string = `https://tigoselfcareregional-stg-ni.tigocloud.net/api/v2.0/home/billing/billingaccounts`;

  constructor(private http: HttpClient) { }

  getBalance() {
    return this.http.get(`${this.urlBilling}/${this.billingaccounts}/balance`);
  }

  getMessages() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .pipe( tap( console.log ) );
      /*.pipe(
        tap( posts => {
          console.log(posts);
        })
      );*/
  }
}
