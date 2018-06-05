import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
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
