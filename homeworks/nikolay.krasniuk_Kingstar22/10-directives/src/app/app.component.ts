import {Component, OnInit} from '@angular/core';
import {IRecipes} from './app.interface';
import {RecipesAddService} from './services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = '10-directives';
    arrCards: IRecipes[] = [];

    constructor(private http: RecipesAddService){}

    ngOnInit() {
        this.http.getData()
            .subscribe((recipes) => this.arrCards = recipes);
    }

}
