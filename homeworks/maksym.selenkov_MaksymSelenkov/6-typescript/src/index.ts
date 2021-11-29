const keyEl: HTMLDivElement = document.querySelector('[data-key]');
const pointsEl: HTMLHeadingElement = document.querySelector('[data-points]');
const bubbleEl: HTMLDivElement = document.querySelector('[data-bubble]');
let points: number = 100;

const refreshInterval = setInterval(() => {
    generateKey();
    moveBar();
    document.addEventListener('keydown', playGame);

    const noPressedKey = setTimeout(()=> {
        points -= getRandom(10, 15);
        pointsEl.textContent = points.toString();
        changeBubble(points);
        if(points >= 200) finishGame('You win !!!');
        if(points <= 0) finishGame('You loose :(');
    }, 1998);

    function playGame(e: KeyboardEvent): string {
        clearTimeout(noPressedKey);
        const correctKey: boolean = e.key.toUpperCase() === keyEl.textContent;
        if(correctKey) {
            points += getRandom(5, 10);
            changeBubble(points);
            if(points >= 200) finishGame('You win !!!');
            return pointsEl.textContent = points.toString();
        }
        if(!correctKey) {
            points -= getRandom(20, 25);
            changeBubble(points);
            if(points <= 0) finishGame('You loose :(');
            return pointsEl.textContent = points.toString();
        }
    }

    function finishGame(text: string): void {
        const finishEl: Text = document.createTextNode(text);
        document.body.append(finishEl);
        document.removeEventListener('keydown', playGame);
        clearInterval(refreshInterval);
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

    function moveBar(): void {
        const barEl: HTMLDivElement = document.querySelector('[data-bar]');
        let width: number = 1;
        let id = setInterval(frame, 20);
        function frame(): void {
            if (width >= 100) {
                clearInterval(id);
                width = 0;
            } else {
                width++;
                barEl.style.width = width + "%";
            }
        }
    }

    function getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}, 2000);
