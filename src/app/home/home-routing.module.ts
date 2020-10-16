import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cpu/:idCPU',
    loadChildren: () => import('./cpu-detail/cpu-detail.module').then( m => m.CpuDetailPageModule)
  },
  {
    path: 'gpu/:idGPU',
    loadChildren: () => import('./gpu-detail/gpu-detail.module').then( m => m.GpuDetailPageModule)
  },
  {
    path: 'mobo/:idMOBO',
    loadChildren: () => import('./mobo-detail/mobo-detail.module').then( m => m.MoboDetailPageModule)
  },
  {
    path: 'ram/:idRAM',
    loadChildren: () => import('./ram-detail/ram-detail.module').then( m => m.RamDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
