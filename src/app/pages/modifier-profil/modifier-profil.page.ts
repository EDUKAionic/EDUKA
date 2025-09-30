import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonBackButton, 
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.page.html',
  styleUrls: ['./modifier-profil.page.scss'],
  standalone: true,
  imports: [ IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonBackButton,
    IonButtons,
    IonIcon,
    ReactiveFormsModule,
    CommonModule]
})
export class ModifierProfilPage implements OnInit {

  profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.profileForm = this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['+223 75 79 40 44', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulaire soumis:', this.profileForm.value);
      // Ici vous ajouterez la logique pour sauvegarder les données
      // Par exemple : this.profileService.updateProfile(this.profileForm.value);
    }
  }
}
