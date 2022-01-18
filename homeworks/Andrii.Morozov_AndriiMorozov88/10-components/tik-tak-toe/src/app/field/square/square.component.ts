import { Component, Input } from '@angular/core';
import { playerMove } from '../../enums';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent  {
  @Input() square!:number;
  get icon() {
      if (this.square === playerMove.cross) {
          return 'assets/sprite.svg#x'
      }
      if (this.square === playerMove.zero) {
          return 'assets/sprite.svg#circle-a5a6f6'
      } return
  }
}
