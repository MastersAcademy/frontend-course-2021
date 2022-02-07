import { Component, Input } from '@angular/core';
import { IDrink } from '../../models';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() data!: IDrink

    getTimeToCookColor(time: number) {
        if(time > 0 && time < 50) {
            return 'var(--card-time-short)';
        }

        if(time >= 50 && time <= 74) {
            return 'var(--card-time-medium)';
        }

        if(time >= 75) {
            return 'var(--card-time-long)';
        }

        return 'var(--card-time-none)';
    }
}
