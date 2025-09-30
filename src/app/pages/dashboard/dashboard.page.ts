import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent,
  IonGrid, 
  IonRow, 
  IonCol,
  IonList, 
  IonItem, 
  IonAvatar, 
  IonLabel, 
  IonNote,
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonNote,
    IonButton,
    IonIcon,
    IonButtons,
    CommonModule
  ]
})
export class DashboardPage {

  constructor(private router: Router) {}

  // Navigation vers la page Paiement
  goToPaiement() {
    this.router.navigate(['/paiement']);
  }

  // Navigation vers la page Dépense
  goToDepense() {
    this.router.navigate(['/depense']);
  }

  // Navigation vers la page Profil
  goToProfil() {
    this.router.navigate(['/profil-parent']);
  }
}