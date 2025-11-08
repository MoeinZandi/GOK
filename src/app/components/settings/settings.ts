import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class SettingsComponent {
  isAuthenticated = true;
  user = {
    name: 'moein Zandi',
    email: 'moeinzandi@gmail.com',
    avatar: '/maleavatar.png',
  };

  // Notification toggles
  emailNotifications = true;
  pushNotifications = false;
  weeklyDigest = true;
  courseUpdates = true;

  // Preferences
  preferredLanguage = 'English';
  timezone = 'UTC+1 (Central European Time)';

  // Display settings
  darkMode = false;
  compactView = false;

  // Methods (placeholders — hook to services as needed)
  saveProfile() {
    console.log('Save profile', {
      name: this.user.name,
      email: this.user.email,
      // other profile fields...
    });
    // call service to persist...
  }

  deactivateAccount() {
    console.log('Deactivate account clicked');
    // call service...
  }

  deleteAccount() {
    console.log('Delete account clicked');
    // call service...
  }

  updatePassword(current: string, next: string, confirm: string) {
    console.log('Update password', { current, next, confirm });
    // validate and call service...
  }

  enableTwoFactor() {
    console.log('Enable 2FA');
    // service...
  }

  revokeSession(sessionId?: string) {
    console.log('Revoke session', sessionId || 'current');
    // service...
  }

  saveNotificationSettings() {
    console.log('Notification settings', {
      emailNotifications: this.emailNotifications,
      weeklyDigest: this.weeklyDigest,
      courseUpdates: this.courseUpdates,
      pushNotifications: this.pushNotifications,
    });
    // persist...
  }

  savePreferences() {
    console.log('Save preferences', {
      preferredLanguage: this.preferredLanguage,
      timezone: this.timezone,
      darkMode: this.darkMode,
      compactView: this.compactView,
    });
    // persist...
  }
}
