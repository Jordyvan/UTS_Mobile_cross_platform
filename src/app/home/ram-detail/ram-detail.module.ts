import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamDetailPageRoutingModule } from './ram-detail-routing.module';

import { RamDetailPage } from './ram-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamDetailPageRoutingModule
  ],
  declarations: [RamDetailPage]
})
export class RamDetailPageModule {}
