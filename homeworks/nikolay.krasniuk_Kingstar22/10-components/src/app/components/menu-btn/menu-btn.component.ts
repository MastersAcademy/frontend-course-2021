import {Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
    selector: 'app-menu-btn',
    templateUrl: './menu-btn.component.html',
    styleUrls: ['./menu-btn.component.css']
})
export class MenuBtnComponent {
    @Input() name = '';
    @Output() resetGame = new EventEmitter ();
    btnResetGame() {
        this.resetGame.emit();
    }
}
