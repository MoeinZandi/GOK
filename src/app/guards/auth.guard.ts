import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);
  const snackbar = inject(MatSnackBar);

  if (isPlatformBrowser(platformId)) {
    const loggedInUserStr: string | null = localStorage.getItem('loggedIn');

    if (loggedInUserStr != null)
      return true; // activate component
  }

  snackbar.open('Please login first', 'Close', {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration:  7000
  });

  router.navigateByUrl('/account/login');

  return false; // block component
};
    