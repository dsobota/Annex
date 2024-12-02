import { Component,ViewChild } from '@angular/core';
import { IonListHeader, IonToggle, IonItem, IonList, IonLabel, IonButton } from "@ionic/angular/standalone";
import { Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [IonButton, IonLabel, IonList, IonItem, IonToggle, IonListHeader, IonList, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  @ViewChild('loc') locationtoggle : any;

  locationCapable = false;
  lat = 0.0 as number;
  lng = 0.0 as number;
  
  async getLocationCapable(){
       const permissions = await Geolocation.checkPermissions();      
        this.locationCapable = permissions?.location === "granted" || permissions?.coarseLocation === "granted"

  }


  async location(){
    const flickedState = !this.locationCapable
    if (!flickedState) {
      this.locationCapable = false;
          this.locationtoggle.checked = false;
    } else {
      const permissions = await Geolocation.requestPermissions();
      if ((permissions.location == "granted") ||  (permissions.coarseLocation== "granted")) {
        this.locationtoggle.checked = true;
        this.locationCapable = true;

      } else {
        this.locationtoggle.checked = false;
        this.locationCapable = false;

      }
    }

  }

  async onButtonClick(){
    const loc = await Geolocation.getCurrentPosition();
    if(loc.coords){
      this.lat = loc.coords?.latitude;
      this.lng = loc.coords?.longitude;
    }
  }

  async ngOnInit() {
    await this.getLocationCapable();
  }

}
