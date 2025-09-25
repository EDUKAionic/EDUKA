import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonList,IonItem,IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [  IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonItem,IonLabel]
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
