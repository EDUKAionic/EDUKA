import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-parrain-filleuls',
  templateUrl: './parrain-filleuls.page.html',
  styleUrls: ['./parrain-filleuls.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonButton,
    IonIcon
  ]
})
export class ParrainFilleulsPage {
  constructor() {
    addIcons({ searchOutline });
  }
}