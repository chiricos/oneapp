import { Component, OnInit } from '@angular/core';
import { BillingService } from '../service/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  private data;
  private config;

  constructor(private billingService:BillingService) {
  }

  ngOnInit() {
  }

  activar() {
    console.log(this.billingService.getBilling());
  }

}
