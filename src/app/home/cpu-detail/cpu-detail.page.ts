import { Component, OnInit } from '@angular/core';
import {CpuModel} from '../../model/cpu.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../barang.service';

@Component({
  selector: 'app-cpu-detail',
  templateUrl: './cpu-detail.page.html',
  styleUrls: ['./cpu-detail.page.scss'],
})
export class CpuDetailPage implements OnInit {
  loadedCpu: CpuModel;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idCPU')){ return; }
      const idCPU = paramMap.get('idCPU');
      this.loadedCpu = this.barangService.getCpu(idCPU);
    });
  }

}
