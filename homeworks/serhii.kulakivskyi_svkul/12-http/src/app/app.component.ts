import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-root',
    template: `
      <div class="app">
          <header class="header">
              <h1 class="header__title">Todo list</h1>

              <button
                  *ngIf="location.path() !== '/login' && location.path() === ''"
                  class="button button--secondary"
                  (click)="handleLogOut()"
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
    constructor(
        public location: Location,
        private authService: AuthService
    ) {}

    handleLogOut() {
        this.authService
            .logout()
    }
}
