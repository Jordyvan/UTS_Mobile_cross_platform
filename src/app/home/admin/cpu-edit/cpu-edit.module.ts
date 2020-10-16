import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpuEditPageRoutingModule } from './cpu-edit-routing.module';

import { CpuEditPage } from './cpu-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CpuEditPageRoutingModule
  ],
  declarations: [CpuEditPage]
})
export class CpuEditPageModule {}
