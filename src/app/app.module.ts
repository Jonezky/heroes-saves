import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedGameComponent } from './game-list/saved-game/saved-game.component';
import { GameListComponent } from './game-list/game-list.component';
import { HeaderComponent } from './header/header.component';
import { AddGameFormComponent } from './add-game-form/add-game-form.component';
import {GamesService} from './games.service';

@NgModule({
  declarations: [
    AppComponent,
    SavedGameComponent,
    GameListComponent,
    HeaderComponent,
    AddGameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
