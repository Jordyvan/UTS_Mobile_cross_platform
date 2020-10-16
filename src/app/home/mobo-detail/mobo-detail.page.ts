import { Component, OnInit } from '@angular/core';
import {MotherboardModel} from '../../model/motherboard.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../barang.service';

@Component({
  selector: 'app-mobo-detail',
  templateUrl: './mobo-detail.page.html',
  styleUrls: ['./mobo-detail.page.scss'],
})
export class MoboDetailPage implements OnInit {
  loadedMobo: MotherboardModel;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idMOBO')){ return; }
      const idMOBO = paramMap.get('idMOBO');
      this.loadedMobo = this.barangService.getMobo(idMOBO);
    });
  }

}
