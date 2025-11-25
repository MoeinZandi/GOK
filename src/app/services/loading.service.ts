import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  loading = signal(false);

  show(ms: number = 1500) {
    this.loading.set(true);
    setTimeout(() => this.loading.set(false), ms);
  }

  hide() {
    this.loading.set(false);
  }
}
