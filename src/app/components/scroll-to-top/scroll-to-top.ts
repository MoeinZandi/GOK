import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.html',
  styleUrls: ['./scroll-to-top.scss'],
})
export class ScrollToTopComponent {
 showButton = true;

  // Detect window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 100;
  }

  // Scroll to top smoothly
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
