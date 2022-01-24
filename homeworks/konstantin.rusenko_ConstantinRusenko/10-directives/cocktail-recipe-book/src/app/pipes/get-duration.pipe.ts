import { Pipe, PipeTransform } from '@angular/core';
import { MashTemp } from '../app.interface';

@Pipe({
    name: 'getDuration'
})
export class GetDurationPipe implements PipeTransform {

    totalDuration = 0;

    transform(value: MashTemp): number {
        value.mash_temp.map(({ duration }) => this.totalDuration += duration);
        return this.totalDuration;
    }

}
