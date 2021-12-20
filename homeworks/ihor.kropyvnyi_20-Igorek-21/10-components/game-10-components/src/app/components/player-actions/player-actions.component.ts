import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-player-actions',
    templateUrl: './player-actions.component.html',
    styleUrls: ['./player-actions.component.css'],
})
export class PlayerActionsComponent {

  @Input() 'state' : number[][]
  @Output() sendClickElement = new EventEmitter ();

  onClickElement(event: MouseEvent) {
      this.sendClickElement.emit(event)
  }
}
