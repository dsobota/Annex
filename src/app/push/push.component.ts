import { Component, Input, Output, EventEmitter,ViewChild } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonListHeader, IonToggle, IonContent } from "@ionic/angular/standalone";
import  {PushNotifications} from '@capacitor/push-notifications'
@Component({
  selector: 'app-push',
  standalone: true,
  imports: [IonContent, IonToggle, IonListHeader, IonLabel, IonItem, IonList,  CommonModule],
  templateUrl: './push.component.html',
  styleUrl: './push.component.css'
})
export class PushComponent {
  @ViewChild('broadcast') broadcastToggle : any;
  @ViewChild('toronto') torontoToggle : any;
  @ViewChild('sydney') sydneyToggle : any;
  @ViewChild('enable') enableToggle : any;

  pushCapable =  false;

  subscribeToChannel(channel: string){

  }

  unsubscribeFromChannel(channel: string){

  }
  
  async getPushGranted(){
    const permissions = await PushNotifications.checkPermissions();
    this.pushCapable = permissions?.receive === "granted"
  }

  async notify() {
    const flickedState = !this.pushCapable
    if (!flickedState) {
      await PushNotifications.unregister();
      this.pushCapable = false;
      this.broadcastToggle.checked = false;
      this.sydneyToggle.checked = false;
      this.torontoToggle.checked = false;
    } else {
      const permissions = await PushNotifications.requestPermissions();
      if (permissions.receive == "granted") {
        await PushNotifications.register();
        this.pushCapable = true
      } else {
        alert('Notification Permission is denied. Please allow for notifications in app settings.');
        this.pushCapable = false
        this.enableToggle.checked = false;
      }
    }
  }

  toggleSubscription(){

  }

  async ngOnInit() {
    await this.getPushGranted();
  }

}
