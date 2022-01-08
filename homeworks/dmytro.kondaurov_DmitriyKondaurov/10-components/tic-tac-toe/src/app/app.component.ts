import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'tic-tac-toe';
    scorePl1 = 0;
    scorePl2 = 0;
    alertBox = '';
    state: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    resetCurGame() {
        this.state = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
    }

    stateCheck(player:number) {
        if (player === 1) {
            for (const row in this.state) {
                if (this.state[row].every((item:number) => item === 1)) {
                    this.scorePl1++;
                    alert('Player 1 win!')
                    this.resetCurGame();
                }
            }

        } else {
            for (const row in this.state) {
                if (this.state[row].every((item:number) => item === 2)) {
                    this.scorePl2++;
                    alert('Player 2 win!')
                    this.resetCurGame();
                }
            }
        }
    }
}
