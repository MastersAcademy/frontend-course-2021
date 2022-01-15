import { Injectable } from '@angular/core';
import {IAllDDuration, IDuration} from '../app.interface';

@Injectable({
    providedIn: 'root'
})
export class GetDurationService {

    duration = 0;
    getDuration(value: IAllDDuration)  {
        this.duration = 0;
        value.mash_temp.forEach((item: IDuration) => {
            this.duration += item.duration;
        })
        return this.duration;
    }
}
