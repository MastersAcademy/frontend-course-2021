import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-actions',
    templateUrl: './game-actions.component.html',
    styleUrls: ['./game-actions.component.css']
})
export class GameActionsComponent implements OnInit {

    @Output() onClick = new EventEmitter<any>();

    ngOnInit(): void {
        console.log('acrions inited')
    }

    resetPlayersScore ():void {
        this.onClick.emit()
    }
}
