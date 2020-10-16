import { Component, OnInit } from '@angular/core';
import {CpuModel} from '../../model/cpu.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../barang.service';
import {GpuModel} from '../../model/gpu.model';

@Component({
  selector: 'app-gpu-detail',
  templateUrl: './gpu-detail.page.html',
  styleUrls: ['./gpu-detail.page.scss'],
})
export class GpuDetailPage implements OnInit {
  loadedGPU: GpuModel;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idGPU')){ return; }
      const idGPU = paramMap.get('idGPU');
      this.loadedGPU = this.barangService.getGpu(idGPU);
    });
  }

}
