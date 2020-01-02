import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesPipe } from './invoices.pipe';



@NgModule({
  declarations: [
    InvoicesPipe
  ],
  exports: [
    InvoicesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
