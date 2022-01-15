import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls: ['./cocktails.component.css'],
    providers: [HttpService]
})
export class CocktailsComponent implements OnInit {
    cocktails: object[] | object | undefined = undefined;
    constructor(private http: HttpService) { }

    ngOnInit(): void {
        this.http.getData()
            .subscribe((response) =>{
                this.cocktails = response;
            });
    }

}
