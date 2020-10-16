import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoboEditPageRoutingModule } from './mobo-edit-routing.module';

import { MoboEditPage } from './mobo-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MoboEditPageRoutingModule
  ],
  declarations: [MoboEditPage]
})
export class MoboEditPageModule {}
