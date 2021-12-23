import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-player-actions',
    templateUrl: './player-actions.component.html',
    styleUrls: ['./player-actions.component.css'],
})
export class PlayerActionsComponent {

  @Input() squares : string[] = [];
  @Output() sendClickElement = new EventEmitter ();

  state : number[][] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
  ];

  onClickElement(event: number) {
      this.sendClickElement.emit(event);
  }
}
