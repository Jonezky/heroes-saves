export class SavedGame {
  public id: number;
  public players: string;
  public file: string;
  public note: string;

  constructor(id: number, players: string, file: string, note: string) {
    this.id = id;
    this.players = players;
    this.file = file;
    this.note = note;
  }
}
