import { Component, OnInit } from '@angular/core';
import { SavedGame} from '../game-list/saved-game.model';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent implements OnInit {
  submitAllowed = true;

  constructor() { }

  ngOnInit() {
  }

}
