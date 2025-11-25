import { CanActivateFn } from '@angular/router';

export const footeNavbarGuard: CanActivateFn = (route, state) => {
  return true;
};
