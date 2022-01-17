import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ingridients'
})
export class IngridientsPipe implements PipeTransform {

    transform(value: object): string {
        return Object.keys(value).toString()
    }

}
