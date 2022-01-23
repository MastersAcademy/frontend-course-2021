import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    @Input() player1 = '';
    @Input() player2 = '';
    @Input() player1Score = 0;
    @Input() player2Score = 0;
    @Output() inputHandle = new EventEmitter();

    changePlayerName(event: {id:  string, value: string}) {
        this.inputHandle.emit(event);
    }
}
