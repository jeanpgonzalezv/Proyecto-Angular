import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarberosPageRoutingModule } from './Barberos-routing.module';

import { BarberosPage } from './Barberos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarberosPageRoutingModule
  ],
  declarations: [BarberosPage]
})
export class BarberosPageModule {}
