import { Component,ElementRef,HostListener,ViewChild,inject} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [ MatToolbarModule],
  standalone: true
})
export class Navbar {
  isAuthenticated = false;
  isMobileMenuOpen = false;
  searchQuery = '';
  results: any[] = [];
  accountservice = inject(AccountService);

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private api: ApiService, private router: Router) {}

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  user = {
    name: 'Moein ZANDI',
    email: 'Moein@gmail.com',
    age: '18',
    gender: 'Male',
    avatar: 'maleavatar.png'
  };

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menu = this.mobileMenu?.nativeElement;

    if (
      this.isMobileMenuOpen &&
      menu &&
      !menu.contains(target) &&
      !target.closest('.mobile-toggle')
    ) {
      this.isMobileMenuOpen = false;
    }
  }

  handleSearch(event: Event): void {
    event.preventDefault();
    const query = this.searchQuery.trim();
    if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  }

  onSearchInput(value: string): void {
    this.searchQuery = value;
  }

  logout(): void {
    console.log('Logging out...');
  }
}
