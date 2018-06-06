import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';
import { ComposeMessageComponent } from '../compose-message.component';
import { LoginComponent } from '../login.component';
import { LogoutComponent } from '../logout.component';
import { NoAuthGuard } from '../no-auth-guard.service';
import { AuthGuard } from '../auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
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
