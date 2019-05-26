import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Backlight } from '@ionic-native/backlight/ngx';

import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';



const firebaseConfig = {
  apiKey: "AIzaSyAdzbG_Hjl3hIEd8Dvgt-kIP9ZO6KgpTCg",
  authDomain: "project-alana.firebaseapp.com",
  databaseURL: "https://project-alana.firebaseio.com",
  projectId: "project-alana",
  storageBucket: "project-alana.appspot.com",
  messagingSenderId: "2691348691",
  appId: "1:2691348691:web:01e5a9067fed72db"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    InAppBrowser,
    Vibration,
    BackgroundMode,
    AudioManagement,
    LocalNotifications,
    Backlight,
    Brightness,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
