import {Component, OnInit} from '@angular/core';
import {SavedGame} from './saved-game.model';
import {GamesService} from '../games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  savedGames = [];

  constructor(private gamesService: GamesService) {

  }



  ngOnInit(): void {
    this.savedGames = this.gamesService.getGames();
    this.gamesService.gamesChanged.subscribe(
      (games: SavedGame[]) => {
        this.savedGames = games;
      }
    );
  }
}
