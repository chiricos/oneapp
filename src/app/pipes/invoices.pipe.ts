import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoices'
})
export class InvoicesPipe implements PipeTransform {

  transform(show: boolean): boolean {
    if (show) {
      return true;
    }
    return false;
  }

}
