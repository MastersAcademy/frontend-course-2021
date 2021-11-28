let timeOut : ReturnType<typeof setInterval>

interface ICurrentLetter {
    letter: string
    keyCode: number
}

interface ICurrentScore {
    currentScore: number
    changing: number
}

interface IBallSize {
    width: number
    height: number
}

interface IGameStatus {
    start: boolean
    stop: boolean
}

const currentScoreEl = document.querySelector('[data-current-score]') as HTMLDivElement
const bollEl = document.querySelector('[data-ball]') as HTMLDivElement
const changinScoreEl = document.querySelector('[data-changing]') as HTMLDivElement
const currentLetterEl = document.querySelector('[data-current-letter]') as HTMLDivElement

const score: ICurrentScore = {
    currentScore: 100,
    changing: 0
}

const letter: ICurrentLetter = {
    letter: '',
    keyCode: 0
}

const bollSize: IBallSize = {
    width: 300,
    height:300
}

const gameStatus: IGameStatus = {
    start: false,
    stop: false
}

let isKeyUp: boolean = false

const renderNewLetter = (): void =>  {
    const charCode = Math.floor(Math.random() * (91 - 65) + 65)
    letter.letter = String.fromCharCode(charCode)
    letter.keyCode = charCode
    currentLetterEl.innerText = letter.letter
    isKeyUp = false
}

const changeBallSize = (type: string): void => {
    switch (type) {
        case 'add':
            bollSize.width += 20
            bollSize.height += 20
            break
        case 'remove':
            bollSize.width -= 20
            bollSize.height -= 20
            break
    }
    bollEl.style.width = `${bollSize.width}px`
    bollEl.style.height = `${bollSize.height}px`
    bollEl.style.borderRadius = `50%`
}

const changeScore = (type: string): void => {
    switch (type) {
        case 'correct':
            changeBallSize('add')
            let scorePlus: number = Math.floor(Math.random() * (10 - 5) + 5)
            score.changing = scorePlus
            score.currentScore += scorePlus
            changinScoreEl.innerText = `+ ${score.changing}`
            currentScoreEl.innerText = `${score.currentScore}`
            break
        case 'wrong':
            changeBallSize('remove')
            let scoreMinus: number = Math.floor(Math.random() * (25 - 20) + 20)
            score.changing = scoreMinus
            score.currentScore -= scoreMinus
            changinScoreEl.innerText = `- ${score.changing}`
            currentScoreEl.innerText = `${score.currentScore}`
            break
        case 'not':
            let scoreMinusNot: number = Math.floor(Math.random() * (15 - 10) + 10)
            score.changing = scoreMinusNot
            score.currentScore -= scoreMinusNot
            changinScoreEl.innerText = `- ${score.changing}`
            currentScoreEl.innerText = `${score.currentScore}`
    }
}

addEventListener('keydown', (e) => {
    if (gameStatus.start) {
        isKeyUp = true
        e.preventDefault()
        if (letter.keyCode === e.keyCode) {
            console.log('correct')
            changeScore('correct')
        } else {
            changeScore('wrong')
        }
        renderNewLetter()
        clearTimeout(timeOut)
        if (score.currentScore >= 200) {
            stopGame('win');
            return true
        } else if (score.currentScore <= 0) {
            stopGame('lose');
            return true
        }
        interval()
    }
})

const interval = ():void => {
    timeOut = setInterval(() => {
        changeBallSize('remove')
        renderNewLetter()
        changeScore('not')
    }, 2000)
}

const startGame =  (): void => {
    gameStatus.start = true
    gameStatus.stop = false
    renderNewLetter()
    interval()
}

startGame()

const stopGame = (type: string): void => {
    gameStatus.start = false
    gameStatus.stop = true
    clearTimeout(timeOut)
    changinScoreEl.innerText = ''
    switch (type) {
        case 'win':
            currentScoreEl.innerText = `You win ${score.currentScore} points`
            score.currentScore = 100
            break
        case 'lose':
            currentScoreEl.innerText = 'You lose'
            break
    }
}
