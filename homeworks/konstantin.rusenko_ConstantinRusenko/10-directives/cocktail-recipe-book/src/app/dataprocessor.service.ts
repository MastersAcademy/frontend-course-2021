import { Injectable } from '@angular/core';
import { Card } from './app.interface';
// import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataprocessorService {

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get<Card[]>('https://api.punkapi.com/v2/beers')
    }
}
