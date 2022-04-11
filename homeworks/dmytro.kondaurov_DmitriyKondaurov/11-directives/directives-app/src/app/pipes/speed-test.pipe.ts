import { Pipe, PipeTransform } from '@angular/core';
import {DurationCalcService} from '../services/duration-calc.service';
import {DurationHighlightSpeedService} from '../services/duration-highlight-speed.service';
import {Imethod} from '../app.interface';

@Pipe({
    name: 'speedTest'
})
export class SpeedTestPipe implements PipeTransform {

    constructor(private calcTime: DurationCalcService,
        private speedCheck: DurationHighlightSpeedService) {}

    transform(value: Imethod ): string {
        const duration = this.calcTime.calc(value);
        if (this.speedCheck.speedMeasurement(duration) === 'red') {
            return 'slow';
        } else if (this.speedCheck.speedMeasurement(duration) === 'yellow') {
            return 'medium';
        } else return 'fast';
    }

}
