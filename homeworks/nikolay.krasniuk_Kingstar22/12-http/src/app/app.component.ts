import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserDataService} from './services/user-date.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private router: Router,private userDataService: UserDataService) {
    }
    ngOnInit() {
        this.userDataService.logOut();
        this.router.navigate(['']);
    }
}
