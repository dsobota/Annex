import { Component, ViewChild} from '@angular/core';
import { IonMenuToggle, IonList,IonHeader, IonMenuButton, IonButtons, IonToolbar, IonTitle, IonContent, IonMenu,  IonLabel, IonIcon, IonItem, IonBackdrop, IonCheckbox, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRippleEffect, IonListHeader, IonAlert } from '@ionic/angular/standalone';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import * as icons from 'ionicons/icons';
import { PushNotifications } from '@capacitor/push-notifications';
import { PushMessageComponent } from './pushmessage/pushmessage.component';
import { PushMessage } from './pushmessage';
import { PushComponent } from "./push/push.component";
import { Capacitor } from '@capacitor/core';
import { IosSilentNotifications } from '@aparajita/capacitor-ios-silent-notifications'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonAlert, IonListHeader, IonRippleEffect, PushMessageComponent, CommonModule, IonCard, IonButton, IonCheckbox, IonBackdrop, IonMenuToggle, IonItem, IonIcon, IonList, IonLabel, RouterOutlet, IonMenuButton, IonButtons, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, RouterOutlet, RouterLink, IonCardHeader, IonCardTitle, IonCardSubtitle, PushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Annex';
  hasMessage = false;
  @ViewChild('pushalert') pushalert: any;


  addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      console.log('Registration token: '  + token.value);
    });
  
    await PushNotifications.addListener('registrationError', err => {
      alert('Error registering with Push notification service: ' + err.error);
    });
  
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      const receivedDT = new Date();
      let title = "";
      let message = "";
  
      const platform = Capacitor.getPlatform();

      if(platform === "android"){
        if(notification?.data){
          console.log(JSON.stringify(notification));
          title = notification?.data["pinpoint.notification.title"] as string;
           message = notification?.data["pinpoint.notification.body"] as string
  
          this.addPushMessage({
            title: title,
            datetime: receivedDT,
            message: message,
            silent: false
          })
   
      
        }
      }else if (platform === "ios"){
        title = notification?.title as string;
        message = notification?.body as string;
      }

      this.pushalert.header = title;
      this.pushalert.subHeader = receivedDT.toLocaleString();
      this.pushalert.message = message;
      this.pushalert.present();

     
    });
  
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });

    if (Capacitor.getPlatform() === 'ios') {
      await IosSilentNotifications.addListener(
        'onSilentNotification',
        (notification: Notification) => {
          console.log("We got an iOS Silent Notification " + JSON.stringify(notification));
        },
      )
    }

  }

  allPushes = [{
    title: "test message",
    message: "test",
    datetime: new Date(),
    silent: false
  }] ;

  addPushMessage(item: PushMessage) {  
    this.allPushes.unshift(item);
  }
  remove(item: PushMessage) {
    this.allPushes.splice(this.allPushes.indexOf(item), 1);
  }

   constructor(){
    addIcons({ ...icons });
    this.addListeners();
  }


}
