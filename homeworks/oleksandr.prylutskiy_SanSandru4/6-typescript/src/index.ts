import * as _ from 'lodash';

let points: number = 100;
const pointsBlockEl: Element = document.querySelector('[data-attr-points]');
const symbolBlockEl: Element = document.querySelector('[data-attr-symbol]');
const sphereBlockEl: Element = document.querySelector('[data-attr-sphere]');
let symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolValue: string = '';

pointsBlockEl.textContent = `${points}`;

function randomSymbol<T>(symbolArray: T[]): T {
    let symbolIndex = Math.floor(Math.random() * symbolArray.length);
    return symbolArray[symbolIndex];
}

function outSymbol(value: string[]) {
    symbolValue = randomSymbol(value);
    symbolBlockEl.textContent = symbolValue;
}

setInterval(() => {
    outSymbol(symbols);
}, 2000);

// addEventListener('keyup', (event) => {
//     if (event.key === symbolValue) {
//         sphereBlockEl.style.width += 10
//     })
// });
