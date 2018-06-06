import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout',
  template: `
    <ng-container *ngIf="loggedIn()">
      <button (click)="logout()">Log Out</button>
    </ng-container>
  `
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  loggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
