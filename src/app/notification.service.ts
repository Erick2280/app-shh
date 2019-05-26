import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private localNotifications: LocalNotifications) { }

  public sendNotification() {
    this.localNotifications.schedule({
      title: 'Local de risco próximo',
      text: 'Você está próxima à Av. José das Couves, local considerado inseguro. Você pode tomar medidas de precaução adicional.',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
   });
  }


}
