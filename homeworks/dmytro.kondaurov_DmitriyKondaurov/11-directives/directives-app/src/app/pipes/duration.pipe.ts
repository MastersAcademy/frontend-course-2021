import { Pipe, PipeTransform } from '@angular/core';
import { DurationCalcService } from '../services/duration-calc.service';
import { Imethod } from '../app.interface';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    constructor(private calcTime: DurationCalcService) {}

    transform(value: Imethod): number {
        return this.calcTime.calc(value);
    }

}
