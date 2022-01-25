import { Component, Input } from '@angular/core';
import { PlayerMove } from '../../enums';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent  {
  @Input() square!:number;
  sprite = 'assets/sprite.svg#';
  get icon() {
      if (this.square === PlayerMove.cross) {
          return 'cross'
      }
      if (this.square === PlayerMove.zero) {
          return 'circle'
      }
      return null
  }
}
