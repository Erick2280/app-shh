import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Shh! Você pode andar em segurança agora!',
      duration: 2000
    });
    toast.present();
  }

  startService() {
    console.log("teste");
    this.presentToast()
  }

  getRoute(){
    console.log("teste");
  }
}
