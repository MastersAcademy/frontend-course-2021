import { Pipe, PipeTransform } from '@angular/core';
import {IAllDDuration} from '../app.interface';
import {GetDurationService} from '../services';

@Pipe({
    name: 'getAllDuration'
})
export class GetAllDurationPipe implements PipeTransform {
    constructor(private durationService: GetDurationService) {}
    transform(value: IAllDDuration): number {
        return this.durationService.getDuration(value);
    }

}



