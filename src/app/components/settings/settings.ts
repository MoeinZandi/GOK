import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Navbar } from "../navbar/navbar";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs";

interface Tab {
  id: 'general' | 'security' | 'notifications' | 'preferences';
  label: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
  imports: [Navbar, BreadcrumbsComponent],
})
export class SettingsComponent implements OnInit {
  private fb = inject(FormBuilder);

  // Tabs
  tabs: Tab[] = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'preferences', label: 'Preferences' },
  ];
  selectedTab: Tab = this.tabs[0];

  // User info
  user = {
    name: 'Moein Zandi',
    email: 'moeinzandi@gmail.com',
    avatar: '/maleavatar.png',
  };

  // Notifications
  emailNotifications = true;
  pushNotifications = false;
  weeklyDigest = true;

  // Forms
  profileForm: FormGroup = this.fb.group({
    name: [this.user.name],
    email: [this.user.email],
    bio: [''],
  });

  passwordForm: FormGroup = this.fb.group({
    currentPassword: [''],
    newPassword: [''],
    confirmPassword: [''],
  });

  preferencesForm: FormGroup = this.fb.group({
    language: ['English'],
    timezone: ['UTC-8 (Pacific Time)'],
  });

  // Booleans for which section to show
  showGeneral = true;
  showSecurity = false;
  showNotifications = false;
  showPreferences = false;

  constructor() {}

  ngOnInit(): void {}

  // Tab selection
  selectTab(tabId: 'general' | 'security' | 'notifications' | 'preferences') {
    this.showGeneral = tabId === 'general';
    this.showSecurity = tabId === 'security';
    this.showNotifications = tabId === 'notifications';
    this.showPreferences = tabId === 'preferences';
  }

  // Notification toggles
  toggleEmailNotifications() { this.emailNotifications = !this.emailNotifications; }
  togglePushNotifications() { this.pushNotifications = !this.pushNotifications; }
  toggleWeeklyDigest() { this.weeklyDigest = !this.weeklyDigest; }

  // Save actions
  saveProfile() { console.log('Profile saved', this.profileForm.value); }
  updatePassword() { console.log('Password updated', this.passwordForm.value); }
  savePreferences() { console.log('Preferences saved', this.preferencesForm.value); }
}
