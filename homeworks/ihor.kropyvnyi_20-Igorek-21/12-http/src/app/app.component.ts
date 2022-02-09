import {Component, OnInit} from '@angular/core';
import {AuthService} from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'To Do List';

  constructor( private authService: AuthService) {
  }

  ngOnInit() {
      const currentToken  = localStorage.getItem('auth-token');
      if (currentToken !== null) {
          this.authService.setToken(currentToken);
      }
  }
}
