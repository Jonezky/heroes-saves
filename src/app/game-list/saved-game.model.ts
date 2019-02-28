
export class SavedGame {
  public dateAdded: object;
  public id: number;
  public players: string;
  public file: string;
  public note: string;

  constructor(dateAdded: object, id: number, players: string, file: string, note: string) {
    this.dateAdded = dateAdded;
    this.id = id;
    this.players = players;
    this.file = file;
    this.note = note;
  }
}
