import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-move',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.css']
})
export class MoveComponent {
    player!:number;
    constructor(private data: DataService) {
        this.data.currentPlayer$.subscribe(player => this.player = player);
    }
    get icon() {
        if (this.player === 1) {
            return 'assets/sprite.svg#x'
        }
        if (this.player === 2) {
            return 'assets/sprite.svg#circle'
        } return
    }
}
