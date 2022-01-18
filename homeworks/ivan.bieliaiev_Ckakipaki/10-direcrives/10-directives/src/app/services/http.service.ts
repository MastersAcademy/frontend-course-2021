import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICocktailInterface} from '../interfaces/cocktail.interface';

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    constructor(private http: HttpClient){ }

    getCocktailsData():Observable<ICocktailInterface[]>{
        return this.http.get<ICocktailInterface[]>('https://api.punkapi.com/v2/beers');
    }
}
