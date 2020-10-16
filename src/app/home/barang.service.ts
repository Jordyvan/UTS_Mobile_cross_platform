import { Injectable } from '@angular/core';
import {CpuModel} from '../model/cpu.model';
import {MotherboardModel} from '../model/motherboard.model';
import {RamModel} from '../model/ram.model';
import {GpuModel} from '../model/gpu.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private cpus: CpuModel[] = [
    {
      idCPU: 'c1',
      merkCPU: 'Amd',
      modelCPU: 'Ryzen 7 3950X',
      baseclockCPU: 3.5,
      boostclockCPU: 4.7,
      imgCPU: 'https://images-na.ssl-images-amazon.com/images/I/7122uH4-hfL._AC_SL1121_.jpg',
      coreCPU: 16,
      threadCPU: 32,
      hargaCPU: 12599000,
      stokCPU: 4,

    },
    {
      idCPU: 'c2',
      merkCPU: 'Intel',
      modelCPU: 'I7 8700K',
      baseclockCPU: 3.7,
      boostclockCPU: 4.7,
      imgCPU: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/7/9126088/9126088_a438b0ef-db80-4cdd-aee7-c9dafecc880f_640_480.jpg',
      coreCPU: 6,
      threadCPU: 12,
      hargaCPU: 5633000,
      stokCPU: 1,

    },
  ];

  private mobos: MotherboardModel[] = [
    {
      idMOBO: 'm1',
      merkMOBO: 'Asus',
      modelMOBO: 'Zenith II Extreme',
      chipsetMOBO: 'AMD TRX40',
      imgMOBO: 'https://cf.shopee.co.id/file/5b348fce721a37480f4dfe3451e4c8ac',
      recomMOBO: 'AMD',
      hargaMOBO: 14750000,
      stokMOBO: 1,
    },
    {
      idMOBO: 'm2',
      merkMOBO: 'MSI',
      modelMOBO: 'MPG Z390 Gaming Pro Carbon',
      chipsetMOBO: 'Intel® Z390',
      imgMOBO: 'https://www.bhphotovideo.com/images/images2500x2500/msi_mpg_z390_gaming_pro_1437832.jpg',
      recomMOBO: 'Intel',
      hargaMOBO: 4283000,
      stokMOBO: 3,
    },
  ];

  private rams: RamModel[] = [
    {
      idRAM: 'r1',
      merkRAM: 'Geil',
      modelRAM: 'DDR4 AMD EDITION EVO POTENZA',
      speedRAM: 2666,
      imgRAM: 'https://www.vortez.net/articles_file/37361_geil_evo_x_rgb_intro.jpg',
      ukuranRAM: 16,
      hargaRAM: 850000,
      stokRAM: 4,
    },
    {
      idRAM: 'r2',
      merkRAM: 'Corsair',
      modelRAM: 'DDR4 Dominator Platinum RGB',
      speedRAM: 3600,
      imgRAM: 'https://cf.shopee.co.id/file/231896628ec21d408335222c88ebce7b',
      ukuranRAM: 64,
      hargaRAM: 11399000,
      stokRAM: 1,
    },
  ];

  private gpus: GpuModel[] = [
    {
      idGPU: 'g1',
      merkGPU: 'Galax',
      modelGPU: 'Geforce RTX 3080 10GB DDR6X SG',
      imgGPU: 'https://www.galax.com/media/catalog/product/cache/14/image/500x500/9df78eab33525d08d6e5fb8d27136e95/8/0/80-box_p.png',
      hargaGPU: 12800000,
      stokGPU: 2,
    },
    {
      idGPU: 'g2',
      merkGPU: 'Leadtek',
      modelGPU: 'Quadro RTX 8000 - 48GB DDR6 384 Bit ',
      imgGPU: 'https://www.nvidia.com/content/dam/en-zz/Solutions/design-visualization/quadro/rtx-8000/quadro-rtx-8000-front-625-u@2x.jpg',
      hargaGPU: 120235000,
      stokGPU: 0,
    },
  ];

  constructor() { }

  getAllcpu(){
    return [...this.cpus];
  }

  getAllgpu(){
    return [...this.gpus];
  }

  getAllmobo(){
    return [...this.mobos];
  }

  getAllram(){
    return [...this.rams];
  }

  getCpu(idCpu: string){
    return {...this.cpus.find(cpus => {
        return cpus.idCPU === idCpu;
      })};
  }

  getGpu(idGpu: string){
    return {...this.gpus.find(gpus => {
        return gpus.idGPU === idGpu;
      })};
  }

  getMobo(idMobo: string){
    return {...this.mobos.find(mobos => {
        return mobos.idMOBO === idMobo;
      })};
  }

  getRam(idRam: string){
    return {...this.rams.find(rams => {
        return rams.idRAM === idRam;
      })};
  }

  updateCpu(cpu: CpuModel){
    this.cpus.find(x => x.idCPU === cpu.idCPU).merkCPU = cpu.merkCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).modelCPU = cpu.modelCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).imgCPU = cpu.imgCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).hargaCPU = cpu.hargaCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).stokCPU = cpu.stokCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).baseclockCPU = cpu.baseclockCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).boostclockCPU = cpu.boostclockCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).coreCPU = cpu.coreCPU;
    this.cpus.find(x => x.idCPU === cpu.idCPU).threadCPU = cpu.threadCPU;
  }

  updateMobo(mobo: MotherboardModel){
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).merkMOBO = mobo.merkMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).modelMOBO = mobo.modelMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).imgMOBO = mobo.imgMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).hargaMOBO = mobo.hargaMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).stokMOBO = mobo.stokMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).recomMOBO = mobo.recomMOBO;
    this.mobos.find(x => x.idMOBO === mobo.idMOBO).chipsetMOBO = mobo.chipsetMOBO;
  }

  updateGPU(gp: GpuModel){
    this.gpus.find(x => x.idGPU === gp.idGPU).merkGPU = gp.merkGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).modelGPU = gp.modelGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).imgGPU = gp.imgGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).hargaGPU = gp.hargaGPU;
    this.gpus.find(x => x.idGPU === gp.idGPU).stokGPU = gp.stokGPU;
  }

  updateRam(rm: RamModel){
    this.rams.find(x => x.idRAM === rm.idRAM).merkRAM = rm.merkRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).modelRAM = rm.modelRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).imgRAM = rm.imgRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).hargaRAM = rm.hargaRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).stokRAM = rm.stokRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).speedRAM = rm.speedRAM;
    this.rams.find(x => x.idRAM === rm.idRAM).ukuranRAM = rm.ukuranRAM;
  }

  deleteCpu(Id: string){
    this.cpus = this.cpus.filter(x => {
      return x.idCPU !== Id;
    });
  }

  deleteGpu(Id: string){
    this.gpus = this.gpus.filter(x => {
      return x.idGPU !== Id;
    });
  }

  deleteMobo(Id: string){
    this.mobos = this.mobos.filter(x => {
      return x.idMOBO !== Id;
    });
  }

  deleteRam(Id: string){
    this.rams = this.rams.filter(x => {
      return x.idRAM !== Id;
    });
  }

  newCpu(cp: CpuModel){
    this.cpus.push(cp);
  }

  newGpu(gp: GpuModel){
    this.gpus.push(gp);
  }

  newRam(rm: RamModel){
    this.rams.push(rm);
  }

  newMobo(mb: MotherboardModel){
    this.mobos.push(mb);
  }

  lastIDCPU(){
    return 'C' + (this.cpus.length + 3);
  }

  lastIDGPU(){
    return 'G' + (this.gpus.length + 3);
  }

  lastIDRam(){
    return 'R' + (this.rams.length + 3);
  }

  lastIDMobo(){
    return 'M' + (this.mobos.length + 3);
  }

}
