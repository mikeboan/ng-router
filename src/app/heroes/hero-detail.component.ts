import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Hero, HeroService } from './hero.service';
import { Observable } from 'rxjs';
import { slideInDownAnimation} from '../animations';


@Component({
  template: `
    <h1>Heroes</h1>
    <ng-container *ngIf="hero$ | async as hero">
      <h2>{{hero.name}}</h2>
      <p>id: {{hero.id}}</p>
      <p>name: <input [(ngModel)]="hero.name"></p>

      <button (click)="goBack(hero)">Back</button>
    </ng-container>
  `,
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    // snapshot is fine here because we don't reuse the component instance
    //    the user must navigate back to /heroes in order to get to another hero detail component (which will be a fresh instance)
    const heroId = this.activatedRoute.snapshot.paramMap.get('id');

    this.hero$ = this.heroService.getHero(heroId);
  }

  goBack(hero) {
    const heroId = hero ? hero.id : null; // argument from template may be null

    this.router.navigate(['/heroes', { prevHeroId: heroId }]);
  }
}
