import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SavedGame} from '../game-list/saved-game.model';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']

})
export class AddGameFormComponent implements OnInit {

  counter = 1;

  @Output() gameAdded = new EventEmitter<{ game: SavedGame }>();

  submitAllowed = true;

  onSubmit(fileInput: HTMLInputElement, playersInput: HTMLInputElement, notesInput: HTMLInputElement, e) {
    e.preventDefault();
    const newGame = new SavedGame(1, playersInput.value, fileInput.value, notesInput.value);
    this.gameAdded.emit({game: newGame});
    this.counter++;
    console.log(newGame);
    console.log("counter: " + this.counter);
  }

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

}
