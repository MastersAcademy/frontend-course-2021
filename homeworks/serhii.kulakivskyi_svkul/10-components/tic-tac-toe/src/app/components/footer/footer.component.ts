import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    @Output() resetAll = new EventEmitter();
    @Output() resetCurrentGame = new EventEmitter();

    handleResetCurrentGame() {
        this.resetCurrentGame.emit();
    }

    handleResetAll() {
        this.resetAll.emit();
    }
}
