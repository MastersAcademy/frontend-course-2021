import { init as weekInit } from './week.js';
import { init as timeInit } from './time.js';

((weekInitFn, timeInitFn) => {
    weekInitFn();
    timeInitFn();
})(weekInit, timeInit);
