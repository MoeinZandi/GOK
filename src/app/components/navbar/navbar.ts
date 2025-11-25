import { Component, ElementRef, HostListener, ViewChild, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [MatToolbarModule, CommonModule, RouterModule],
})
export class NavbarComponent {
  @Input() isAuthenticated = false;
  @Input() user: any = null;     // ✅ REQUIRED FIX

  isMobileMenuOpen = false;
  dropdownOpen = false;

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  accountService = inject(AccountService);

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.isAuthenticated = true;
    }
  }

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  toggleDropdown() { this.dropdownOpen = !this.dropdownOpen; }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menu = this.mobileMenu?.nativeElement;

    if (this.isMobileMenuOpen && menu && !menu.contains(target) && !target.closest('.mobile-toggle'))
      this.isMobileMenuOpen = false;

    if (this.dropdownOpen && !target.closest('.avatar-dropdown'))
      this.dropdownOpen = false;
  }

  goTo(path: string) { this.router.navigate([path]); }

  logout() {
    localStorage.removeItem('user');
    this.isAuthenticated = false;
    this.dropdownOpen = false;
    this.router.navigate(['/signin']);
  }
}
