import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';

export const authLoggedInGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const snackbar = inject(MatSnackBar);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    const loggedInUserStr: string | null = localStorage.getItem('loggedIn');

    if (loggedInUserStr != null) {
      snackbar.open('You are already logged in.', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration:  7000
      });
      
      router.navigateByUrl('/members/member-list');

      return false; // block component
    }
  }

  return true; // active component
};
