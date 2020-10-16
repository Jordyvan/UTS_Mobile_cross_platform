import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpuDetailPageRoutingModule } from './cpu-detail-routing.module';

import { CpuDetailPage } from './cpu-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpuDetailPageRoutingModule
  ],
  declarations: [CpuDetailPage]
})
export class CpuDetailPageModule {}
