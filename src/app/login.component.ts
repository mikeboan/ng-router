import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  template: `
    <button (click)="login()">Log In</button>
  `
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login()
      .pipe(
        take(1),
        filter((isLoggedIn) => isLoggedIn)
      )
      .subscribe(() => {
        const destinationUrl = this.authService.redirectUrl || '/';
        this.router.navigate([destinationUrl]);
      });
  }
}
