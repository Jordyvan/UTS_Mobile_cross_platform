import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpuDetailPageRoutingModule } from './gpu-detail-routing.module';

import { GpuDetailPage } from './gpu-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpuDetailPageRoutingModule
  ],
  declarations: [GpuDetailPage]
})
export class GpuDetailPageModule {}
