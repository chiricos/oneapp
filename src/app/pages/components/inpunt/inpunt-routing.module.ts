import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InpuntPage } from './inpunt.page';

const routes: Routes = [
  {
    path: '',
    component: InpuntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InpuntPageRoutingModule {}
