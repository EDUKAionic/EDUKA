import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonContent, IonItem, IonLabel, IonInput, 
  IonButton, IonBackButton, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';
import { callOutline, arrowBackOutline, cellularOutline, wifiOutline, batteryHalfOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon,  IonBackButton,RouterLink
  ],
})
export class AuthentificationPage implements OnInit {

  phone: string = '';

  constructor(private navCtrl: NavController, private router: Router) {
    // Charger l’icône utilisée dans le template
    addIcons({cellularOutline,wifiOutline,batteryHalfOutline,arrowBackOutline,callOutline});
  }

  ngOnInit() {}
 // Bouton retour avec fallback vers accueil
  goBack() {
    this.router.navigate(['/accueil']); // retour vers la route définie
}

  onSubmit() {
    console.log('Téléphone saisi :', this.phone);
  }
}
