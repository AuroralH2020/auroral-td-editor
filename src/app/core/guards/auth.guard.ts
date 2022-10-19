import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _user: UserService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._user.isLoggedIn) {
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
