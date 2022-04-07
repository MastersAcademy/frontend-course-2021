import { Pipe, PipeTransform } from '@angular/core';
import {Iingredients} from '../app.interface';
import {NamesSearchService} from '../services/names-search.service';

@Pipe({
    name: 'names'
})
export class NamesPipe implements PipeTransform {

    constructor(private finedNames: NamesSearchService) {}

    transform(value: Iingredients): string[] {
        return this.finedNames.check(value);
    }

}
