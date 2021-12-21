import { Component, Input } from '@angular/core';
import { GoogleFontsService } from './google-fonts.service';

@Component({
    selector: 'app-game-dashboard',
    templateUrl: './game-dashboard.component.html',
    styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent {


    constructor(private googleFontsService: GoogleFontsService) {
        googleFontsService.createLink();
    }

    resetCur() {
        return
    }


}
