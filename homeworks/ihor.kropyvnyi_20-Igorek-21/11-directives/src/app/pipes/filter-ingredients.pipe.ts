import {Pipe, PipeTransform} from '@angular/core';
import {IngredientModel} from '../models/ingredient.model';

@Pipe({
    name: 'filterIngredients'
})
export class FilterIngredientsPipe implements PipeTransform {

    array: IngredientModel[] = [];

    transform(value: any): IngredientModel[] {
        if (value) {
            value.malt.forEach((element: any) => {
                this.array.push(element.name);
            })
            value.hops.forEach((element: any) => {
                this.array.push(element.name);
            })
        }
        return this.array;
    }
}
