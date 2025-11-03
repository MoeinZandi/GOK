import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule],  // ✅ Add RouterModule
})
export class Navbar {
  isAuthenticated = false;
  isMobileMenuOpen = false;
  dropdownOpen = false;

  accountService = inject(AccountService);
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private api: ApiService, private router: Router) {}

  user = {
    name: 'Moein ZANDI',
    email: 'Moein@gmail.com',
    age: '18',
    gender: 'Male',
    avatar: 'maleavatar.png',
  };

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.isAuthenticated = true;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menu = this.mobileMenu?.nativeElement;

    if (this.isMobileMenuOpen && menu && !menu.contains(target) && !target.closest('.mobile-toggle')) {
      this.isMobileMenuOpen = false;
    }

    if (this.dropdownOpen && !target.closest('.avatar-dropdown')) {
      this.dropdownOpen = false;
    }
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
    this.dropdownOpen = false;
    this.router.navigate(['/signin']);
  }
}
