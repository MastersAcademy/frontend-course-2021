import { Component, Input } from '@angular/core';

enum playerMove {
  cross = 1,
  zero = -1
}
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
          return 'assets/sprite.svg#circle-c4c4c4'
      } return
  }
}
