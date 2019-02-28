import {Component, Input, OnInit} from '@angular/core';
import {SavedGame} from '../saved-game.model';
import {GamesService} from '../../games.service';

@Component({
  selector: 'app-saved-game',
  templateUrl: './saved-game.component.html',
  styleUrls: ['./saved-game.component.css']
})
export class SavedGameComponent implements OnInit {
  @Input() game: SavedGame;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {
  }

  onClickDelete(game: SavedGame) {
    this.gamesService.deleteGame(game);
  }
}
