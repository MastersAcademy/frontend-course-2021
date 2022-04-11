import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DurationHighlightSpeedService {

    speedMeasurement( duration: number): string {
        if(duration > 75 ) {
            return 'red';
        } else if (duration > 50 ) {
            return 'yellow';
        } else return 'green';
    }
}
