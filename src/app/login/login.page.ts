import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private afAuth: AngularFireAuth, private googlePlus: GooglePlus, public platform: Platform, private navController: NavController) { }

  ngOnInit() {
  }

  doGoogleLogin() {
    let env = this;
    env.navController.navigateForward('slides');
    // if (this.platform.is('cordova')) {
    //   this.nativeGoogleLogin();
    // } else {
    //   this.webGoogleLogin();
    // }
  }

  async webGoogleLogin(): Promise<any> {
    
    try {
      let env = this;
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      console.log('CREDENTIAL', credential)

      if (credential) {
        env.navController.navigateForward('slides');
      }

    } catch (err) {
      console.log(err)
    }

  }

  async nativeGoogleLogin(): Promise<any> {
    try {

      const gplusUser = await this.googlePlus.login({
        'webClientId': '2691348691-php91tla3o10c7cb3cng1qaa2l62fp5h.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

    } catch (err) {
      console.log(err)
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
