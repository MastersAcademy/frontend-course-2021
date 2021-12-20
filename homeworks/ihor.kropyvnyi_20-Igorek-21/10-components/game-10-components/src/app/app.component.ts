import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataEl = document.getElementsByClassName('icon')
  playersMove = true;
  playersWay = 0;
  countWinnerPlayer1 = 0;
  countWinnerPlayer2 = 0;
  state = [
      [0, 1, 2],
      [0, 1, 2],
      [0, 0, 0],
  ];

  onClick(event: Event) {
      const element = (event as any).target
      if (this.playersMove) {
          element.parentElement.classList.add('list__game-item--blue');
          element.firstElementChild.setAttribute('xlink:href', '../assets/svg/sprites.svg#x-icon');
          element.firstElementChild.innerHTML = 'x';
          this.playersMove = false;
      }
      else {
          element.parentElement.classList.add('list__game-item--violet');
          element.firstElementChild.setAttribute('xlink:href', '../assets/svg/sprites.svg#0-icon');
          element.firstElementChild.innerHTML = '0';
          this.playersMove = true;
      }

      this.playersWay += 1;
      this.checkWinner();
      this.addCountWinnerPlayer1();
      this.addCountWinnerPlayer2();
  }


  checkDataCross() {
      return (this.dataEl[0].innerHTML == 'x' && this.dataEl[1].innerHTML == 'x' && this.dataEl[2].innerHTML == 'x')
      || (this.dataEl[3].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[5].innerHTML == 'x')
      || (this.dataEl[6].innerHTML == 'x' && this.dataEl[7].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
      || (this.dataEl[0].innerHTML == 'x' && this.dataEl[3].innerHTML == 'x' && this.dataEl[6].innerHTML == 'x')
      || (this.dataEl[1].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[7].innerHTML == 'x')
      || (this.dataEl[2].innerHTML == 'x' && this.dataEl[5].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
      || (this.dataEl[0].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
      || (this.dataEl[2].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[6].innerHTML == 'x')

  }

  checkDataZero() {
      return (this.dataEl[0].innerHTML == '0' && this.dataEl[1].innerHTML == '0' && this.dataEl[2].innerHTML == '0')
      || (this.dataEl[3].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[5].innerHTML == '0')
      || (this.dataEl[6].innerHTML == '0' && this.dataEl[7].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
      || (this.dataEl[0].innerHTML == '0' && this.dataEl[3].innerHTML == '0' && this.dataEl[6].innerHTML == '0')
      || (this.dataEl[1].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[7].innerHTML == '0')
      || (this.dataEl[2].innerHTML == '0' && this.dataEl[5].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
      || (this.dataEl[0].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
      || (this.dataEl[2].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[6].innerHTML == '0')

  }

  deadHeatGame() {
      return (9 == this.playersWay )
  }

  addCountWinnerPlayer1() {
      if (this.checkDataCross()) {
          this.countWinnerPlayer1 +=1
      }
  }

  addCountWinnerPlayer2() {
      if (this.checkDataZero()) {
          this.countWinnerPlayer2 +=1
      }
  }

  endOfGame() {
      this.state = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ];
      this.playersWay = 0;
  }

  resetCurrentGame() {
      this.endOfGame();
  }

  resetAll() {
      this.endOfGame()
      this.countWinnerPlayer1 = 0;
      this.countWinnerPlayer2 = 0;
  }

  checkWinner() {
      setTimeout(()=> {
          if (this.checkDataCross() || this.checkDataZero() || this.deadHeatGame() ) {
              this.endOfGame()
              this.playersWay = 0
          }
      },3000)
  }
}
