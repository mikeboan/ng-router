import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Crisis, CrisisService } from './crisis.service';
import { slideInDownAnimation} from '../animations';


@Component({
  template: `
    <h2>Crisis Detail</h2>
    <ng-container *ngIf="crisis$ | async as crisis">
      <h3>{{crisis.name}}</h3>
      <p>id: {{crisis.id}}</p>
      <p>name: <input [(ngModel)]="crisis.name"></p>

      <button (click)="goBack(crisis)">Back</button>
    </ng-container>
  `,
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis$: Observable<Crisis>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crisisService: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap(id => this.crisisService.getCrisis(id))
    );
  }

  goBack(crisis) {
    const crisisId = crisis ? crisis.id : null; // argument from template may be null

    this.router.navigate(['../', { prevCrisisId: crisisId }], { relativeTo: this.activatedRoute });
  }
}
