import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable} from 'rxjs';
import {Recipes} from '../models/recipes.model';

@Injectable({
    providedIn: 'root'
})
export class GetRecipesService {

  recipeUrl = 'https://api.punkapi.com/v2/beers'

  constructor(private http: HttpClient) { }

  public getRecipes(): Observable<Recipes[]> {
      return this.http.get<Recipes[]>(this.recipeUrl)
          .pipe(
              map( (data: Recipes[]) => data),
              delay(3000)
          )
  }
}
