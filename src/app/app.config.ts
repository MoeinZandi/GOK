import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),  
    provideRouter(routes)
  ]
};

export const APP_IMPORTS = [
  NavbarComponent,
  ScrollToTopComponent
];