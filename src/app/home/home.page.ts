import { Component } from '@angular/core';
import { FurtiveService } from '../furtive.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private furtiveService: FurtiveService,
    public toastController: ToastController, private navController: NavController) {}

  vibL() {
    this.furtiveService.vibrateLeft();
  }

  vibR() {
    this.furtiveService.vibrateRight();
  }

  vibS() {
    this.furtiveService.vibrateStraight();
  }

  vibARRIVAL() {
    this.furtiveService.vibrateArrival();
  }

  vibAR() {
    this.furtiveService.vibrateActionRequired()
  }

  furON() {
    this.furtiveService.turnFurtiveModeOn();
  }

  async enteredFurtiveMode() {
    const toast = await this.toastController.create({
      message: 'Modo Shh! ativado. Você pode desligar a tela do celular com segurança.',
      duration: 4000
    });

    toast.present();
  }

  furOFF() {
    this.furtiveService.turnFurtiveModeOff()
  }

  test() {

    setTimeout(()=> {
      this.vibR()
    }, 3000);

  }


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
    let env = this;
    env.navController.navigateForward('map');
  }
}
