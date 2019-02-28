import {Component} from '@angular/core';
import {SavedGame} from './game-list/saved-game.model';
import {GamesService} from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamesService]
})
export class AppComponent {

  constructor(private gamesService: GamesService) {
  }

  onGameAdded(game: SavedGame) {
    this.gamesService.addGame(game);
  }

}
