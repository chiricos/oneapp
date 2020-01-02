import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InpuntPageRoutingModule } from './inpunt-routing.module';

import { InpuntPage } from './inpunt.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InpuntPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InpuntPage]
})
export class InpuntPageModule {}
