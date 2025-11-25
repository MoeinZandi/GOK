import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  showNavbar = signal(true);
  showFooter = signal(true);

  setLayout(options: { navbar?: boolean; footer?: boolean }) {
    if (options.navbar !== undefined) {
      this.showNavbar.set(options.navbar);
    }
    if (options.footer !== undefined) {
      this.showFooter.set(options.footer);
    }
  }
}
