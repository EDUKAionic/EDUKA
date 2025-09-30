import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonLabel, IonInput, 
  IonButton, IonIcon , IonBackButton, // AJOUTER CET IMPORT
  
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';
import { arrowBackOutline, lockClosedOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentification2',
  templateUrl: './authentification2.page.html',
  styleUrls: ['./authentification2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonLabel, IonInput, IonButton, IonIcon,  IonBackButton, RouterLink
  ],
})
export class Authentification2Page implements OnInit {

  code: string = '';

  constructor(private navCtrl: NavController, private router: Router) {
    addIcons({ arrowBackOutline, lockClosedOutline });
  }

  ngOnInit() {}

  // Bouton retour
 
  onSubmit() {
    // Validation du code OTP (6 chiffres)
    if (this.code.length === 6 && /^\d+$/.test(this.code)) {
      console.log('Code OTP valide :', this.code);
      // Ajouter ici la logique de validation du code OTP
    } else {
      console.log('Code OTP invalide');
      // Ajouter ici un message d'erreur à l'utilisateur
    }
  }

  // Optionnel : Validation en temps réel
  onCodeChange(event: any) {
    // N'autoriser que les chiffres
    this.code = event.target.value.replace(/[^0-9]/g, '');
  }
}