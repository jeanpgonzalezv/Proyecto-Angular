import { CanActivateFn } from '@angular/router';

export const barberGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
