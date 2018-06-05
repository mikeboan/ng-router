import { NgModule } from '@angular/core';

import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
