import { Component, OnInit } from '@angular/core';
import { DataprocessorService } from './dataprocessor.service';
import { Card } from './app.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'cocktail-recipe-book';
    cards!: Array<Card>;
    searchName = '';
    choises = [
        { id: 0, name: 'to low' },
        { id: 1, name: 'to big' },
    ];
    selectedValue = this.choises[0].id;
    constructor(private dataprocessorService: DataprocessorService) {}

    ngOnInit(): void {
        this.dataprocessorService.fetchData().subscribe(data =>{
            this.cards = data;
        });
    }
}
