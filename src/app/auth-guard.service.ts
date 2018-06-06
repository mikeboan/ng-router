import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLoggedIn(url);
  }

  private checkLoggedIn(url: string) {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // store url to redirect back to after user logs in
    this.authService.redirectUrl = url;

    // cancel current navigation, redirect user to login page
    this.router.navigate(['/login']);
    return false;
  }
}
