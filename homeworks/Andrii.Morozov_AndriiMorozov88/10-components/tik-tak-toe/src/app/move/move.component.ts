import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-move',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.css']
})
export class MoveComponent {
    player!:number;
    iconSize = 35;
    constructor(private dataService: DataService) {
        this.dataService.currentPlayer$.subscribe(player => this.player = player);
    }
}

