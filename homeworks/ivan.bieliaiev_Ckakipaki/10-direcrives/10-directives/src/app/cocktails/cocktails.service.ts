import {Injectable } from '@angular/core';
import {HttpService} from '../services/http.service';

@Injectable({
    providedIn: 'root'
})
export class CocktailsService {

    constructor(private httpReq: HttpService) {}

    getCocktails() {
        return this.httpReq.getCocktailsData();
    }

}
