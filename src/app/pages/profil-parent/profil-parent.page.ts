import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent,
  IonBackButton,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil-parent',
  templateUrl: './profil-parent.page.html',
  styleUrls: ['./profil-parent.page.scss'],
  standalone: true,
  imports: [ IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    CommonModule]
})
export class ProfilParentPage  {

    constructor(private router: Router) {}

  // Navigation vers la page Modifier Profil avec paramètre
  goToModifierProfil(champ?: string) {
    if (champ) {
      this.router.navigate(['/modifier-profil'], { 
        queryParams: { champ: champ } 
      });
    } else {
      this.router.navigate(['/modifier-profil']);
    }
  }

}
