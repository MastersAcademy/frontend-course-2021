import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../app.interface';

@Pipe({
    name: 'cocktailFilter'
})
export class CocktailFilterPipe implements PipeTransform {


    transform(cards: Array<Card>, value: string): Card[] {
        return cards.filter(card => {
            return card.food_pairing.find((name) => {
                return name.includes(value)
            })
        });
    }
}