import { Component, OnInit } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {  peopleOutline, globeOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonContent, IonList, IonItem, IonLabel, IonIcon],
})
export class AccueilPage implements OnInit {

  constructor() {
    addIcons({heartOutline,peopleOutline,globeOutline});
  }

  ngOnInit() {
    
  }
}
