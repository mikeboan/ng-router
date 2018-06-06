import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    console.log('logging in...');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true),
      tap(() => console.log('logged in'))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    console.log('logged out');
  }
}
