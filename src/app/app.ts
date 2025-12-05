import { Component, inject, signal, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading';

import { Subscription } from 'rxjs';
import { LayoutService } from './services/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ScrollToTopComponent,
    HttpClientModule,
    LoadingComponent,
    TranslateModule
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnDestroy {

  title = 'GOK - Galaxy Of Knowledge';
  description = 'Your gateway to unlimited learning and knowledge';

  fontVariable = '--font-sans';
  isLoading = signal(false);
  currentTheme = 'light-blue';

  layout = inject(LayoutService);

  private _router = inject(Router);
  private _loader = inject(LoaderService);
  private _translate = inject(TranslateService);
  private _subs = new Subscription();

  constructor(private translate: TranslateService) {

    // ------------------------------
    // 🌍 Initialize language
    // ------------------------------
    // this.translate.addLangs(['en', 'fa']);

    // const savedLang = localStorage.getItem('lang') ?? 'en';
    // this.translate.use(savedLang);

    // document.documentElement.dir = savedLang === 'fa' ? 'rtl' : 'ltr';

    // ------------------------------
    // 🔄 Global Router Loader
    // ------------------------------
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

    this._subs.add(routerSub);
  }

  // -----------------------------------------
  // 🌐 Change Language (Called from HTML)
  // -----------------------------------------
  // changeLang(lang: string) {
  //   this.translate.use(lang);
  //   localStorage.setItem('lang', lang);
  //   document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  // }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
