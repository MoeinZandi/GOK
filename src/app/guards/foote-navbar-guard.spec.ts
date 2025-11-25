import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { footeNavbarGuard } from './foote-navbar-guard';

describe('footeNavbarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => footeNavbarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
