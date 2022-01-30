import { Pipe, PipeTransform } from '@angular/core';
import { Card} from '../app.interface';

@Pipe({
    name: 'cocktailSort'
})
export class CocktailSortPipe implements PipeTransform {

    totalDuration = 0;

    transform(cards: Array<Card>, value: number): Card[] {
        return cards.sort((a: Card, b: Card): number => {
            if(+value === 1) {
                return this.getMesh(a.method.mash_temp) < this.getMesh(b.method.mash_temp) ? -1 : 1;
            }
            return this.getMesh(a.method.mash_temp) < this.getMesh(b.method.mash_temp) ? 1 : -1;
        });
    }

    getMesh(mash_temp: any) {
        this.totalDuration = 0;
        mash_temp.map(({ duration }: any) => this.totalDuration += duration);
        return this.totalDuration;
    }
}
