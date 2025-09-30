import { Component } from '@angular/core';
import { 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [ IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    CommonModule],
})
export class AccueilPage{
 constructor(private router: Router) {}

  // Navigation vers la page d'authentification parent
  goToAuthentificationParent() {
    this.router.navigate(['/authentification']);
  }
}
