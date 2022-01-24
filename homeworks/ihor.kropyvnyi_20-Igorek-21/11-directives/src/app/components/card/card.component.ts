import {Component, Input} from '@angular/core';
import {Recipes} from '../../models/recipes.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() recipe!: Recipes

}
