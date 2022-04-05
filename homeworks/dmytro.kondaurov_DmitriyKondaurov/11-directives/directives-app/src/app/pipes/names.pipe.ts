import { Pipe, PipeTransform } from '@angular/core';
import {Ingredients} from '../app.interface';
import {NamesSearchService} from '../services/names-search.service';

@Pipe({
    name: 'names'
})
export class NamesPipe implements PipeTransform {

    constructor(private finedNames: NamesSearchService) {}

    transform(value: Ingredients): string[] {
        return this.finedNames.check(value);
    }

}
