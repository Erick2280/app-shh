import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { Storage } from '@ionic/storage';
import { Backlight } from '@ionic-native/backlight/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';


@Injectable({
  providedIn: 'root'
})
export class FurtiveService {

  constructor(private vibration: Vibration,
    private backgroundMode: BackgroundMode,
    private localNotifications: LocalNotifications,
    public audioman: AudioManagement,
    private storage: Storage,
    private backlight: Backlight,
    private brightness: Brightness) { }

    
  public turnFurtiveModeOff() {
    this.audioman.setAudioMode(AudioManagement.AudioMode.NORMAL)
    .then(() => {
     console.log('Device audio mode is now NORMAL');
    })
    .catch((reason) => {
      console.log(reason);
    });

    this.backlight.on().then(() => console.log('backlight on'));

    this.storage.get('musicVolume').then((volumeLevel) => {
      this.audioman.setVolume(AudioManagement.VolumeType.MUSIC, volumeLevel);
    })
    this.storage.get('brightnessLevel').then((brightnessLevel) => {
      this.brightness.setBrightness(brightnessLevel);
    })

    this.backgroundMode.disable();

    // tirar notif

  }

  public turnFurtiveModeOn() {
     this.audioman.getVolume(AudioManagement.VolumeType.MUSIC).then((volumeLevel) => {
       this.storage.set('musicVolume', volumeLevel.volume);
       }
     )

    this.audioman.setAudioMode(AudioManagement.AudioMode.VIBRATE)
    .then(() => {
     console.log('Device audio mode is now VIBRATE');
    })
    .catch((reason) => {
      console.log(reason);
    });

    this.audioman.setVolume(AudioManagement.VolumeType.MUSIC, 0);
    this.backgroundMode.enable();
    this.brightness.getBrightness().then((brightnessLevel) => {
      this.storage.set('brightnessLevel', brightnessLevel)
      this.brightness.setBrightness(0);
    })
    this.backlight.off().then(() => console.log('backlight off'));

    // lançar notificação
    // luz

  }

  public vibrateLeft() {
    this.vibration.vibrate([1000,500,500]);
  }

  public vibrateRight() {
    this.vibration.vibrate([500,500,1000]);
  }

  public vibrateStraight() {
    this.vibration.vibrate(3000);
  }

  public vibrateArrival() {
    this.vibration.vibrate([1000,300,1000,300,1000,300,1000,300,1000,300,1000]);
  }

  public vibrateActionRequired() {
    this.vibration.vibrate([500,200,500,200,500,200]);
  }



}
