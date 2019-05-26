import { Component } from '@angular/core';
import { FurtiveService } from '../furtive.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private furtiveService: FurtiveService) {}

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
    this.furtiveService.turnFurtiveModeOn()
  }

  furOFF() {
    this.furtiveService.turnFurtiveModeOff()
  }

  test() {

    setTimeout(()=> {
      this.vibR()
    }, 3000);

  }


}
