import { Injectable } from '@angular/core';
import {Iingredients} from '../app.interface';

@Injectable({
    providedIn: 'root'
})
export class NamesSearchService {

    check(value: Iingredients): string[] {
        const names: string[] = [];
        if (value) {
            value.hops.map( item => names.push(item.name));
            value.malt.map( item => names.push(item.name));
        } else return value
        return names;
    }

}
