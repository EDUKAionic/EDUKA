import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'authentification',
    loadComponent: () => import('./pages/authentification/authentification.page').then( m => m.AuthentificationPage)
  },
];
// Configuration pour le main.ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
