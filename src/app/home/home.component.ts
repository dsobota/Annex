import { Component, OnInit } from '@angular/core';
import { IonList,IonItem,IonLabel, IonContent, IonHeader } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [IonHeader, IonContent,  CommonModule]
})
export class HomeComponent   {


}
