import { Component, OnInit } from '@angular/core';
import {CpuModel} from '../../model/cpu.model';
import {MotherboardModel} from '../../model/motherboard.model';
import {GpuModel} from '../../model/gpu.model';
import {RamModel} from '../../model/ram.model';
import {BarangService} from '../barang.service';
import {AlertController, IonItemSliding, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  cpus: CpuModel[];
  mobo: MotherboardModel[];
  gpu: GpuModel[];
  ram: RamModel[];
  constructor(
      private barangService: BarangService,
      private toastController: ToastController,
      private alertCtrl: AlertController,
      private nav: NavController,
  ) {}
  ionViewDidEnter(){
    this.cpus = this.barangService.getAllcpu();
    this.mobo = this.barangService.getAllmobo();
    this.gpu = this.barangService.getAllgpu();
    this.ram = this.barangService.getAllram();
  }
  ngOnInit(){
  }
  // edit
  editCPU(slc: IonItemSliding){
    slc.close();
  }
  editMobo( slm: IonItemSliding){
    slm.close();
  }
  editGpu(slg: IonItemSliding){
    slg.close();
  }
  editRam(slr: IonItemSliding){
    slr.close();

  }
  // delete
  deleteCPU(cp: string, slc: IonItemSliding){
    slc.close();
    this.barangService.deleteCpu(cp);
    this.toastCpu();
    this.ionViewDidEnter();
    // this.nav.setRoot(this.nav.getActive().component);
  }
  deleteMobo(mb: string, slm: IonItemSliding){
    slm.close();
    this.barangService.deleteMobo(mb);
    this.toastMobo();
    this.ionViewDidEnter();
  }
  deleteGpu(gp: string, slg: IonItemSliding){
    slg.close();
    this.barangService.deleteGpu(gp);
    this.toastGpu();
    this.ionViewDidEnter();
  }
  deleteRam(rm: string, slr: IonItemSliding){
    slr.close();
    this.barangService.deleteRam(rm);
    this.toastRam();
    this.ionViewDidEnter();
  }

  async alertCpu(cp: string, slc: IonItemSliding){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this CPU?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteCPU(cp, slc)
        }
      ]
    });
    await alert.present();
  }
  async toastCpu() {
    const toast = await this.toastController.create({
      message: 'CPU deleted.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async alertGpu(cp: string, slc: IonItemSliding){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this GPU?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteGpu(cp, slc)
        }
      ]
    });
    await alert.present();
  }
  async toastGpu() {
    const toast = await this.toastController.create({
      message: 'CPU deleted.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async alertRam(cp: string, slc: IonItemSliding){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this RAM?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteRam(cp, slc)
        }
      ]
    });
    await alert.present();
  }
  async toastRam() {
    const toast = await this.toastController.create({
      message: 'RAM deleted.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async alertMobo(cp: string, slc: IonItemSliding){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this Motherboard?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteMobo(cp, slc)
        }
      ]
    });
    await alert.present();
  }
  async toastMobo() {
    const toast = await this.toastController.create({
      message: 'Motherboard deleted.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

}
