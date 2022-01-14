import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    data: object[] | undefined

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.http.get('https://api.punkapi.com/v2/beers').subscribe((data:any) => this.data = data);
    }
}
