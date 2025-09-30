import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Ajoutez ces imports pour les icônes
import { addIcons } from 'ionicons';
import { 
  notificationsOutline,
  cashOutline,
  walletOutline,
  personOutline,
  fastFoodOutline,
  shirtOutline,
  schoolOutline,
  arrowBack,
  cardOutline,
  pencilOutline,
  checkmarkCircle,
  calendarOutline,
  locationOutline,
  ribbonOutline,
  closeCircleOutline,
  callOutline
} from 'ionicons/icons';

// Ajoutez cette ligne pour importer les icônes
addIcons({
  'notifications-outline': notificationsOutline,
  'cash-outline': cashOutline,
  'wallet-outline': walletOutline,
  'calendar-outline': calendarOutline,
  'person-outline': personOutline,
  'fast-food-outline': fastFoodOutline,
  'location-outline': locationOutline,
  'ribbon-outline': ribbonOutline,
  'shirt-outline': shirtOutline,
  'school-outline': schoolOutline,
  'arrow-back': arrowBack,
  'card-outline': cardOutline,
   'pencil-outline': pencilOutline,
  'checkmark-circle': checkmarkCircle,
  'close-circle-outline': closeCircleOutline,
  'call-outline': callOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});