import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroService } from './hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedHeroId">
        <a [routerLink]="['/heroes', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styles: [`.selected { background-color: pink }`]
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  private selectedHeroId: number;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedHeroId = +params.get('prevHeroId');
        return this.heroService.getHeroes(); // must return observable from cb passed to switchMap
      })
    );
  }
}
