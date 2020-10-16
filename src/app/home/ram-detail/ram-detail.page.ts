import { Component, OnInit } from '@angular/core';
import {RamModel} from '../../model/ram.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../barang.service';

@Component({
  selector: 'app-ram-detail',
  templateUrl: './ram-detail.page.html',
  styleUrls: ['./ram-detail.page.scss'],
})
export class RamDetailPage implements OnInit {
  loadedRam: RamModel;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idRAM')){ return; }
      const idRAM = paramMap.get('idRAM');
      this.loadedRam = this.barangService.getRam(idRAM);
    });
  }

}
