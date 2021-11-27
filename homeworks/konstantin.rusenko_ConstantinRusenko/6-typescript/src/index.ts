let mainCharacter: string = '';
let score: number = 100;
let gameTimer: ReturnType<typeof setInterval>; 
let progressBarTimer: ReturnType<typeof setInterval>;
let width: number = 100;
let gameOver = false;
const intervalTime: number = 2000;
const progressBarTik: number = 10;
const scoreTable: number[] = [];

const scoreFieldEl = document.querySelector('[data-score]');
const characterFieldEl = document.querySelector('[data-character-block]');
const startButtonEl = document.querySelector('[data-start-button]');
const stopButtonEl = document.querySelector('[data-stop-button]');
const resetButtonEl = document.querySelector('[data-reset-button]');
const scoreButtonEl = document.querySelector('[data-score-button]');
const progressBar = document.querySelector('[data-progress-bar]');
const ballEl = document.querySelector('[data-ball]');
const scoreListEl = document.querySelector('[data-score-list]');
const closeButtonEl = document.querySelector('[data-close-button]');

interface Event {
    key: string;
};

const clearIntervals = (): void => {
    clearInterval(gameTimer);
    clearInterval(progressBarTimer);
};

const restartTimers = (): void => {
    clearIntervals();
    startGameInterval();
    startProgressBar();
};

const numberGen = (min: number, max: number): number => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    let numb = Math.round(rand);
    return numb;
};

const characterGen = (): void => {
    let character: string = '';
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    character += charList.charAt(Math.floor(Math.random() * charList.length));
    characterFieldEl.innerHTML = character;
    mainCharacter = character;
};

const changeBallSize = (): void => {
    ballEl.setAttribute("style", `width:${score}px; height:${score}px`);
};

const moveProgressBar = (): void => {
    if (width <= 0) { 
        clearInterval(progressBarTimer)
    } else {
        width = width - (100 * progressBarTik) / intervalTime;
        progressBar.classList.add('visible');
        progressBar.setAttribute("style", `width:${width}%`);
    }
};

const startProgressBar = (): void => {
    moveProgressBar();
    progressBarTimer = setInterval(moveProgressBar, progressBarTik);
};

const startGameInterval = (): void => {
    startGame();
    gameTimer = setInterval(resetRound, intervalTime);
};

const endGame = (): void => {
    gameOver = true;
    clearIntervals();
    progressBar.classList.add('hidden');
    startButtonEl.setAttribute("disabled", "true");
    document.removeEventListener('keydown', gameLogic);
    scoreTable.push(score);
    return;
};

const resetRound = (): void => {
    score -= numberGen(10, 15);
    checkScore();
    startGame();
};

const startGame = (): void => {
    if (gameOver) return; 
    width = 100;
    scoreFieldEl.innerHTML = score.toString();
    characterGen();
    changeBallSize();
}


const gameLogic = (event: Event): void => {
    if (mainCharacter === event.key.toUpperCase()) {
        score += numberGen(5, 10);
    } else {
        score -= numberGen(20, 25);
    }
    scoreFieldEl.innerHTML = score.toString();
    width = 100;
    clearInterval(gameTimer);
    startGameInterval();
    changeBallSize();
    characterGen();
    checkScore();
};

const checkScore = (): void => {
    if (score >= 200) {
        scoreFieldEl.innerHTML = `YOU WIN! YOUR SCORE: ${score}`;
        progressBar.classList.add('hidden');
        endGame();
        return;
    }
    if (score <= 0) {
        scoreFieldEl.innerHTML = `YOU LOSE! YOUR SCORE: ${score}`;
        progressBar.classList.add('hidden');
        endGame();
        return;
    }
};

const showScoreList = (): void => {
    scoreListEl.classList.add('visible');
    closeButtonEl.classList.add('visible');
    scoreListEl.innerHTML = '';
    scoreTable.map((number, index) => {
        const newScore = document.createElement('div');
        newScore.innerHTML = `${index+1}: ${number}`;
        newScore.classList.add('new-score');
        scoreListEl.appendChild(newScore);
    });
};

const hideScoreList = (): void => {
    scoreListEl.classList.toggle('visible');
    closeButtonEl.classList.toggle('visible');
};

const stopGame = (): void => {
    startButtonEl.removeAttribute("disabled");
    gameOver = true;
    document.removeEventListener('keydown', gameLogic);
    clearIntervals();
};

startButtonEl.addEventListener('click', () => {
    gameOver = false;
    startButtonEl.setAttribute("disabled", "true");
    progressBar.classList.add('visible');
    scoreListEl.classList.remove('visible');
    closeButtonEl.classList.remove('visible');
    startGameInterval();
    startProgressBar();
    document.addEventListener('keydown', gameLogic);
});

stopButtonEl.addEventListener('click', () => stopGame());

resetButtonEl.addEventListener('click', () => {
    startButtonEl.removeAttribute("disabled");
    gameOver = true;
    clearIntervals();
    score = 100;
    width = 100;
    changeBallSize();
    scoreFieldEl.innerHTML = `${score}`;
    progressBar.classList.add('hidden');
    document.removeEventListener('keydown', gameLogic);
});

scoreButtonEl.addEventListener('click', () => {
    showScoreList();
    stopGame();
});

closeButtonEl.addEventListener('click', () => hideScoreList());
