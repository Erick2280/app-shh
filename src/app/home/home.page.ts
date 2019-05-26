import { Component } from '@angular/core';
import { FurtiveService } from '../furtive.service';
import { ToastController, NavController } from '@ionic/angular';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private furtiveService: FurtiveService,
    public toastController: ToastController, private navController: NavController,
    private notificationService: NotificationService) {}


  furtiveStatus:boolean = false;

  ionViewDidEnter() {
    setTimeout(()=> {
      this.notify();
    }, 5000);
  }

  notify() {
    this.notificationService.sendNotification();
  }

  async enteredFurtiveMode() {
    const toast = await this.toastController.create({
      message: 'Modo Shh! ativado. Você pode desligar a tela do celular com segurança.',
      duration: 4000
    });

    toast.present();
  }

  test() {

    setTimeout(()=> {
      this.furtiveService.vibrateLeft()
    }, 4000);

    setTimeout(()=> {
      this.furtiveService.vibrateRight()
    }, 9000);

    setTimeout(()=> {
      this.furtiveService.vibrateArrival()
    }, 15000);

  }

  toggleService() {
    if (!this.furtiveStatus) {
      this.startService();
    } else {
      this.stopService();
    }
  }

  startService() {
    this.furtiveStatus = true;
    this.furtiveService.turnFurtiveModeOn();
    this.enteredFurtiveMode();
    this.test();
  }

  stopService() {
    this.furtiveStatus = false;
    this.furtiveService.turnFurtiveModeOff();
  }

  getRoute(){
    let env = this;
    env.navController.navigateForward('map');
  }
}
