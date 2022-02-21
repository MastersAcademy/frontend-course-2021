import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recept } from './recept';
import { Observable } from 'rxjs';

@Injectable()
export class ReceptService {

    constructor(private http: HttpClient) { }

    getRecept(): Observable<Recept[]> {
        return this.http.get<Recept[]>('https://api.punkapi.com/v2/beers');
    }
}
