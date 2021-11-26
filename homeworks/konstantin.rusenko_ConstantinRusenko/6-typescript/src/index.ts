let mainCharacter: string = '';
let score: number = 100;
let gameTimer: ReturnType<typeof setInterval>; 
let progressBarTimer: ReturnType<typeof setInterval>;
let width: number = 100;
const intervalTime: number = 2000;
const progressBarTik: number = 10;
let gameOver = false;

const scoreFieldEl = document.querySelector('[data-score]');
const characterFieldEl = document.querySelector('[data-character-block]');
const startButtonEl = document.querySelector('[data-start-button]');
const stopButtonEl = document.querySelector('[data-stop-button]');
const resetButtonEl = document.querySelector('[data-reset-button]');
const progressBar = document.querySelector('[data-progress-bar]');
const ballEl = document.querySelector('[data-ball]');

interface Event {
    key: string;
}

const clearIntervals = (): void => {
    clearInterval(gameTimer);
    clearInterval(progressBarTimer);
}

const restartTimers = (): void => {
    clearIntervals();
    startGameInterval();
    startProgressBar();
}

const numberGen = (min: number, max: number): number => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    let numb = Math.round(rand);
    return numb;
}

const characterGen = (): void => {
    let character: string = '';
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    character += charList.charAt(Math.floor(Math.random() * charList.length));
    characterFieldEl.innerHTML = character;
    mainCharacter = character;
};

const changeBallSize = (): void => {
    ballEl.setAttribute("style", `width:${score}px; height:${score}px`);
}

const moveProgressBar = (): void => {
    if (width <= 0) { 
        clearInterval(progressBarTimer)
    } else {
        width = width - (100 * progressBarTik) / intervalTime;
        progressBar.setAttribute("style", `display:block; width:${width}%`);
    }
};

const startProgressBar = (): void => {
    moveProgressBar();
    progressBarTimer = setInterval(moveProgressBar, progressBarTik);
}

const startGameInterval = (): void => {
    startGame();
    gameTimer = setInterval(resetRound, intervalTime);
};

const endGame = (): void => {
    gameOver = true;
    clearIntervals();
    progressBar.setAttribute("style", "display:none");
    startButtonEl.setAttribute("disabled", "true");
    document.removeEventListener('keydown', gameLogic);
};

const resetRound = (): void => {
    score -= numberGen(10, 15);
    startGame();
};

const startGame = (): void => {
    if (gameOver) return;
    width = 100;
    scoreFieldEl.innerHTML = score.toString();
    checkScore();
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
        scoreFieldEl.innerHTML = 'YOU WIN!'
        progressBar.setAttribute("style", "display:none");
        endGame();
        return;
    }
    if (score <= 0) {
        scoreFieldEl.innerHTML = 'YOU LOSE!'
        progressBar.setAttribute("style", "display:none");
        endGame();
        return;
    }
};

startButtonEl.addEventListener('click', () => {
    gameOver = false;
    startButtonEl.setAttribute("disabled", "true");
    progressBar.setAttribute("style", "display:block");
    startGameInterval();
    startProgressBar();
    document.addEventListener('keydown', gameLogic);
});

stopButtonEl.addEventListener('click', () => {
    startButtonEl.removeAttribute("disabled");
    gameOver = true;
    document.removeEventListener('keydown', gameLogic);
    clearIntervals();
});

resetButtonEl.addEventListener('click', () => {
    startButtonEl.removeAttribute("disabled");
    gameOver = true;
    clearIntervals();
    score = 100;
    width = 100;
    changeBallSize();
    scoreFieldEl.innerHTML = `${score}`;
    progressBar.setAttribute("style", "display:none");
    document.removeEventListener('keydown', gameLogic);
})