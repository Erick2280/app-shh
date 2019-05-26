import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FurtiveService {

  constructor(private vibration: Vibration,
    private backgroundMode: BackgroundMode,
    private localNotifications: LocalNotifications,
    public audioman: AudioManagement,
    private storage: Storage) { }

    
  public turnFurtiveModeOff() {
    this.audioman.setAudioMode(AudioManagement.AudioMode.NORMAL)
    .then(() => {
     console.log('Device audio mode is now NORMAL');
    })
    .catch((reason) => {
      console.log(reason);
    });

    // restaurar volume de musica
    // desativar bg
    // tirar notif

  }

  public turnFurtiveModeOn() {
     this.audioman.getVolume(AudioManagement.VolumeType.MUSIC).then((volumeLevel) => {
       this.storage.set('musicVolume', volumeLevel.volume);
       }
     )

    this.audioman.setAudioMode(AudioManagement.AudioMode.SILENT)
    .then(() => {
     console.log('Device audio mode is now SILENT');
    })
    .catch((reason) => {
      console.log(reason);
    });

    this.audioman.setVolume(AudioManagement.VolumeType.MUSIC, 0);

    // lançar notificação
    // ativar bg

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
