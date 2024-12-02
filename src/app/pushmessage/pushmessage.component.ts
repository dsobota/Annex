import { Component, Input, Output, EventEmitter,ViewChild, input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonHeader, IonLabel } from "@ionic/angular/standalone";
import { PushMessage } from "../pushmessage";
@Component({
  selector: 'app-push-message',
  standalone: true,
  imports: [IonLabel, IonHeader, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,CommonModule],
  templateUrl: './pushmessage.component.html',
  styleUrl: './pushmessage.component.scss'
})
export class PushMessageComponent {


  @Input() push!: PushMessage;
  @Output() remove = new EventEmitter<PushMessage>();


}
