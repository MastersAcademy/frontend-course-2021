import {Pipe, PipeTransform} from '@angular/core';
import {IHops, IIngredients, IMalt, IName} from '../models/recipes.model';

@Pipe({
    name: 'filterIngredients'
})
export class FilterIngredientsPipe implements PipeTransform {

    array: IName[] = [];

    transform(value: IIngredients): IName[] {
        if (value) {
            value.malt.forEach((element:IMalt ) => {
                this.array.push(element.name);
            })
            value.hops.forEach((element: IHops) => {
                this.array.push(element.name);
            })
        }
        return this.array;
    }
}
