import { Component,  OnDestroy, OnInit } from '@angular/core';
import { Recipes} from '../../models/recipes.model';
import { finalize, Subscription } from 'rxjs';
import {GetRecipesService} from '../../services';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy{

  recipes: Recipes[] = [];
  isLoader = true;
  private subscription: Subscription = new Subscription();

  constructor( private getRecipes: GetRecipesService ) { }

  ngOnInit(): void {
      this.subscription.add(this.getRecipes.getRecipes()
          .pipe( (finalize( () => {
              this.isLoader = false;
          })))
          .subscribe({
              next: (data: Recipes[]): void => {
                  this.recipes = (data);
              }
          })
      )
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
