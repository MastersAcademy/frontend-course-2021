import { timer, fromEvent, Subscription } from 'rxjs';

import { getRandomCharacter, getRandomArbitrary } from './js/utils';

import "./css/normalize.css";
import "./css/index.css";

(() => {
    enum GameStatus {
        START = 'Start',
        END = 'End',
        WIN = 'Win',
        LOSE = 'Lose'
    }

    class CharGame {
        buttonInitEl: HTMLButtonElement
        balloonContentEl: HTMLElement
        balloonEl: HTMLElement
        scoreEl: HTMLElement
        charEl: HTMLElement
        score: number | null
        keyHandlerSourse$: Subscription | null
        timer$: Subscription | null
        currentChar: string

        constructor(
            buttonInitEl: HTMLButtonElement,
            balloonContentEl: HTMLElement,
            balloonEl: HTMLElement,
            scoreEl: HTMLElement,
            charEl: HTMLElement
        ) {
            this.buttonInitEl = buttonInitEl;
            this.balloonContentEl = balloonContentEl;
            this.balloonEl = balloonEl;
            this.scoreEl = scoreEl;
            this.charEl = charEl;
            this.score = 100;
            this.currentChar = '';
            this.keyHandlerSourse$ = null;
            this.timer$ = null;
        }

        resetData() {
            this.balloonContentEl.className = 'content';
            this.setBallonSize(100);
            this.scoreEl.innerText = 'Your score: 100';
            this.score = 100;
            this.buttonInitEl.innerText = GameStatus.END;
        }

        startGame() {
            this.resetData();
            this.setCurrentChar();
            this.addHandlers();
        }

        endInterval() {
            this.removeHandlers();

            if(this.score > 0 && this.score < 200 ) {
                this.setCurrentChar();
                this.addHandlers();
            }
        }

        endGame() {
            this.removeHandlers();
            this.setBallonSize(0);
            this.setResult(GameStatus.LOSE);
        }

        addHandlers() {
            this.keyHandlerSourse$ = fromEvent(document, 'keydown')
                .subscribe((val: KeyboardEvent) => {
                    const { key } = val;

                    if(key.toUpperCase() === this.currentChar) {
                        const scoreIncrease = getRandomArbitrary(5, 10);
                        this.updateScore(scoreIncrease);
                    } else {
                        const scoreDecrease = getRandomArbitrary(20, 25);
                        this.updateScore(-scoreDecrease);
                    }

                    this.endInterval();
                }
            );

            this.timer$ = timer(2000).subscribe(() => {
                const scoreDecrease = getRandomArbitrary(10, 15);
                this.updateScore(-scoreDecrease);

                this.endInterval();
            });
        }

        removeHandlers() {
            this.keyHandlerSourse$.unsubscribe();
            this.timer$.unsubscribe();
        }

        updateScore(val: number) {
            this.score += val;

            if (this.score >= 200) {
                this.endGame();
                this.setResult(GameStatus.WIN);
                return;
            }

            if ( this.score <= 0) {
                this.endGame();
                this.setResult(GameStatus.LOSE);
                return;
            }

            this.updateBallonEl(val);
            this.scoreEl.innerText = `Your score: ${this.score}`;
        }

        updateBallonEl(val: number) {
            const currentWidth = parseInt(this.balloonEl.style.width);

            if (this.score >= 200) {
                this.setBallonSize(0)
                return;
            }

            if ( this.score <= 0) {
                this.setBallonSize(0)
                return;
            }

            this.setBallonSize(val, currentWidth);
        }

        setCurrentChar() {
            this.currentChar = getRandomCharacter();
            this.charEl.innerText = this.currentChar;
        }

        setBallonSize(size: number, prevSize?: number) {
            if(prevSize) {
                this.balloonEl.style.cssText = `width: ${size + prevSize}px; height: ${size + prevSize}px`;

                return;
            }

            this.balloonEl.style.cssText = `width: ${size}px; height: ${size}px`;
        }

        setResult(status: GameStatus.LOSE | GameStatus.WIN) {
            if (status === GameStatus.WIN) {
                this.balloonContentEl.className = 'content content--win';
                this.scoreEl.innerText = 'You win';
                this.buttonInitEl.innerText = GameStatus.START;
                this.charEl.innerText = '🧠🦾🏆👏🏻';
                return;
            }

            if (status === GameStatus.LOSE) {
                this.balloonContentEl.className = 'content content--lose';
                this.scoreEl.innerText = 'You lose';
                this.buttonInitEl.innerText = GameStatus.START;
                this.charEl.innerText = '🥲👨🏼‍🦯🤦🏼‍♂️🫂';
            }
        }
    }

    const balloonContentEl: HTMLElement = document.querySelector('[data-content]');
    const balloonEl: HTMLElement = document.querySelector('[data-balloon]');
    const scoreEl: HTMLElement = document.querySelector('[data-score]');
    const charEl: HTMLElement = document.querySelector('[data-char]');
    const buttonInitEl: HTMLButtonElement = document.querySelector('[data-init]');
    const buttonRestartEl: HTMLButtonElement = document.querySelector('[data-restart]');

    if(balloonContentEl && balloonEl && scoreEl && charEl && buttonInitEl && buttonRestartEl) {
        const charGame = new CharGame(buttonInitEl, balloonContentEl, balloonEl, scoreEl, charEl);

        fromEvent(buttonInitEl, 'click')
            .subscribe(() => {
                const currentStatus = buttonInitEl.innerText;

                if(currentStatus === GameStatus.START) {
                    charGame.startGame();
                    buttonInitEl.innerText = GameStatus.END;
                    return;
                }

                if(currentStatus === GameStatus.END) {
                    charGame.endGame();
                    buttonInitEl.innerText = GameStatus.START;
                }
            }
        );

        fromEvent(buttonRestartEl, 'click')
            .subscribe(() => {
                charGame.startGame();
            }
        );
    }
})();
