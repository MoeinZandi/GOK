import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
  imports: [
    CommonModule,
    NavbarComponent,
    BreadcrumbsComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsComponent {
  private fb = inject(FormBuilder);

  user = {
    name: 'Moein Zandi',
    email: 'moeinzandi@gmail.com',
    avatar: '/maleavatar.png',
  };

  emailNotifications = true;
  pushNotifications = false;
  weeklyDigest = true;

  profileForm = this.fb.nonNullable.group({
    name: this.user.name,
    email: this.user.email,
    bio: ''
  });

  passwordForm = this.fb.nonNullable.group({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  preferencesForm = this.fb.nonNullable.group({
    language: 'English',
    timezone: 'UTC-8 (Pacific Time)'
  });

  showGeneral = true;
  showSecurity = false;
  showNotifications = false;
  showPreferences = false;

  selectTab(tab: 'general' | 'security' | 'notifications' | 'preferences') {
    this.showGeneral = tab === 'general';
    this.showSecurity = tab === 'security';
    this.showNotifications = tab === 'notifications';
    this.showPreferences = tab === 'preferences';
  }

  toggleEmailNotifications() { this.emailNotifications = !this.emailNotifications; }
  togglePushNotifications() { this.pushNotifications = !this.pushNotifications; }
  toggleWeeklyDigest() { this.weeklyDigest = !this.weeklyDigest; }

  saveProfile() { console.log('Profile saved:', this.profileForm.value); }
  updatePassword() { console.log('Password updated:', this.passwordForm.value); }
  savePreferences() { console.log('Preferences saved:', this.preferencesForm.value); }
}
