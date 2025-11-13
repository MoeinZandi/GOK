import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, ScrollToTopComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  template: `
    <div>
      <h1>{{ 'home' | translate }}</h1>
      <button (click)="switchLang('en')">EN</button>
      <button (click)="switchLang('fa')">FA</button>
    </div>
  `
})
export class AppComponent {
  title = 'GOK - Galaxy Of Knowledge';
  description = 'Your gateway to unlimited learning and knowledge';
  fontVariable = '--font-sans';
  isLoading = false;
  currentTheme = 'light-blue';

   constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

     switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-blue' ? 'dark-blue' : 'light-blue';
  }
}
  