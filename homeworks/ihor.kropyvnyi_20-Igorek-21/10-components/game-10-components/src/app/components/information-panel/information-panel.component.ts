import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-information-panel',
    templateUrl: './information-panel.component.html',
    styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent {

  @Input() countWinnerPlayer1 = 0;
  @Input() countWinnerPlayer2 = 0;

  @Output() resetCurrentGame = new EventEmitter ();
  @Output() resetAllGame = new EventEmitter ();

  resetGame(){
      this.resetCurrentGame.emit();
  }

  resetAll() {
      this.resetAllGame.emit();
  }
}
