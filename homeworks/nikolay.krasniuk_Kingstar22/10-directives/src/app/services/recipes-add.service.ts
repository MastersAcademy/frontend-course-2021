import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRecipes} from '../app.interface';

@Injectable({
    providedIn: 'root'
})
export class RecipesAddService {

    constructor(private http: HttpClient) {}

    getData(){
        return this.http.get<IRecipes[]>(' https://api.punkapi.com/v2/beers')
    }
}

