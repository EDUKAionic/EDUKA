import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonTitle, 
  IonContent,
  IonButton
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-profil-filleul',
  templateUrl: './profil-filleul.page.html',
  styleUrls: ['./profil-filleul.page.scss'],
  standalone: true,
  imports: [ CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonButton]
})
export class ProfilFilleulPage implements OnInit {
  needs = [
    { name: 'Frais de scolarité', icon: '💰' },
    { name: 'Uniforme scolaire', icon: '👕' },
    { name: 'Cantine scolaire', icon: '🍽️' },
    { name: 'Fournitures Scolaires', icon: '📚' }
  ];

  sponsorChild() {
    console.log('Parrainer cet enfant');
    // Implémentez la logique de parrainage ici
  }
  constructor() { }

  ngOnInit() {
  }

}
