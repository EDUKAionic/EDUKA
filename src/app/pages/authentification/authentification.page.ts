import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonItem, IonLabel, IonInput, 
  IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';
import { callOutline, arrowBackOutline} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon
  ],
})
export class AuthentificationPage implements OnInit {

  phone: string = '';

  constructor(private navCtrl: NavController, private router: Router) {
    // Charger l’icône utilisée dans le template
    addIcons({callOutline,arrowBackOutline});
  }

  ngOnInit() {}
   // Bouton retour
 // Bouton retour avec fallback vers accueil
  goBack() {
  if (window.history.length > 1) {
    this.navCtrl.back();
  } else {
    this.router.navigate(['/accueil']); // retour vers la route définie
  }
}

  onSubmit() {
    console.log('Téléphone saisi :', this.phone);
  }
}
