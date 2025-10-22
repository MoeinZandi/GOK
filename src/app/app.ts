import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, ScrollToTop, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'GOK - Galaxy Of Knowledge';
  description = 'Your gateway to unlimited learning and knowledge';
  fontVariable = '--font-sans';
  isLoading = false;
}
