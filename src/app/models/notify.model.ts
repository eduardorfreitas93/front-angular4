export class NotifyModel {
  message: string;
  title: string;
  owner: number;
  destiny: number|Array<number>;
  createAt: number;
  read: boolean;

  constructor(message, title, owner, destiny: number|Array<number>, createAt: number = new Date().getTime()) {
    this.message = message;
    this.title = title;
    this.owner = owner;
    this.destiny = destiny;
    this.createAt = createAt;
    this.read = false;
  }
}
