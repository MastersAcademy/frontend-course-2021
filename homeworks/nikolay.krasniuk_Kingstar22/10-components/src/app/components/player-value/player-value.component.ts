import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {Player} from '../../app.component';

@Component({
    selector: 'app-player-value',
    templateUrl: './player-value.component.html',
    styleUrls: ['./player-value.component.css']
})
export class PlayerValueComponent {
    @Input() player!: Player
    @Input() id = '';
    @Output() changeNamePlayer = new EventEmitter();

    changeName(value: string) {
        this.changeNamePlayer.emit(value);
    }
}



