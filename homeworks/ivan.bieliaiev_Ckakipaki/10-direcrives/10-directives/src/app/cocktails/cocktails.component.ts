import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls: ['./cocktails.component.css'],
    providers: [HttpService]
})
export class CocktailsComponent implements OnInit {
    cocktails: Observable<object> | undefined | null = undefined;
    constructor(private http: HttpService) { }

    ngOnInit(): void {
        this.cocktails = this.http.getData();
    }

}
