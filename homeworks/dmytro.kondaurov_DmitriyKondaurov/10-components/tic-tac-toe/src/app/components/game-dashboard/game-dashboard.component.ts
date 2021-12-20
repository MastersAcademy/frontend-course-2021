import { Component, OnInit } from '@angular/core';
import { GoogleFontsService } from './google-fonts.service';

@Component({
    selector: 'app-game-dashboard',
    templateUrl: './game-dashboard.component.html',
    styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {

    constructor(private googleFontsService: GoogleFontsService) {
        googleFontsService.createLink();
    }

    ngOnInit(): void {
        return
    }

}
