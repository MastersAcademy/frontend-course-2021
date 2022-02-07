import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDrink } from '../models';

const DRINKS_API = 'https://api.punkapi.com/v2/beers';

@Injectable({
    providedIn: 'root'
})
export class DrinksService {
    constructor(private http: HttpClient) {}

    getDrinks() {
        return this.http.get<IDrink[]>(DRINKS_API)
    }
}
