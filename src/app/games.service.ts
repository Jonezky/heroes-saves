import {SavedGame} from './game-list/saved-game.model';
import {EventEmitter} from '@angular/core';

export class GamesService {
  gamesChanged = new EventEmitter<SavedGame[]>();

  private savedGames: SavedGame[] = [
    new SavedGame(new Date(), 88, 'Joonas, Juuso, Vellu', 'filename/path', 'Joonas: watch out for purple \n Vellu: Tutki underground \n Juuso: Lähetä Vellulle kultaa')
  ];

  getGames() {
    return this.savedGames.slice();
  }

  addGame(game: SavedGame) {
    this.savedGames.push(game);
    this.gamesChanged.emit(this.savedGames.slice());
  }

  deleteGame(game: SavedGame) {
    this.savedGames.splice(this.savedGames.indexOf(game), 1);
    this.gamesChanged.emit(this.savedGames.slice());
  }
}
