import { Component } from '@angular/core';
import { Icons } from './enums/icon_enum';
import { Player } from './enums/player_enum';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    icon = Icons.logo;
    iconSize = 35;

    constructor(private dataService: DataService) {
        this.dataService.currentWinner$.subscribe(winner => {
            if (winner === Player.cross) {
                setTimeout(this.crossWin, 1)
            }
            if (winner === Player.zero) {
                setTimeout(this.zeroWin, 1);
            }
        });
    }


    crossWin():void {
        alert('Player 1 Win!!!! Reset Current Game');
    }

    zeroWin():void {
        alert('Player 2 Win!!!! Reset Current Game');
    }
}
