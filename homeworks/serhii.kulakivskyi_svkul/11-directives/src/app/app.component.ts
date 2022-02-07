import { Component, OnInit } from '@angular/core';
import { IDrink } from './models';
import { DrinksService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data!: IDrink[];

  constructor(private drinksService: DrinksService) {}

  ngOnInit() {
      this.drinksService
          .getDrinks()
          .subscribe((res: IDrink[]) => this.data = res)
  }
}
