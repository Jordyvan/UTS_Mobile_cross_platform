import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoboDetailPageRoutingModule } from './mobo-detail-routing.module';

import { MoboDetailPage } from './mobo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoboDetailPageRoutingModule
  ],
  declarations: [MoboDetailPage]
})
export class MoboDetailPageModule {}
