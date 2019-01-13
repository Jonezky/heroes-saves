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

  onSubmit(e){
    console.log("yay!");
    // newGame = new SavedGame()
    // this.savedGames.push(newGame)
  }

  constructor() {
  }

  ngOnInit() {
  }

}
