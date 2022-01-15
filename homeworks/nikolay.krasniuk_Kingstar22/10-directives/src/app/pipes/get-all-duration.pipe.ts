import { Pipe, PipeTransform } from '@angular/core';
import {IAllDDuration} from '../app.interface';
import {GetDurationService} from '../services';

@Pipe({
    name: 'getAllDuration'
})
export class GetAllDurationPipe implements PipeTransform {
    constructor(private testServ: GetDurationService) {}
    transform(value: IAllDDuration): number {
        return this.testServ.getDuration(value);
    }

}



