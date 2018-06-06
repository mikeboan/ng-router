import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisModule } from './crisis-center/crisis.module';
import { ComposeMessageComponent } from './compose-message.component';
import { AdminModule } from './admin.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { NoAuthGuard } from './no-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisModule,
    AdminModule,
    RoutingModule,
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
