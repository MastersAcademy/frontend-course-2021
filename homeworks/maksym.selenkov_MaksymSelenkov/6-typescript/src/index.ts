const keyEl: HTMLDivElement = document.querySelector('[data-key]');
const pointsEl: HTMLHeadingElement = document.querySelector('[data-points]');
const bubbleEl: HTMLDivElement = document.querySelector('[data-bubble]');
let points: number = 100;

const refreshInterval = setInterval(() => {
    generateKey();
    moveBar();
}, 2000);

document.addEventListener('keydown', playGame);

function playGame(e: KeyboardEvent): string {
    const correctKey: boolean = e.key.toUpperCase() === keyEl.textContent;

    if(correctKey) {
        points += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        changeBubble(points);
        if(points >= 200) finishGame('You win !!!');
        return pointsEl.textContent = points.toString();
    }
    if(!correctKey) {
        points -= Math.floor(Math.random() * (25 - 20 + 1)) + 20;
        changeBubble(points)
        if(points <= 0) finishGame('You loose :(');
        return pointsEl.textContent = points.toString();
    }
}

function generateKey(): void {
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    keyEl.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
    keyEl.classList.add('key__symbol');
}

function changeBubble(points: number): void {
    bubbleEl.style.width = points + 100 + 'px';
    bubbleEl.style.height = points + 100 + 'px';
}

function finishGame (text: string): void {
    const finishEl = document.createTextNode(text);
    document.body.append(finishEl);
    document.removeEventListener('keydown', playGame);
    clearInterval(refreshInterval);
}

function moveBar(): void {
    let i: number = 0;
    if (i == 0) {
        i = 1;
        const barEl: any = document.querySelector('[data-bar]');
        let width: number = 1;
        let id = setInterval(frame, 10);
        function frame(): void {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                barEl.style.width = width + "%";
            }
        }
    }
}
