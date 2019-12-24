import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  prueba:string = "prueba";
  data:any[] = [];

  constructor(private http: HttpClient) { }

  private urlBilling: string = `https://tigoselfcareregional-stg-ni.tigocloud.net/api/v2.0/home/billing/billingaccounts/2870/balance`;

  getBalance() {
    return this.http.get(this.urlBilling);
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
