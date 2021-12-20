import {Component, Input,} from '@angular/core';

@Component({
    selector: 'app-field-game',
    templateUrl: './field-game.component.html',
    styleUrls: ['./field-game.component.css']
})
export class FieldGameComponent  {

  @Input() state = [
      [0, 0, 1],
      [0, 1, 2],
      [0, 0, 1],
  ];
}
