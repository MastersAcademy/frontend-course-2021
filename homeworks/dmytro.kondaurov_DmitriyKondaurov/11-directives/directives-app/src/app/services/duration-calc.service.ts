import { Injectable } from '@angular/core';
import {Imethod} from '../app.interface';

@Injectable({
    providedIn: 'root'
})
export class DurationCalcService {

    calc(obj: Imethod | any): number {
        let result = 0;
        for (const prop in obj) {
            const value = obj[prop];
            if (typeof value === 'number' && prop === 'duration') {
                result += value;
            } else if (typeof value === 'object') {
                result += (this.calc(value));
            }
        }
        return result;
    }
}
