import { Component, OnInit } from '@angular/core';
import {Irecipes} from './app.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: Irecipes[] | undefined;
  $data: Observable<Irecipes[]> | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.$data = this.http.get<Irecipes[]>(
          'https://api.punkapi.com/v2/beers'
      );

      this.$data.subscribe(recList => {
          this.recipes = recList;
          console.log(this.recipes);
      })

  }
}
