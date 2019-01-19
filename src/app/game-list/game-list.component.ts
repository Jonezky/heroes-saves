import {Component, OnInit} from '@angular/core';
import {SavedGame} from './saved-game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  savedGames: SavedGame[] = [
    new SavedGame(88, 'Joonas, Juuso, Vellu', 'filename/path', 'Joonas: watch out for purple \n Vellu: Tutki underground \n Juuso: Lähetä Vellulle kultaa')
  ];

  onGameAdded(game: { game: SavedGame }) {
    console.log(game);
    this.savedGames.push(game.game);
    console.log(game.game);
  }

  ngOnInit(): void {
  }
}
