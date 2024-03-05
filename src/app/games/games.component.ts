import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: "Sporting de Portugal",
    },
    {
      id: 2,
      name: "Manchester United",
    },
    {
      id: 3,
      name: "Real Madrid"
    },
    {
      id: 4,
      name: "Juventus"
    },
    {
      id: 5,
      name: "Al Nasser"
    }
  ]
}
