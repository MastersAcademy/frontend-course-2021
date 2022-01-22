import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
      <div class="app">
          <header class="header">
              <h1 class="header__title">Todo list</h1>

              <button
                  *ngIf="location.path() !== '/login'"
                  class="button button--secondary"
              >Log out</button>
          </header>

          <div class="container">
              <router-outlet></router-outlet>
          </div>
      </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public location: Location ) {}
}
