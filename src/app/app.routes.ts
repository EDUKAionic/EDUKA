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
  {
    path: 'authentification2',
    loadComponent: () => import('./pages/authentification2/authentification2.page').then( m => m.Authentification2Page)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'modifier-profil',
    loadComponent: () => import('./pages/modifier-profil/modifier-profil.page').then( m => m.ModifierProfilPage)
  },
  {
    path: 'depense',
    loadComponent: () => import('./pages/depense/depense.page').then( m => m.DepensePage)
  },
  {
    path: 'paiement',
    loadComponent: () => import('./pages/paiement/paiement.page').then( m => m.PaiementPage)
  },
  {
    path: 'profil-parent',
    loadComponent: () => import('./pages/profil-parent/profil-parent.page').then( m => m.ProfilParentPage)
  },
  {
    path: 'parrain-filleuls',
    loadComponent: () => import('./pages/parrain-filleuls/parrain-filleuls.page').then( m => m.ParrainFilleulsPage)
  },
  {
    path: 'profil-filleul',
    loadComponent: () => import('./pages/profil-filleul/profil-filleul.page').then( m => m.ProfilFilleulPage)
  },
];
// Configuration pour le main.ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
