import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FurtiveService } from '../furtive.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private navController: NavController, private furtiveService: FurtiveService) { }

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

  goToHomePage(){
    let env = this;
    env.navController.navigateForward('home');
  }
}
