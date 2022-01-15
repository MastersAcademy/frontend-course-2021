import { Pipe, PipeTransform } from '@angular/core';
import {IIngredients, INameIngredients} from '../app.interface';

@Pipe({
    name: 'transformIngredients'
})
export class TransformIngredientsPipe implements PipeTransform {
    allIng: string[] = [];
    transform(listIng: IIngredients): string[] {
        listIng.hops.forEach((item: INameIngredients) => {
            this.allIng.push(item.name);
        })
        listIng.malt.forEach((item: INameIngredients) => {
            this.allIng.push(item.name);
        })
        this.allIng.push(listIng.yeast)
        return this.allIng;
    }

}
