import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AngularRoutes</h1>
    <app-logout></app-logout>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <br>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <br>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      <br>
      <a routerLink="/admin" routerLinkActive="active">Admin Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
