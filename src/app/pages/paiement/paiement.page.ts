import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface Payment {
  reference: string;
  method: string;
  amount: string;
  date: string;
  sender: string;
  receiver: string;
  status: string;
}

interface MonthlyPayments {
  month: string;
  payments: Payment[];
}

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonBackButton,
    IonButtons,
    CommonModule
  ]
})
export class PaiementPage {
  paymentsData: MonthlyPayments[] = [
    {
      month: 'Mois de Mars 2025',
      payments: [
        {
          reference: 'M0785239045',
          method: 'Moov',
          amount: '10 000 FCFA',
          date: '27 août 2025 à 16:53',
          sender: 'Boubou TOURE',
          receiver: 'Boubou TOURE',
          status: 'Succès'
        },
        {
          reference: 'M0785239045',
          method: 'Moov',
          amount: '10 000 FCFA',
          date: '27 août 2025 à 16:53',
          sender: 'Boubou TOURE',
          receiver: 'Boubou TOURE',
          status: 'Succès'
        }
      ]
    },
    {
      month: 'Mois de Février 2025',
      payments: [
        {
          reference: 'M0785239045',
          method: 'Moov',
          amount: '10 000 FCFA',
          date: '15 février 2025 à 14:30',
          sender: 'Boubou TOURE',
          receiver: 'Boubou TOURE',
          status: 'Succès'
        }
      ]
    }
  ];

  constructor() {}
}