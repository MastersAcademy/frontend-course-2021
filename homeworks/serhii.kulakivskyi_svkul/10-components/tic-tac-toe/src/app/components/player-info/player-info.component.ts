import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
    @Input() id = '0';
    @Input() name = '';
    @Input() icon= '';
    @Input() score = 0;
    @Input() classes = '';
    @Output() input = new EventEmitter();

    changeInput(id: string, value: string) {
        this.input.emit({ id, value });
    }
}
