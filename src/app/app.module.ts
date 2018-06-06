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


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
