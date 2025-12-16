import { Component, ViewEncapsulation } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section";
import { ScrollToTopComponent } from "../scroll-to-top/scroll-to-top";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [HeroSectionComponent, ScrollToTopComponent],
  encapsulation: ViewEncapsulation.Emulated

})
export class HomeComponent {
searchQuery: any;
onSearchInput(arg0: string) {
throw new Error('Method not implemented.');
}
handleSearch($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
  isAuthenticated = false;
  user: any = undefined;
}
