import { Pipe, PipeTransform } from '@angular/core';
import { IMash } from '../models';

@Pipe({
    name: 'timeToCook'
})
export class TimeCookPipe implements PipeTransform {
    transform(arr: IMash[]) {
        return arr.reduce((prev, next) => {
            return prev + next.duration;
        }, 0)
    }
}
