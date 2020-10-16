import { Component, OnInit } from '@angular/core';
import {MotherboardModel} from '../../../model/motherboard.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../barang.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-mobo-edit',
  templateUrl: './mobo-edit.page.html',
  styleUrls: ['./mobo-edit.page.scss'],
})
export class MoboEditPage implements OnInit {
  loadedMobo: MotherboardModel;
  formMobo: MotherboardModel;
  form: FormGroup;
  constructor(
      private activRoute: ActivatedRoute,
      private barangService: BarangService,
      private nav: NavController,
      private toastController: ToastController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idMOBO')){ return; }
      const idMOBO = paramMap.get('idMOBO');
      this.loadedMobo = this.barangService.getMobo(idMOBO);
      this.formMobo = this.loadedMobo;
    });
    this.form = new FormGroup({
      url: new FormControl(this.loadedMobo.imgMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.loadedMobo.merkMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedMobo.modelMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedMobo.hargaMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedMobo.stokMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(this.loadedMobo.chipsetMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      recom: new FormControl(this.loadedMobo.recomMOBO, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  submitEdit(){
    this.formMobo.merkMOBO = this.form.get('merk').value;
    this.formMobo.modelMOBO = this.form.get('model').value;
    this.formMobo.imgMOBO = this.form.get('url').value;
    this.formMobo.hargaMOBO = this.form.get('harga').value;
    this.formMobo.stokMOBO = this.form.get('stok').value;
    this.formMobo.chipsetMOBO = this.form.get('chipset').value;
    this.formMobo.recomMOBO = this.form.get('recom').value;
    this.barangService.updateMobo(this.formMobo);
    this.nav.navigateBack('/admin');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Motherboard has been Updated',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }

  async AlertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to edit this Motherboard?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.submitEdit()
        }
      ]
    });
    await alert.present();
  }

}
