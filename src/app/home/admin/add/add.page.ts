import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../barang.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CpuModel} from '../../../model/cpu.model';
import {GpuModel} from '../../../model/gpu.model';
import {RamModel} from '../../../model/ram.model';
import {MotherboardModel} from '../../../model/motherboard.model';
import {AlertController, IonItemSliding, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  form: FormGroup;
  cpu: CpuModel;
  gpu: GpuModel;
  ram: RamModel;
  mobo: MotherboardModel; // 1 cpu, 2 ram, 3mobo, 4 gpu
  modelselect: string;
  constructor(
      private barangService: BarangService,
      private nav: NavController,
      private alertCtrl: AlertController,
      private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.modelselect = 'a';
    this.form = new FormGroup({
        url: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        modelselected: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        merk: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        model: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        harga: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        stok: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        basec: new FormControl(null, {
          updateOn: 'blur',
        }),
        boostc: new FormControl(null, {
          updateOn: 'blur',
        }),
        core: new FormControl(null, {
          updateOn: 'blur',
        }),
        thread: new FormControl(null, {
          updateOn: 'blur',
        }),
        speed: new FormControl(null, {
          updateOn: 'blur',
        }),
        size: new FormControl(null, {
          updateOn: 'blur',
        }),
        chipset: new FormControl(null, {
          updateOn: 'blur',
        }),
        recom: new FormControl(null, {
          updateOn: 'blur',
        }),
      });
  }

  add(){
    if (this.modelselect === 'cpu'){
      this.cpu = {
        idCPU: this.barangService.lastIDCPU(),
        merkCPU: this.form.get('merk').value,
        modelCPU: this.form.get('model').value,
        baseclockCPU: this.form.get('basec').value,
        boostclockCPU: this.form.get('boostc').value,
        imgCPU: this.form.get('url').value,
        coreCPU: this.form.get('core').value,
        threadCPU: this.form.get('thread').value,
        hargaCPU: this.form.get('harga').value,
        stokCPU: this.form.get('stok').value,
      };
      this.barangService.newCpu(this.cpu);
    }else if (this.modelselect === 'mobo'){
      this.mobo = {
        idMOBO: this.barangService.lastIDMobo(),
        merkMOBO: this.form.get('merk').value,
        modelMOBO: this.form.get('model').value,
        chipsetMOBO: this.form.get('chipset').value,
        imgMOBO: this.form.get('url').value,
        recomMOBO: this.form.get('recom').value,
        hargaMOBO: this.form.get('harga').value,
        stokMOBO: this.form.get('stok').value,
      };
      this.barangService.newMobo(this.mobo);
    }else if (this.modelselect === 'ram'){
      this.ram = {
        idRAM: this.barangService.lastIDRam(),
        merkRAM: this.form.get('merk').value,
        modelRAM: this.form.get('model').value,
        speedRAM: this.form.get('speed').value,
        imgRAM: this.form.get('url').value,
        ukuranRAM: this.form.get('size').value,
        hargaRAM: this.form.get('harga').value,
        stokRAM: this.form.get('stok').value,
      };
      this.barangService.newRam(this.ram);
    }else {
      this.gpu = {
        idGPU: this.barangService.lastIDGPU(),
        merkGPU: this.form.get('merk').value,
        modelGPU: this.form.get('model').value,
        imgGPU: this.form.get('url').value,
        hargaGPU: this.form.get('harga').value,
        stokGPU: this.form.get('stok').value,
      };
      this.barangService.newGpu(this.gpu);
    }
    this.nav.navigateBack('/admin');
    this.toast();
  }

  async alertAdd(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to add this Item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.add()
        }
      ]
    });
    await alert.present();
  }

  async toast() {
    const toast = await this.toastController.create({
      message: 'Item Added.',
      color: 'primary',
      duration: 2000
    });
    toast.present();
  }

}
