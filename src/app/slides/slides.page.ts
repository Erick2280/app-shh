import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private navController: NavController) { }

  goToHomePage(){
    let env = this;
    env.navController.navigateForward('home');
  }
}
