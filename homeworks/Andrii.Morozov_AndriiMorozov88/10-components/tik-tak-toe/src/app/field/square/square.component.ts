import { Component, Input } from '@angular/core';
import { PlayerMove } from '../../enums';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent  {
  @Input() square!:number;
  get icon() {
      if (this.square === PlayerMove.cross) {
          return 'assets/sprite.svg#x'
      }
      if (this.square === PlayerMove.zero) {
          return 'assets/sprite.svg#circle'
      } return
  }
}
