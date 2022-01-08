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
        for (const row in this.state) {
            if (this.state[row].every((item:number) => item === 1)) {
                this.scorePl1++;
                alert('Player 1 win!')
                this.resetCurGame();
            } else if (this.state[row].every((item:number) => item === 2)) {
                this.scorePl2++;
                alert('Player 2 win!')
                this.resetCurGame();
            }
        }
        if (this.state[0].every((item:number) => item != 0)
            && this.state[1].every((item:number) => item != 0)
            && this.state[2].every((item:number) => item != 0)
        ) {
            alert('Draw!')
            this.resetCurGame();
        }
        if (
            (this.state[0][0] === player && this.state[1][0] === player && this.state[2][0] === player)
            || (this.state[0][1] === player && this.state[1][1] === player && this.state[2][1] === player)
            || (this.state[0][2] === player && this.state[1][2] === player && this.state[2][2] === player)
            || (this.state[0][0] === player && this.state[1][1] === player && this.state[2][2] === player)
            || (this.state[0][2] === player && this.state[1][1] === player && this.state[2][0] === player)
        ) {
            player === 1? this.scorePl1++ : this.scorePl2++;
            alert('Player '+player+' win!')
            this.resetCurGame();
        }
    }
}
