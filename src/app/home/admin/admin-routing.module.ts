import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'cpu/:idCPU',
    loadChildren: () => import('./cpu-edit/cpu-edit.module').then( m => m.CpuEditPageModule)
  },
  {
    path: 'gpu/:idGPU',
    loadChildren: () => import('./gpu-edit/gpu-edit.module').then( m => m.GpuEditPageModule)
  },
  {
    path: 'mobo/:idMOBO',
    loadChildren: () => import('./mobo-edit/mobo-edit.module').then( m => m.MoboEditPageModule)
  },
  {
    path: 'ram/:idRAM',
    loadChildren: () => import('./ram-edit/ram-edit.module').then( m => m.RamEditPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
