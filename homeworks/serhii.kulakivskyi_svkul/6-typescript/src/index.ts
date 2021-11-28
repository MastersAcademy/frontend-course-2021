import { fromEvent, Subscription, interval } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

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

    enum GameSettings {
        SCORE = 100
    }

    class CharGame {
        buttonInitEl: HTMLButtonElement
        balloonContentEl: HTMLElement
        balloonEl: HTMLElement
        scoreEl: HTMLElement
        charEl: HTMLElement
        currentChar: string
        progressBarEl: HTMLElement
        progressBarWrapperEl: HTMLElement
        scoresListEl: HTMLElement
        score: number | null
        keyHandlerSourse$: Subscription | null
        timer$: Subscription | null
        gameTimer$: Subscription | null
        gameTime: number
        scoresList: number[]

        constructor(
            buttonInitEl: HTMLButtonElement,
            balloonContentEl: HTMLElement,
            balloonEl: HTMLElement,
            scoreEl: HTMLElement,
            charEl: HTMLElement,
            progressBarEl: HTMLElement,
            progressBarWrapperEl: HTMLElement,
            scoresListEl: HTMLElement
        ) {
            this.buttonInitEl = buttonInitEl;
            this.balloonContentEl = balloonContentEl;
            this.balloonEl = balloonEl;
            this.scoreEl = scoreEl;
            this.charEl = charEl;
            this.progressBarEl = progressBarEl;
            this.progressBarWrapperEl = progressBarWrapperEl;
            this.scoresListEl = scoresListEl;
            this.score = GameSettings.SCORE;
            this.currentChar = '';
            this.keyHandlerSourse$ = null;
            this.timer$ = null;
            this.gameTimer$ = null;
            this.gameTime = 0;
            this.scoresList = [];
        }

        resetData() {
            if(this.keyHandlerSourse$ || this.timer$) {
                this.removeHandlers();
            }

            if(this.gameTimer$) {
                this.removeScoreTimer();
            }

            this.progressBarWrapperEl.classList.add('progress-bar--active');
            this.balloonContentEl.className = 'content';
            this.setBallonSize(GameSettings.SCORE);
            this.scoreEl.innerText = `Your score: ${GameSettings.SCORE}`;
            this.score = GameSettings.SCORE;
            this.gameTime = 0;
            this.balloonEl.innerText = '';
            this.buttonInitEl.innerText = GameStatus.END;
        }

        startGame() {
            this.resetData();
            this.setCurrentChar();
            this.addHandlers();
            this.addScoreTimer();
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
            this.balloonEl.innerText = '';
            this.progressBarWrapperEl.classList.remove('progress-bar--active');
            this.removeScoreTimer();
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


            this.timer$ = interval(2000 / 100)
                .pipe(
                    take(100),
                    map((step: number) => step + 1),
                    tap((step: number) => {
                        const progressPercent = step / 100 * 100;
                        this.progressBarEl.style.width = `${progressPercent}%`;

                        if(progressPercent === 100) {
                            const scoreDecrease = getRandomArbitrary(10, 15);
                            this.updateScore(-scoreDecrease);

                            this.endInterval();
                        }
                    })
                ).subscribe();
        }

        addScoreTimer() {
            this.gameTimer$ = interval(1000)
            .pipe(
                map((step: number) => step + 1),
                tap(() => {
                    this.gameTime += 1;
                })
            ).subscribe();
        }

        removeScoreTimer() {
            this.gameTimer$.unsubscribe();
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
            const scoreType = val > 0 ? '+' : '';
            const currentWidth = parseInt(this.balloonEl.style.width);

            if (this.score >= 200 || this.score <= 0) {
                this.setBallonSize(0);
                this.balloonEl.innerText = '';
                return;
            }

            this.balloonEl.innerText = `${scoreType} ${val}`;
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
                this.scoresList.push(this.gameTime)
                this.updateScoresList();
                return;
            }

            if (status === GameStatus.LOSE) {
                this.balloonContentEl.className = 'content content--lose';
                this.scoreEl.innerText = 'You lose';
                this.buttonInitEl.innerText = GameStatus.START;
                this.charEl.innerText = '🥲👨🏼‍🦯🤦🏼‍♂️🫂';
            }
        }

        updateScoresList() {
            const bestScores: number[] = this.scoresList.sort((a, b) => a - b).slice(0, 10);

            if(bestScores.length) {
                const fragment = document.createDocumentFragment();

                bestScores.forEach(el => {
                    const listItem: HTMLElement = document.createElement('li');
                    listItem.className = 'scores__item';
                    listItem.innerText = el + 's';

                    fragment.appendChild(listItem)
                })

                this.scoresListEl.innerHTML = '';
                this.scoresListEl.appendChild(fragment);
            }
        }
    }

    const balloonContentEl: HTMLElement = document.querySelector('[data-content]');
    const balloonEl: HTMLElement = document.querySelector('[data-balloon]');
    const scoreEl: HTMLElement = document.querySelector('[data-score]');
    const charEl: HTMLElement = document.querySelector('[data-char]');
    const buttonInitEl: HTMLButtonElement = document.querySelector('[data-init]');
    const buttonRestartEl: HTMLButtonElement = document.querySelector('[data-restart]');
    const progressBarEl: HTMLElement = document.querySelector('[data-progress-bar]');
    const progressBarWrapperEl: HTMLElement = document.querySelector('[data-progress-wrapper]');
    const scoresListEl: HTMLElement = document.querySelector('[data-scores-list]');

    if(balloonContentEl
        && balloonEl
        && scoreEl
        && charEl
        && buttonInitEl
        && buttonRestartEl
        && progressBarEl
        && progressBarWrapperEl
        && scoresListEl
    ) {
        const charGame = new CharGame(
            buttonInitEl,
            balloonContentEl,
            balloonEl,
            scoreEl,
            charEl,
            progressBarEl,
            progressBarWrapperEl,
            scoresListEl
        );

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
                    charGame.setResult(GameStatus.LOSE);
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
