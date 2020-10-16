import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoboDetailPage } from './mobo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MoboDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoboDetailPageRoutingModule {}
