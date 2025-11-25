import { Component, inject, signal, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Footer } from "./components/footer/footer";
import { LoaderService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { LayoutService } from './services/layout';  // ✔ FIXED import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, ScrollToTopComponent, HttpClientModule, Footer, LoadingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {

  title = 'GOK - Galaxy Of Knowledge';
  description = 'Your gateway to unlimited learning and knowledge';

  fontVariable = '--font-sans';

  // ✔ Loader signal for template (@if)
  isLoading = signal(false);

  currentTheme = 'light-blue';

  // ----------------------------------------
  // ✔ REQUIRED for @if(layout.showNavbar())
  // ----------------------------------------
  layout = inject(LayoutService);

  private _router = inject(Router);
  private _loader = inject(LoaderService);
  private _translate = inject(TranslateService);

  private subs = new Subscription();

  constructor() {
    // i18n default
    this._translate.setDefaultLang('en');

    // -------------------------------
    // ✔ Router-driven global loading
    // -------------------------------
    const routerSub = this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => this.isLoading.set(false), 200);
      }
    });

    this.subs.add(routerSub);

    // -------------------------------
    // ✔ Sync LoadingService → signal
    // -------------------------------
    //   ngOnInit() {
    // this._router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this._loader.show(1500); // <== ALWAYS 1.5 seconds
    //   };

    //   if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     // DO NOT hide; the 1.5-second timer handles it
    //   }
    // });
  };
}
