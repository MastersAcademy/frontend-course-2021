import { Pipe, PipeTransform } from '@angular/core';
import { Ingredients } from 'src/app/app.interface';

@Pipe({
    name: 'getIngredients'
})
export class GetIngredientsPipe implements PipeTransform {

    ingr: string[] = [];

    transform(value: Ingredients): string[] {
        value.hops.map(({ name }) => this.ingr.push(name));
        value.malt.map(({ name }) => this.ingr.push(name));
        this.ingr.push(value.yeast);
        return this.ingr;
    }
}
