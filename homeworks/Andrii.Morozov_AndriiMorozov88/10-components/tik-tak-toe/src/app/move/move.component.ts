import { Component } from '@angular/core';
import { RxjsService } from '../rxjs.service';

@Component({
    selector: 'app-move',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.css']
})
export class MoveComponent {
    player!:number;
    iconSize = 35;
    constructor(private rxjsService: RxjsService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.player = player);
    }
}

