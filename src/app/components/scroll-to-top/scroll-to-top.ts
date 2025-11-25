import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.html',
  styleUrls: ['./scroll-to-top.scss'],
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
