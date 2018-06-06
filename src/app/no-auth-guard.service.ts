import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    // activate only if not logged in
    return !this.authService.isLoggedIn;
  }
}
