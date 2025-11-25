import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LayoutService } from '../services/layout';

export const layoutGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const layout = inject(LayoutService);

  const navbar = route.data['navbar'];
  const footer = route.data['footer'];

  layout.setLayout({
    navbar: navbar !== undefined ? navbar : true,
    footer: footer !== undefined ? footer : true
  });

  return true;
};
