import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CocktailsService } from './cocktails.service';
import {ICocktailInterface} from '../interfaces/cocktail.interface';

@Component({
    selector: 'app-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls: ['./cocktails.component.css'],
    providers: [CocktailsService, HttpService]
})
export class CocktailsComponent implements OnInit {
    data: ICocktailInterface[] = [];

    constructor(private service: CocktailsService) { }

    ngOnInit(): void {
        this.service.getCocktails().subscribe((data) => {
            this.data = data;
        });
    }
}
