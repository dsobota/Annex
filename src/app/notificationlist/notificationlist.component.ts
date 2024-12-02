import { Component, Input, Output, EventEmitter,ViewChild, input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonListHeader, IonLabel,IonItem, IonHeader, IonList} from "@ionic/angular/standalone";
import { PushMessageComponent } from "../pushmessage/pushmessage.component";
@Component({
  standalone:true,
  selector: 'app-notificationlist',
  templateUrl: './notificationlist.component.html',
  styleUrls: ['./notificationlist.component.scss'],
  imports:[PushMessageComponent,CommonModule, IonList, IonLabel, IonListHeader]
})
export class NotificationlistComponent {
  @Input()
  parent: any;

}
