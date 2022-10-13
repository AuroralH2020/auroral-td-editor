import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _authservice: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authservice.isLoggedIn) {
      // all ok, proceed navigation to routed component
      return true;
    }
    else {
      // start a new navigation to redirect to login page
      this._router.navigate(['/auth/login']);
      // abort current navigation
      return false;
    }
  }
}
