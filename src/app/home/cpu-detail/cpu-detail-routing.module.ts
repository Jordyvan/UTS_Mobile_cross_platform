import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpuDetailPage } from './cpu-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CpuDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpuDetailPageRoutingModule {}
