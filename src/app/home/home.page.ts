import { Component, OnInit } from '@angular/core';
import {BarangService} from './barang.service';
import {CpuModel} from '../model/cpu.model';
import {MotherboardModel} from '../model/motherboard.model';
import {GpuModel} from '../model/gpu.model';
import {RamModel} from '../model/ram.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  cpus: CpuModel[];
  mobo: MotherboardModel[];
  gpu: GpuModel[];
  ram: RamModel[];
  mode: string;
  constructor(
      private barangService: BarangService
  ) {}

  ngOnInit(){
    this.mode = 'list';
    this.cpus = this.barangService.getAllcpu().filter(s => s.stokCPU !== 0);
    this.mobo = this.barangService.getAllmobo().filter(s => s.stokMOBO !== 0);
    this.gpu = this.barangService.getAllgpu().filter(s => s.stokGPU !== 0);
    this.ram = this.barangService.getAllram().filter(s => s.stokRAM !== 0);
  }

  switch(){
    if(this.mode === 'list'){
      this.mode = 'grid';
    }else {
      this.mode = 'list';
    }
  }

}
