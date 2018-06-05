import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
