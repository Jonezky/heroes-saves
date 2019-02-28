import {Component, OnInit} from '@angular/core';
import {SavedGame} from '../game-list/saved-game.model';
import {GamesService} from '../games.service';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']

})
export class AddGameFormComponent implements OnInit {

  counter = 1;

  submitAllowed = true;

  onSubmit(fileInput: HTMLInputElement, playersInput: HTMLInputElement, notesInput: HTMLInputElement, e) {
    e.preventDefault();
    const newGame = new SavedGame(new Date(), this.counter, playersInput.value, fileInput.value, notesInput.value);
    this.gamesService.addGame(newGame);
    this.counter++;
    console.log('counter: ' + this.counter);
  }

  constructor( private gamesService: GamesService) {
    this.counter = 0;
  }

  ngOnInit() {
  }

}
