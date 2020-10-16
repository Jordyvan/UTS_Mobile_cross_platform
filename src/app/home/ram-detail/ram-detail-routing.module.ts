import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamDetailPage } from './ram-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RamDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamDetailPageRoutingModule {}
