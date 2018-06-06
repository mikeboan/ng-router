import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  template: `
    <h2>CRISES</h2>
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        [class.selected]="crisis.id === selectedCrisisId">
        <a [routerLink]="['/crisis-center', crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`.selected { background-color: pink }`]
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;

  private selectedCrisisId: number;

  constructor(
    private crisisService: CrisisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crises$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedCrisisId = +params.get('prevCrisisId');
        return this.crisisService.getCrises(); // must return observable from cb passed to switchMap
      })
    );
  }
}
