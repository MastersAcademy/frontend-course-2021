// const startButtonEl = document.querySelector('[data-start-game]') as HTMLButtonElement
// const stopButtonEl = document.querySelector('[data-stop-game]') as HTMLButtonElement
// const restartButtonEl = document.querySelector('[data-restart-game]') as HTMLButtonElement
const currentScoreEl = document.querySelector('[data-current-score]') as HTMLDivElement
const bollEl = document.querySelector('[data-boll]') as HTMLDivElement
const scoreChangerEl = document.querySelector('[data-change-points]') as HTMLDivElement
// const loaderEl = document.querySelector('[data-loader]') as HTMLDivElement
const letterEl = document.querySelector('[data-enter-letter]') as HTMLParagraphElement

interface ICurrentLetter {
    letter: string
    charCode: number
}

interface IActionButtons {
    start: boolean
    stop: boolean
    restart: boolean
}

interface IBoll {
    width: number
    height: number
}

interface IPoints {
    current: number
    changePoints: number
}

interface IIsKeyDown {
    keyDown: boolean
}

const isKeyDownStatus: IIsKeyDown = {
    keyDown: false
}

const gameStatus: IActionButtons = {
    start: false,
    stop: false,
    restart: false,
}

const bollStatus: IBoll = {
    width: bollEl.offsetWidth,
    height: bollEl.offsetHeight
}

const gameScore: IPoints = {
    current: 100,
    changePoints: 0,
}

const currentLetter: ICurrentLetter = {
    letter: '',
    charCode: 0
}

function correctKeyUp():void {
    const addPoints: number = Math.floor(Math.random() * (11 - 5) + 5)
    gameScore.changePoints = addPoints
    gameScore.current += addPoints
    currentScoreEl.innerText = String(gameScore.current)
    scoreChangerEl.innerText = String(`+${gameScore.changePoints}`)
}

function wrongKeyUp(): void {
    const addPoints: number = Math.floor(Math.random() * (26 - 20) + 20)
    gameScore.changePoints = -addPoints
    gameScore.current -= addPoints
    currentScoreEl.innerText = String(gameScore.current)
    scoreChangerEl.innerText = String(gameScore.changePoints)
}

function notKeyUp():void {
    const addPoints: number = Math.floor(Math.random() * (16 - 10) + 10)
    gameScore.changePoints = -addPoints
    gameScore.current -= addPoints
    currentScoreEl.innerText = String(gameScore.current)
    scoreChangerEl.innerText = String(gameScore.changePoints)
}

function createNewScore(type: string): void {
    switch (type) {
        case 'correct':
            correctKeyUp()
            break
        case 'wrong':
            wrongKeyUp()
            break
        default:
            notKeyUp()
    }
    if (gameScore.current > 200) {
        stopGame('win')
    } else if (gameScore.current <= 0) {
        stopGame('lose')
    }
}

function createNewLetter (): void {
    const charCodeLetter: number = Math.floor(Math.random() * (91 - 65) + 65)
    currentLetter.letter = String.fromCharCode(charCodeLetter)
    currentLetter.charCode = +charCodeLetter
}

function renderLetter(): void {
    createNewLetter()
    isKeyDownStatus.keyDown = false
    letterEl.innerText = currentLetter.letter
}

function startGame (): void {
    gameStatus.start = true
    currentScoreEl.innerText = String(gameScore.current)
    currentScoreEl.classList.remove('current__score-win')
    currentScoreEl.classList.remove('current__score-lose')
    renderLetter()
}

function stopGame (type: string): void {
    gameStatus.start = false
    gameStatus.stop = true
    gameStatus.restart = false
    switch (type){
        case 'win':
            currentScoreEl.classList.add('current__score-win')
            currentScoreEl.classList.remove('current__score-lose')
            currentScoreEl.innerText = `You won ${gameScore.current} points`
            break
        case 'lose':
            currentScoreEl.classList.remove('current__score-win')
            currentScoreEl.classList.add('current__score-lose')
            currentScoreEl.innerText = `You lose`
            break
    }
    letterEl.innerText = ''
    scoreChangerEl.innerText = ''
    gameScore.current = 100
    gameScore.changePoints = 0
}

document.addEventListener('keydown', (e) => {
    if(gameStatus.start) {
        if (e.keyCode === currentLetter.charCode) {
            scoreChangerEl.classList.add('changer__points-wrong')
            scoreChangerEl.classList.add('changer__points-correct')
            createNewScore('correct')
        } else {
            scoreChangerEl.classList.add('changer__points-wrong')
            scoreChangerEl.classList.remove('changer__points-correct')
            createNewScore('wrong')
        }
        renderLetter()
    }
})

function init():void {
    startGame()
}

init()

// startButtonEl.addEventListener('click', () => {
//     if (!gameStatus.start) {
//         startGame()
//     }
// })

