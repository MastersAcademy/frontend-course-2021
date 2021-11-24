const keyEl = document.querySelector('[data-key]');
const pointsEl = document.querySelector('[data-points]');
const bubbleEl: any = document.querySelector('[data-bubble]');
let points: number = 100;

setInterval(() => {
    generateKey();
    moveBar();
}, 2000);

document.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.key.toUpperCase() === keyEl.textContent) {
        points += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        changeBubble(points);
        if(points >= 200) {
            const winEl = document.createTextNode('You win !!!');
            document.body.append(winEl);
            // e.preventDefault();
        }
        return pointsEl.textContent = points.toString();
    }
    if(e.key.toUpperCase() !== keyEl.textContent) {
        points -= Math.floor(Math.random() * (25 - 20 + 1)) + 20;
        changeBubble(points)
        if(points <= 0) {
            const looseEl = document.createTextNode('You loose :(');
            document.body.append(looseEl);
            // e.preventDefault();
        }
        return pointsEl.textContent = points.toString();
    }
})


    // if(e.key == undefined) {
    //     points -= Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    //     changeBubble(points)
        // if(points >= 200) {
        //     const winEl = document.createTextNode('You win !!!');
        //     document.body.append(winEl);
        //     e.preventDefault();
        // }
    //     if(points <= 0) {
    //         const looseEl = document.createTextNode('You loose :(');
    //         document.body.append(looseEl);
    //             e.preventDefault();
    //     }
    //     return pointsEl.textContent = points.toString();
    // }

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
