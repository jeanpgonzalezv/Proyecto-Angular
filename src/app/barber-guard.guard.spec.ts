import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { barberGuardGuard } from './barber-guard.guard';

describe('barberGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => barberGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
