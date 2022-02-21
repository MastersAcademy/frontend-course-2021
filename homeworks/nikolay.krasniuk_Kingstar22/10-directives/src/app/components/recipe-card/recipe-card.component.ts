import {Component, Input, OnInit} from '@angular/core';
import {IRecipes} from '../../app.interface';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
    @Input() card!: IRecipes;
    constructor() {
        return
    }

    ngOnInit(): void {
        return
    }

}
