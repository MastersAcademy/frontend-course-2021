import { Component, OnInit } from '@angular/core';

import { ReceptService } from '../recept.service';
import { Recept } from '../recept';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    providers: [ ReceptService ]
})
export class CardComponent {

    recepts: Recept[] = [];

    constructor (private receptService: ReceptService) {}

    ngOnInit(): void {
        this.receptService.getRecept().subscribe((data: Recept[]) => {
            return this.recepts = data;
        });
    }
}
