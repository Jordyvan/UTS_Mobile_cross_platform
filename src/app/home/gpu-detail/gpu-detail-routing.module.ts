import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpuDetailPage } from './gpu-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GpuDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpuDetailPageRoutingModule {}
